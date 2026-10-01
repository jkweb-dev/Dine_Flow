import Order from "../models/order.js";

// Get orders assigned to the logged-in delivery boy
export const getMyOrders = async (req, res) => {
  try {
    const deliveryBoyId = req.user.id;

    const orders = await Order.find({
      deliveryBoy: deliveryBoyId,
    })
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({
      success: true,
      message: "Delivery boy orders fetched successfully.",
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error("Get my orders error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch your orders.",
    });
  }
};