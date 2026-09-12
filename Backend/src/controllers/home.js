import Product from "../models/Product.js";
import Deal from "../models/Deal.js";

export const getHomeProducts = async (req, res) => {
  try {
    const products = await Product.find({ available: true })
      .sort({ createdAt: -1 })
      .limit(8)
      .select(
        "_id productId image name shortDescription category sizes available"
      )
      .lean();

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Get home products error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch products.",
    });
  }
};

export const getHomeDeals = async (req, res) => {
  try {
    const now = new Date();

    const deals = await Deal.find({
      available: true,
      startDate: { $lte: now },
      endDate: { $gte: now },
    })
      .sort({ createdAt: -1 })
      .limit(4)
      .select(
        "_id dealId image name shortDescription items dealPrice available startDate endDate"
      )
      .lean();

    return res.status(200).json({
      success: true,
      deals,
    });
  } catch (error) {
    console.error("Get home deals error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch deals.",
    });
  }
};