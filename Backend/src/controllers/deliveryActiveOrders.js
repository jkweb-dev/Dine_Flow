import Order from "../models/order.js";

// Get active orders of the logged-in delivery boy
export const getActiveOrders = async (req, res) => {
  try {
    const deliveryBoyId = req.user.id;

    const orders = await Order.find({
      deliveryBoy: deliveryBoyId,
      orderStatus: {
        $in: ["assigned", "out_for_delivery"],
      },
    })
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      message: "Active orders fetched successfully.",
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error("Get active orders error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch active orders.",
    });
  }
};


// Start delivery
export const startDelivery = async (req, res) => {
  try {
    const deliveryBoyId = req.user.id;
    const { orderId } = req.params;

    const order = await Order.findOne({
      orderId,
      deliveryBoy: deliveryBoyId,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found or not assigned to you.",
      });
    }

    if (order.orderStatus !== "assigned") {
      return res.status(400).json({
        success: false,
        message: "Only assigned orders can be started.",
      });
    }

    order.orderStatus = "out_for_delivery";

    await order.save();

    return res.status(200).json({
      success: true,
      message: "Delivery started successfully.",
      order,
    });
  } catch (error) {
    console.error("Start delivery error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to start delivery.",
    });
  }
};


// Mark order as delivered
export const markOrderDelivered = async (req, res) => {
  try {
    const deliveryBoyId = req.user.id;
    const { orderId } = req.params;

    const order = await Order.findOne({
      orderId,
      deliveryBoy: deliveryBoyId,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found or not assigned to you.",
      });
    }

    if (order.orderStatus !== "out_for_delivery") {
      return res.status(400).json({
        success: false,
        message: "Only orders that are out for delivery can be marked as delivered.",
      });
    }

    order.orderStatus = "delivered";

    await order.save();

    return res.status(200).json({
      success: true,
      message: "Order marked as delivered successfully.",
      order,
    });
  } catch (error) {
    console.error("Mark order delivered error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to mark order as delivered.",
    });
  }
};