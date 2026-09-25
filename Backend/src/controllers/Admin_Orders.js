import Order from "../models/order.js";
import User from "../models/user.js";


// GET ALL ORDERS
// GET ALL ORDERS
export const getAllOrders = async (req, res) => {
  try {
    const {
      search = "",
      status = "all",
      deliveryBoy = "all",
      sort = "newest",
    } = req.query;

    const query = {};

    // Search by order ID, customer name, user ID, or phone
    if (search.trim()) {
      const searchRegex = new RegExp(search.trim(), "i");

      query.$or = [
        { orderId: searchRegex },
        { "customer.name": searchRegex },
        { "customer.userId": searchRegex },
        { "customer.phone": searchRegex },
      ];
    }

    // Filter by order status
    if (status !== "all") {
      query.orderStatus = status;
    }

    // Filter by delivery boy
    if (deliveryBoy !== "all") {
      if (deliveryBoy === "unassigned") {
        query.deliveryBoy = null;
      } else {
        query.deliveryBoy = deliveryBoy;
      }
    }

    let sortOption = { createdAt: -1 };

    if (sort === "oldest") {
      sortOption = { createdAt: 1 };
    }

    if (sort === "highest_total") {
      sortOption = { "pricing.total": -1 };
    }

    if (sort === "lowest_total") {
      sortOption = { "pricing.total": 1 };
    }

    // Fetch filtered orders
    const orders = await Order.find(query)
      .sort(sortOption)
      .populate("deliveryBoy", "userId name phone")
      .lean();

    // Statuses considered active
    const activeStatuses = [
      "pending",
      "confirmed",
      "assigned",
      "out_for_delivery",
    ];

    // Get overall statistics
    const [
      totalOrders,
      pendingOrders,
      activeOrders,
      unassignedOrders,
      outForDeliveryOrders,
      deliveredOrders,
    ] = await Promise.all([
      Order.countDocuments(),

      Order.countDocuments({
        orderStatus: "pending",
      }),

      Order.countDocuments({
        orderStatus: { $in: activeStatuses },
      }),

      Order.countDocuments({
        deliveryBoy: null,
      }),

      Order.countDocuments({
        orderStatus: "out_for_delivery",
      }),

      Order.countDocuments({
        orderStatus: "delivered",
      }),
    ]);

    res.status(200).json({
      success: true,

      orders,

      statistics: {
        totalOrders,
        pendingOrders,
        activeOrders,
        unassignedOrders,
        outForDeliveryOrders,
        deliveredOrders,
      },
    });
  } catch (error) {
    console.error("Get admin orders error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch orders.",
    });
  }
};


// GET SINGLE ORDER
export const getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({ orderId })
      .populate("deliveryBoy", "userId name phone")
      .populate("customer.id", "userId name phone")
      .lean();

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Get admin order details error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch order details.",
    });
  }
};


// UPDATE ORDER STATUS
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { orderStatus } = req.body;

    const allowedStatuses = [
      "pending",
      "confirmed",
      "assigned",
      "out_for_delivery",
      "delivered",
      "cancelled",
      "rejected",
    ];

    if (!allowedStatuses.includes(orderStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status.",
      });
    }

    const order = await Order.findOne({ orderId });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    order.orderStatus = orderStatus;

    await order.save();

    const updatedOrder = await Order.findOne({ orderId })
      .populate("deliveryBoy", "userId name phone")
      .lean();

    res.status(200).json({
      success: true,
      message: "Order status updated successfully.",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Update order status error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update order status.",
    });
  }
};


// ASSIGN DELIVERY BOY
export const assignDeliveryBoy = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { deliveryBoyId } = req.body;

    const order = await Order.findOne({ orderId });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    // Allow admin to remove the current assignment
    if (deliveryBoyId === null || deliveryBoyId === "") {
      order.deliveryBoy = null;

      // If an order is being unassigned,
      // move it back to confirmed.
      if (order.orderStatus === "assigned") {
        order.orderStatus = "confirmed";
      }

      await order.save();

      return res.status(200).json({
        success: true,
        message: "Delivery boy unassigned successfully.",
        order,
      });
    }

    const deliveryBoy = await User.findOne({
      _id: deliveryBoyId,
      role: "deliveryBoy",
    }).select("userId name phone role");

    if (!deliveryBoy) {
      return res.status(404).json({
        success: false,
        message: "Delivery boy not found.",
      });
    }

    order.deliveryBoy = deliveryBoy._id;

    // Assigning a delivery boy changes the order to assigned
    if (
      order.orderStatus === "pending" ||
      order.orderStatus === "confirmed"
    ) {
      order.orderStatus = "assigned";
    }

    await order.save();

    const updatedOrder = await Order.findOne({ orderId })
      .populate("deliveryBoy", "userId name phone")
      .lean();

    res.status(200).json({
      success: true,
      message: "Delivery boy assigned successfully.",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Assign delivery boy error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to assign delivery boy.",
    });
  }
};


// GET DELIVERY BOYS
export const getDeliveryBoys = async (req, res) => {
  try {
    const deliveryBoys = await User.find({
      role: "deliveryBoy",
    })
      .select("userId name phone role")
      .sort({ name: 1 })
      .lean();

    res.status(200).json({
      success: true,
      deliveryBoys,
    });
  } catch (error) {
    console.error("Get delivery boys error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch delivery boys.",
    });
  }
};