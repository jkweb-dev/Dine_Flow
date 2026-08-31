import Product from "../models/Product.js";
import cloudinary from "../config/cloudinary.js";


// ======================================================
// CLOUDINARY BUFFER UPLOAD HELPER
// ======================================================

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "dineflow/products",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    uploadStream.end(buffer);
  });
};


// ======================================================
// CREATE PRODUCT
// ======================================================

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      shortDescription,
      category,
      sizes,
    } = req.body;

    if (!name || !shortDescription || !category || !sizes) {
      return res.status(400).json({
        success: false,
        message:
          "Name, short description, category and sizes are required.",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Product image is required.",
      });
    }

    let parsedSizes;

    try {
      parsedSizes =
        typeof sizes === "string"
          ? JSON.parse(sizes)
          : sizes;
    } catch {
      return res.status(400).json({
        success: false,
        message: "Invalid sizes format.",
      });
    }

    if (!Array.isArray(parsedSizes) || parsedSizes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one product size is required.",
      });
    }

    // Upload image buffer directly to Cloudinary
    const uploadResult = await uploadToCloudinary(
      req.file.buffer
    );

    // Generate product ID
    const lastProduct = await Product.findOne()
      .sort({ createdAt: -1 })
      .select("productId");

    let nextNumber = 1;

    if (lastProduct?.productId) {
      const lastNumber = parseInt(
        lastProduct.productId.replace("PRD-", ""),
        10
      );

      if (!isNaN(lastNumber)) {
        nextNumber = lastNumber + 1;
      }
    }

    const productId = `PRD-${String(nextNumber).padStart(3, "0")}`;

    const product = await Product.create({
      productId,

      image: {
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
      },

      name,
      shortDescription,
      category,
      sizes: parsedSizes,
      available: true,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully.",
      product,
    });
  } catch (error) {
    console.error("Create product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create product.",
    });
  }
};


// ======================================================
// GET ALL PRODUCTS
// ======================================================

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Get products error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get products.",
    });
  }
};


// ======================================================
// GET SINGLE PRODUCT
// ======================================================

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

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
    console.error("Get product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get product.",
    });
  }
};


// ======================================================
// UPDATE PRODUCT
// ======================================================

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      shortDescription,
      category,
      sizes,
    } = req.body;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    if (name !== undefined) {
      product.name = name;
    }

    if (shortDescription !== undefined) {
      product.shortDescription = shortDescription;
    }

    if (category !== undefined) {
      product.category = category;
    }

    if (sizes !== undefined) {
      try {
        const parsedSizes =
          typeof sizes === "string"
            ? JSON.parse(sizes)
            : sizes;

        if (
          !Array.isArray(parsedSizes) ||
          parsedSizes.length === 0
        ) {
          return res.status(400).json({
            success: false,
            message: "At least one product size is required.",
          });
        }

        product.sizes = parsedSizes;
      } catch {
        return res.status(400).json({
          success: false,
          message: "Invalid sizes format.",
        });
      }
    }

    // New image uploaded
    if (req.file) {
      // Delete old Cloudinary image
      if (product.image?.publicId) {
        await cloudinary.uploader.destroy(
          product.image.publicId
        );
      }

      // Upload new image directly from buffer
      const uploadResult = await uploadToCloudinary(
        req.file.buffer
      );

      product.image = {
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
      };
    }

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      product,
    });
  } catch (error) {
    console.error("Update product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update product.",
    });
  }
};


// ======================================================
// DELETE PRODUCT
// ======================================================

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    // Delete image from Cloudinary
    if (product.image?.publicId) {
      await cloudinary.uploader.destroy(
        product.image.publicId
      );
    }

    // Delete product from MongoDB
    await Product.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (error) {
    console.error("Delete product error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete product.",
    });
  }
};


// ======================================================
// TOGGLE PRODUCT AVAILABILITY
// ======================================================

export const toggleAvailability = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    product.available = !product.available;

    await product.save();

    return res.status(200).json({
      success: true,
      message: product.available
        ? "Product is now available."
        : "Product is now unavailable.",
      product,
    });
  } catch (error) {
    console.error("Toggle availability error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update product availability.",
    });
  }
};