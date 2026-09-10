import Deal from "../models/Deal.js";
import cloudinary from "../config/cloudinary.js";


// Upload buffer to Cloudinary

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


// CREATE DEAL
export const createDeal = async (req, res) => {
  try {
    const {
      name,
      shortDescription,
      items,
      dealPrice,
      startDate,
      endDate,
    } = req.body;

    if (
      !name ||
      !shortDescription ||
      !items ||
      dealPrice === undefined ||
      !startDate ||
      !endDate
    ) {
      return res.status(400).json({
        success: false,
        message: "All deal fields are required",
      });
    }

    // Parse items if sent through FormData
    let parsedItems;

    try {
      parsedItems = typeof items === "string"
        ? JSON.parse(items)
        : items;
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid deal items format",
      });
    }

    // Validate items
    if (!Array.isArray(parsedItems) || parsedItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "A deal must contain at least one item",
      });
    }

    for (const item of parsedItems) {
      if (!item.productName || !item.quantity) {
        return res.status(400).json({
          success: false,
          message:
            "Each deal item must have a product name and quantity",
        });
      }

      if (Number(item.quantity) < 1) {
        return res.status(400).json({
          success: false,
          message: "Item quantity must be at least 1",
        });
      }
    }

    // Validate price
    if (Number(dealPrice) < 0) {
      return res.status(400).json({
        success: false,
        message: "Deal price cannot be negative",
      });
    }

    // Validate dates
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid start or end date",
      });
    }

    if (end <= start) {
      return res.status(400).json({
        success: false,
        message: "End date must be after start date",
      });
    }

    // Image required
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Deal image is required",
      });
    }

    // Upload buffer directly to Cloudinary
    const uploadResult = await uploadToCloudinary(
      req.file.buffer
    );

    // Generate Deal ID
    const lastDeal = await Deal.findOne()
      .sort({ createdAt: -1 })
      .select("dealId");

    let nextNumber = 1;

    if (lastDeal?.dealId) {
      const lastNumber = parseInt(
        lastDeal.dealId.replace("DEAL-", ""),
        10
      );

      if (!isNaN(lastNumber)) {
        nextNumber = lastNumber + 1;
      }
    }

    const dealId = `DEAL-${String(nextNumber).padStart(3, "0")}`;

    // Create deal
    const deal = await Deal.create({
      dealId,

      image: {
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
      },

      name: name.trim(),

      shortDescription: shortDescription.trim(),

      items: parsedItems.map((item) => ({
        productName: item.productName.trim(),
        quantity: Number(item.quantity),
      })),

      dealPrice: Number(dealPrice),

      available: true,

      startDate: start,

      endDate: end,
    });

    return res.status(201).json({
      success: true,
      message: "Deal created successfully",
      deal,
    });
  } catch (error) {
    console.error("Create deal error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while creating deal",
    });
  }
};

// GET ALL DEALS
export const getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find()
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: deals.length,
      deals,
    });
  } catch (error) {
    console.error("Get all deals error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while getting deals",
    });
  }
};

// GET SINGLE DEAL
export const getDealById = async (req, res) => {
  try {
    const { id } = req.params;

    const deal = await Deal.findById(id);

    if (!deal) {
      return res.status(404).json({
        success: false,
        message: "Deal not found",
      });
    }

    return res.status(200).json({
      success: true,
      deal,
    });
  } catch (error) {
    console.error("Get deal error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while getting deal",
    });
  }
};

// UPDATE DEAL
export const updateDeal = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      shortDescription,
      items,
      dealPrice,
      startDate,
      endDate,
    } = req.body;

    const deal = await Deal.findById(id);

    if (!deal) {
      return res.status(404).json({
        success: false,
        message: "Deal not found",
      });
    }

    // Update name
    if (name !== undefined) {
      if (!name.trim()) {
        return res.status(400).json({
          success: false,
          message: "Deal name cannot be empty",
        });
      }

      deal.name = name.trim();
    }

    // Update description
    if (shortDescription !== undefined) {
      if (!shortDescription.trim()) {
        return res.status(400).json({
          success: false,
          message: "Short description cannot be empty",
        });
      }

      deal.shortDescription = shortDescription.trim();
    }

    // Update items
    if (items !== undefined) {
      let parsedItems;

      try {
        parsedItems =
          typeof items === "string"
            ? JSON.parse(items)
            : items;
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: "Invalid deal items format",
        });
      }

      if (!Array.isArray(parsedItems) || parsedItems.length === 0) {
        return res.status(400).json({
          success: false,
          message: "A deal must contain at least one item",
        });
      }

      for (const item of parsedItems) {
        if (!item.productName || !item.quantity) {
          return res.status(400).json({
            success: false,
            message:
              "Each deal item must have a product name and quantity",
          });
        }

        if (Number(item.quantity) < 1) {
          return res.status(400).json({
            success: false,
            message: "Item quantity must be at least 1",
          });
        }
      }

      deal.items = parsedItems.map((item) => ({
        productName: item.productName.trim(),
        quantity: Number(item.quantity),
      }));
    }

    // Update price
    if (dealPrice !== undefined) {
      if (Number(dealPrice) < 0) {
        return res.status(400).json({
          success: false,
          message: "Deal price cannot be negative",
        });
      }

      deal.dealPrice = Number(dealPrice);
    }

    // Update start date
    if (startDate !== undefined) {
      const start = new Date(startDate);

      if (isNaN(start.getTime())) {
        return res.status(400).json({
          success: false,
          message: "Invalid start date",
        });
      }

      deal.startDate = start;
    }

    // Update end date
    if (endDate !== undefined) {
      const end = new Date(endDate);

      if (isNaN(end.getTime())) {
        return res.status(400).json({
          success: false,
          message: "Invalid end date",
        });
      }

      deal.endDate = end;
    }

    // Validate dates
    if (deal.endDate <= deal.startDate) {
      return res.status(400).json({
        success: false,
        message: "End date must be after start date",
      });
    }

    // Replace image if new image uploaded
    if (req.file) {
      const uploadResult = await uploadToCloudinary(
        req.file.buffer
      );

      // Delete old image
      if (deal.image?.publicId) {
        await cloudinary.uploader.destroy(
          deal.image.publicId
        );
      }

      deal.image = {
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
      };
    }

    await deal.save();

    return res.status(200).json({
      success: true,
      message: "Deal updated successfully",
      deal,
    });
  } catch (error) {
    console.error("Update deal error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while updating deal",
    });
  }
};

// DELETE DEAL
export const deleteDeal = async (req, res) => {
  try {
    const { id } = req.params;

    const deal = await Deal.findById(id);

    if (!deal) {
      return res.status(404).json({
        success: false,
        message: "Deal not found",
      });
    }

    // Delete image from Cloudinary
    if (deal.image?.publicId) {
      await cloudinary.uploader.destroy(
        deal.image.publicId
      );
    }

    await Deal.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Deal deleted successfully",
    });
  } catch (error) {
    console.error("Delete deal error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while deleting deal",
    });
  }
};

// TOGGLE DEAL AVAILABILITY
export const toggleDealAvailability = async (req, res) => {
  try {
    const { id } = req.params;

    const deal = await Deal.findById(id);

    if (!deal) {
      return res.status(404).json({
        success: false,
        message: "Deal not found",
      });
    }

    deal.available = !deal.available;

    await deal.save();

    return res.status(200).json({
      success: true,
      message: `Deal ${
        deal.available ? "enabled" : "disabled"
      } successfully`,
      deal,
    });
  } catch (error) {
    console.error(
      "Toggle deal availability error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server error while updating deal availability",
    });
  }
};