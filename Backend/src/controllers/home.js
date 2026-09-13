import Product from "../models/Product.js";
import Deal from "../models/Deal.js";

export const getHomeProducts = async (req, res) => {
  try {
    const products = await Product.find({ available: true })
      .sort({ createdAt: -1 })
      .select(
        "_id productId image name shortDescription category sizes available"
      )
     

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

export const getHomeProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({
      _id: id,
      available: true,
    })
      .select(
        "_id productId image name shortDescription category sizes available"
      )
      .lean();

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Get home product by ID error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch product.",
    });
  }
};