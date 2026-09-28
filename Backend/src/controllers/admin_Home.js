import Order from "../models/order.js";
import User from "../models/user.js";
import Product from "../models/Product.js";

const getPakistanDayRange = () => {
  const now = new Date();

  const pakistanDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  const startOfDay = new Date(`${pakistanDate}T00:00:00+05:00`);
  const startOfNextDay = new Date(startOfDay);

  startOfNextDay.setUTCDate(startOfNextDay.getUTCDate() + 1);

  return {
    startOfDay,
    startOfNextDay,
  };
};

// GET ADMIN DASHBOARD
export const getAdminDashboard = async (req, res) => {
  try {
    const { startOfDay, startOfNextDay } =
      getPakistanDayRange();

    const activeStatuses = [
      "pending",
      "confirmed",
      "assigned",
      "out_for_delivery",
    ];

    // Last 7 days
    const sevenDaysAgo = new Date(startOfDay);
    sevenDaysAgo.setUTCDate(sevenDaysAgo.getUTCDate() - 6);

    /*
     * Run independent database operations together.
     */
    const [
      todayOrders,
      todayRevenue,
      activeOrders,
      deliveredToday,
      totalCustomers,
      totalDeliveryBoys,
      orderStatusCounts,
      orderActivity,
      recentOrders,
      deliveryWorkload,
      customerToday,
      customerThisWeek,
      topProducts,
      unavailableProducts,
    ] = await Promise.all([
      // Today's orders
      Order.countDocuments({
        createdAt: {
          $gte: startOfDay,
          $lt: startOfNextDay,
        },
      }),

      // Today's revenue
      Order.aggregate([
        {
          $match: {
            createdAt: {
              $gte: startOfDay,
              $lt: startOfNextDay,
            },
            orderStatus: {
              $nin: ["cancelled", "rejected"],
            },
          },
        },
        {
          $group: {
            _id: null,
            total: {
              $sum: "$pricing.total",
            },
          },
        },
      ]),

      // Currently active orders
      Order.countDocuments({
        orderStatus: {
          $in: activeStatuses,
        },
      }),

      // Delivered today
      Order.countDocuments({
        createdAt: {
          $gte: startOfDay,
          $lt: startOfNextDay,
        },
        orderStatus: "delivered",
      }),

      // Total customers
      User.countDocuments({
        role: "customer",
      }),

      // Total delivery boys
      User.countDocuments({
        role: "deliveryBoy",
      }),

      // Order status breakdown
      Order.aggregate([
        {
          $group: {
            _id: "$orderStatus",
            count: {
              $sum: 1,
            },
          },
        },
      ]),

      // Order activity for the last 7 days
      Order.aggregate([
        {
          $match: {
            createdAt: {
              $gte: sevenDaysAgo,
              $lt: startOfNextDay,
            },
          },
        },
        {
          $group: {
            _id: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$createdAt",
                timezone: "Asia/Karachi",
              },
            },
            orders: {
              $sum: 1,
            },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]),

      // Five most recent orders
      Order.find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .select(
          "orderId customer items pricing payment orderStatus deliveryBoy createdAt"
        )
        .populate(
          "deliveryBoy",
          "userId name phone"
        )
        .lean(),

      // Delivery-boy active workload
      Order.aggregate([
        {
          $match: {
            orderStatus: {
              $in: [
                "assigned",
                "out_for_delivery",
              ],
            },
            deliveryBoy: {
              $ne: null,
            },
          },
        },
        {
          $group: {
            _id: "$deliveryBoy",
            activeOrders: {
              $sum: 1,
            },
          },
        },
        {
          $sort: {
            activeOrders: -1,
          },
        },
        {
          $limit: 5,
        },
      ]),

      // New customers today
      User.countDocuments({
        role: "customer",
        createdAt: {
          $gte: startOfDay,
          $lt: startOfNextDay,
        },
      }),

      // New customers this week
      User.countDocuments({
        role: "customer",
        createdAt: {
          $gte: sevenDaysAgo,
          $lt: startOfNextDay,
        },
      }),

      // Top-selling products
      Order.aggregate([
        {
          $unwind: "$items",
        },
        {
          $match: {
            "items.type": "product",
            orderStatus: {
              $nin: ["cancelled", "rejected"],
            },
          },
        },
        {
          $group: {
            _id: "$items.productId",
            name: {
              $first: "$items.name",
            },
            image: {
              $first: "$items.image",
            },
            quantity: {
              $sum: "$items.quantity",
            },
          },
        },
        {
          $sort: {
            quantity: -1,
          },
        },
        {
          $limit: 5,
        },
      ]),

      // Currently unavailable products
      Product.countDocuments({
        availability: false,
      }),
    ]);

    // Convert status aggregation into an easy object
    const statusMap = {
      pending: 0,
      confirmed: 0,
      assigned: 0,
      out_for_delivery: 0,
      delivered: 0,
      cancelled: 0,
      rejected: 0,
    };

    orderStatusCounts.forEach((item) => {
      if (statusMap[item._id] !== undefined) {
        statusMap[item._id] = item.count;
      }
    });

    // Get delivery-boy details for workload
    const deliveryBoyIds = deliveryWorkload.map(
      (item) => item._id
    );

    const deliveryBoys = await User.find({
      _id: {
        $in: deliveryBoyIds,
      },
      role: "deliveryBoy",
    })
      .select("userId name phone")
      .lean();

    const deliveryOverview = deliveryWorkload.map(
      (workload) => {
        const deliveryBoy = deliveryBoys.find(
          (boy) =>
            boy._id.toString() ===
            workload._id.toString()
        );

        return {
          _id: workload._id,
          userId: deliveryBoy?.userId || "",
          name: deliveryBoy?.name || "Unknown",
          phone: deliveryBoy?.phone || "",
          activeOrders: workload.activeOrders,
        };
      }
    );

    /*
     * Build dashboard alerts.
     */
    const pendingOrders = statusMap.pending;

    const unassignedOrders =
      await Order.countDocuments({
        deliveryBoy: null,
        orderStatus: {
          $in: [
            "pending",
            "confirmed",
            "assigned",
          ],
        },
      });

    res.status(200).json({
      success: true,

      overview: {
        todayOrders,
        todayRevenue:
          todayRevenue[0]?.total || 0,
        activeOrders,
        deliveredToday,
        totalCustomers,
        totalDeliveryBoys,
        activeDeliveryBoys:
          deliveryOverview.length,
      },

      orderStats: {
        pending: statusMap.pending,
        confirmed: statusMap.confirmed,
        assigned: statusMap.assigned,
        outForDelivery:
          statusMap.out_for_delivery,
        delivered: statusMap.delivered,
        cancelled: statusMap.cancelled,
        rejected: statusMap.rejected,
      },

      orderActivity,

      recentOrders,

      deliveryOverview,

      topProducts,

      customerStats: {
        total: totalCustomers,
        today: customerToday,
        thisWeek: customerThisWeek,
      },

      alerts: {
        pendingOrders,
        unassignedOrders,
        unavailableProducts,
      },
    });
  } catch (error) {
    console.error(
      "Get admin dashboard error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard data.",
    });
  }
};