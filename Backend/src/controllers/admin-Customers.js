import User from "../models/user.js";
import Order from "../models/order.js";

export const getCustomers = async (req, res) => {
  try {
    const {
      search = "",
      sort = "newest",
    } = req.query;

    // ---------------------------------------
    // Find all customers
    // ---------------------------------------

    const userQuery = {
      role: "customer",
    };

    if (search.trim()) {
      const searchRegex = new RegExp(search.trim(), "i");

      userQuery.$or = [
        { name: searchRegex },
        { userId: searchRegex },
        { phone: searchRegex },
      ];
    }

    let userSort = { createdAt: -1 };

    if (sort === "oldest") {
      userSort = { createdAt: 1 };
    }

    const customers = await User.find(userQuery)
      .select("userId name phone role createdAt")
      .sort(userSort)
      .lean();

    // ---------------------------------------
    // Get order information for these users
    // ---------------------------------------

    const customerIds = customers.map((customer) => customer._id);

    const orderStats = await Order.aggregate([
      {
        $match: {
          "customer.id": {
            $in: customerIds,
          },
        },
      },
      {
        $group: {
          _id: "$customer.id",

          totalOrders: {
            $sum: 1,
          },

          activeOrders: {
            $sum: {
              $cond: [
                {
                  $in: [
                    "$orderStatus",
                    [
                      "pending",
                      "confirmed",
                      "assigned",
                      "out_for_delivery",
                    ],
                  ],
                },
                1,
                0,
              ],
            },
          },

          deliveredOrders: {
            $sum: {
              $cond: [
                {
                  $eq: ["$orderStatus", "delivered"],
                },
                1,
                0,
              ],
            },
          },

          cancelledOrders: {
            $sum: {
              $cond: [
                {
                  $eq: ["$orderStatus", "cancelled"],
                },
                1,
                0,
              ],
            },
          },

          rejectedOrders: {
            $sum: {
              $cond: [
                {
                  $eq: ["$orderStatus", "rejected"],
                },
                1,
                0,
              ],
            },
          },

          totalSpent: {
            $sum: {
              $cond: [
                {
                  $eq: ["$orderStatus", "delivered"],
                },
                "$pricing.total",
                0,
              ],
            },
          },
        },
      },
    ]);

    // ---------------------------------------
    // Convert statistics into an easy lookup
    // ---------------------------------------

    const statsMap = new Map(
      orderStats.map((stats) => [
        stats._id.toString(),
        stats,
      ])
    );

    // ---------------------------------------
    // Combine users + order statistics
    // ---------------------------------------

    const formattedCustomers = customers.map((customer) => {
      const stats = statsMap.get(customer._id.toString());

      return {
        _id: customer._id,
        userId: customer.userId,
        name: customer.name,
        phone: customer.phone,
        role: customer.role,
        createdAt: customer.createdAt,

        totalOrders: stats?.totalOrders || 0,
        activeOrders: stats?.activeOrders || 0,
        deliveredOrders: stats?.deliveredOrders || 0,
        cancelledOrders: stats?.cancelledOrders || 0,
        rejectedOrders: stats?.rejectedOrders || 0,
        totalSpent: stats?.totalSpent || 0,
      };
    });

    // ---------------------------------------
    // Additional sorting
    // ---------------------------------------

    if (sort === "most_orders") {
      formattedCustomers.sort(
        (a, b) => b.totalOrders - a.totalOrders
      );
    }

    if (sort === "highest_spending") {
      formattedCustomers.sort(
        (a, b) => b.totalSpent - a.totalSpent
      );
    }

    // ---------------------------------------
    // Dashboard statistics
    // ---------------------------------------

    const totalCustomers = formattedCustomers.length;

    const activeCustomers = formattedCustomers.filter(
      (customer) => customer.activeOrders > 0
    ).length;

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const newCustomers = formattedCustomers.filter(
      (customer) =>
        new Date(customer.createdAt) >= thirtyDaysAgo
    ).length;

    const totalOrders = formattedCustomers.reduce(
      (total, customer) => total + customer.totalOrders,
      0
    );

    res.status(200).json({
      success: true,

      statistics: {
        totalCustomers,
        activeCustomers,
        newCustomers,
        totalOrders,
      },

      customers: formattedCustomers,
    });
  } catch (error) {
    console.error("Get admin customers error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch customers.",
    });
  }
};

export const getCustomerDetails = async (req, res) => {
  try {
    const { customerId } = req.params;

    // ---------------------------------------
    // Find customer
    // ---------------------------------------

    const customer = await User.findOne({
      _id: customerId,
      role: "customer",
    }).select("userId name phone role createdAt");

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found.",
      });
    }

    // ---------------------------------------
    // Find customer's orders
    // ---------------------------------------

    const orders = await Order.find({
      "customer.id": customer._id,
    })
      .sort({ createdAt: -1 })
      .select(
        "orderId orderStatus items pricing payment delivery createdAt"
      )
      .lean();

    // ---------------------------------------
    // Calculate statistics
    // ---------------------------------------

    const totalOrders = orders.length;

    const activeOrders = orders.filter((order) =>
      [
        "pending",
        "confirmed",
        "assigned",
        "out_for_delivery",
      ].includes(order.orderStatus)
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

    const totalSpent = orders
      .filter((order) => order.orderStatus === "delivered")
      .reduce(
        (total, order) => total + order.pricing.total,
        0
      );

    res.status(200).json({
      success: true,

      customer: {
        _id: customer._id,
        userId: customer.userId,
        name: customer.name,
        phone: customer.phone,
        role: customer.role,
        createdAt: customer.createdAt,
      },

      statistics: {
        totalOrders,
        activeOrders,
        deliveredOrders,
        cancelledOrders,
        rejectedOrders,
        totalSpent,
      },

      orders,
    });
  } catch (error) {
    console.error("Get admin customer details error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch customer details.",
    });
  }
};