import Order from "../models/order.js";
import Product from "../models/Product.js";
import Deal from "../models/Deal.js";

import calculateDistance from "../utils/calculatedistance.js";

const RESTAURANT_LATITUDE = Number(
  process.env.RESTAURANT_LATITUDE
);

const RESTAURANT_LONGITUDE = Number(
  process.env.RESTAURANT_LONGITUDE
);

const DELIVERY_RADIUS_KM = Number(
  process.env.DELIVERY_RADIUS_KM || 5
);

const DELIVERY_FEE = 100;

export const createOrder = async (req, res) => {
  try {
    const { items, delivery, paymentMethod } = req.body;

    /*
    |--------------------------------------------------------------------------
    | Basic validation
    |--------------------------------------------------------------------------
    */

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Your cart is empty.",
      });
    }

    if (!delivery) {
      return res.status(400).json({
        success: false,
        message: "Delivery information is required.",
      });
    }

    if (
      !delivery.address?.trim() ||
      !delivery.area?.trim() ||
      !delivery.phone?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Complete delivery information is required.",
      });
    }

    if (
      typeof delivery.latitude !== "number" ||
      typeof delivery.longitude !== "number"
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid delivery coordinates are required.",
      });
    }

    if (paymentMethod !== "cash_on_delivery") {
      return res.status(400).json({
        success: false,
        message: "Invalid payment method.",
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Validate restaurant coordinates
    |--------------------------------------------------------------------------
    */

    if (
      Number.isNaN(RESTAURANT_LATITUDE) ||
      Number.isNaN(RESTAURANT_LONGITUDE)
    ) {
      return res.status(500).json({
        success: false,
        message: "Restaurant location is not configured.",
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Calculate delivery distance
    |--------------------------------------------------------------------------
    */

    const distance = calculateDistance(
      RESTAURANT_LATITUDE,
      RESTAURANT_LONGITUDE,
      delivery.latitude,
      delivery.longitude
    );

    /*
    |--------------------------------------------------------------------------
    | Check 5 km delivery radius
    |--------------------------------------------------------------------------
    */

    if (distance > DELIVERY_RADIUS_KM) {
      return res.status(400).json({
        success: false,
        message: `We only deliver within ${DELIVERY_RADIUS_KM} km of the restaurant.`,
        distance: Number(distance.toFixed(2)),
      });
    }

    /*
    |--------------------------------------------------------------------------
    | Build order items and calculate subtotal
    |--------------------------------------------------------------------------
    */

    const orderItems = [];
    let subtotal = 0;

    for (const item of items) {
      /*
      |--------------------------------------------------------------------------
      | Product
      |--------------------------------------------------------------------------
      */

      if (item.type === "product") {
        if (!item.productId || !item.size || !item.quantity) {
          return res.status(400).json({
            success: false,
            message: "Invalid product item.",
          });
        }

        const product = await Product.findOne({
          _id: item.productId,
          available: true,
        }).lean();

        if (!product) {
          return res.status(404).json({
            success: false,
            message: "One of the products is no longer available.",
          });
        }

        const selectedSize = product.sizes.find(
          (size) => size.name === item.size
        );

        if (!selectedSize) {
          return res.status(400).json({
            success: false,
            message: `${product.name} is not available in ${item.size} size.`,
          });
        }

        const quantity = Number(item.quantity);

        if (!Number.isInteger(quantity) || quantity < 1) {
          return res.status(400).json({
            success: false,
            message: "Invalid product quantity.",
          });
        }

        const itemTotal = selectedSize.price * quantity;

        subtotal += itemTotal;

        orderItems.push({
          type: "product",
          productId: product._id,
          name: product.name,
          image: product.image?.url || "",
          size: selectedSize.name,
          price: selectedSize.price,
          quantity,
        });
      }

      /*
      |--------------------------------------------------------------------------
      | Deal
      |--------------------------------------------------------------------------
      */

      else if (item.type === "deal") {
        if (!item.dealId || !item.quantity) {
          return res.status(400).json({
            success: false,
            message: "Invalid deal item.",
          });
        }

        const now = new Date();

        const deal = await Deal.findOne({
          _id: item.dealId,
          available: true,
          startDate: { $lte: now },
          endDate: { $gte: now },
        }).lean();

        if (!deal) {
          return res.status(404).json({
            success: false,
            message: "One of the deals is no longer available.",
          });
        }

        const quantity = Number(item.quantity);

        if (!Number.isInteger(quantity) || quantity < 1) {
          return res.status(400).json({
            success: false,
            message: "Invalid deal quantity.",
          });
        }

        const itemTotal = deal.dealPrice * quantity;

        subtotal += itemTotal;

        orderItems.push({
          type: "deal",
          dealId: deal._id,
          name: deal.name,
          image: deal.image?.url || "",
          price: deal.dealPrice,
          quantity,
        });
      }

      /*
      |--------------------------------------------------------------------------
      | Unknown item type
      |--------------------------------------------------------------------------
      */

      else {
        return res.status(400).json({
          success: false,
          message: "Invalid order item type.",
        });
      }
    }

    /*
    |--------------------------------------------------------------------------
    | Calculate final pricing
    |--------------------------------------------------------------------------
    */

    const deliveryFee = DELIVERY_FEE;

    const total = subtotal + deliveryFee;

    /*
    |--------------------------------------------------------------------------
    | Create order
    |--------------------------------------------------------------------------
    */

    const orderId = `ORD-${Date.now()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    const order = await Order.create({
      orderId,

      customer: {
        id : req.user.id,
        userId: req.user.userId,
        name: req.user.name,
        phone: req.user.phone,
      },

      items: orderItems,

      delivery: {
        address: delivery.address.trim(),
        area: delivery.area.trim(),
        phone: delivery.phone.trim(),
        instructions: delivery.instructions?.trim() || "",
        latitude: delivery.latitude,
        longitude: delivery.longitude,
        distance: Number(distance.toFixed(2)),
      },

      pricing: {
        subtotal,
        deliveryFee,
        total,
      },

      payment: {
        method: "cash_on_delivery",
        status: "pending",
      },

      orderStatus: "pending",
    });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully.",
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create order.",
    });
  }
};