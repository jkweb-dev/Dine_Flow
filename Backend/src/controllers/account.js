import User from "../models/user.js"
import Order from "../models/order.js";

export const getAccount = async (req, res) => {
  try {
    // Find the logged-in user
    const user = await User.findById(req.user.id).select(
      "userId name phone role createdAt"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User account not found.",
      });
    }

    // Get all orders belonging to this customer
    const orders = await Order.find({
      "customer.id": user._id,
    })
      .sort({ createdAt: -1 })
      .select("orderId orderStatus pricing.total createdAt");

    // Total orders
    const totalOrders = orders.length;

    // Orders by status
    const pendingOrders = orders.filter(
      (order) => order.orderStatus === "pending"
    ).length;

    const confirmedOrders = orders.filter(
      (order) => order.orderStatus === "confirmed"
    ).length;

    const assignedOrders = orders.filter(
      (order) => order.orderStatus === "assigned"
    ).length;

    const outForDeliveryOrders = orders.filter(
      (order) => order.orderStatus === "out_for_delivery"
    ).length;

    const deliveredOrders = orders.filter(
      (order) => order.orderStatus === "delivered"
    ).length;

    const cancelledOrders = orders.filter(
      (order) => order.orderStatus === "cancelled"
    ).length;

    const rejectedOrders = orders.filter(
      (order) => order.orderStatus === "rejected"
    ).length;

    // Orders currently being processed
    const activeOrders = orders.filter((order) =>
      [
        "pending",
        "confirmed",
        "assigned",
        "out_for_delivery",
      ].includes(order.orderStatus)
    ).length;

    // Total amount spent on delivered orders
    const totalSpent = orders
      .filter((order) => order.orderStatus === "delivered")
      .reduce(
        (total, order) => total + order.pricing.total,
        0
      );

    // Only send a few recent orders to the Account page
    const recentOrders = orders.slice(0, 3);

    res.status(200).json({
      success: true,

      user,

      statistics: {
        totalOrders,
        activeOrders,
        deliveredOrders,
        pendingOrders,
        confirmedOrders,
        assignedOrders,
        outForDeliveryOrders,
        cancelledOrders,
        rejectedOrders,
        totalSpent,
      },

      recentOrders,
    });
  } catch (error) {
    console.error("Get account error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch account information.",
    });
  }
};