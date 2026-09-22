import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["product", "deal"],
      required: true,
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: null,
    },

    dealId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Deal",
      default: null,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    size: {
      type: String,
      default: null,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    customer: {

      id :{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      required : true
    },


      userId: {
        type: String,
        ref: "User",
        required: true,
      },

      name: {
        type: String,
        required: true,
        trim: true,
      },

      phone: {
        type: String,
        required: true,
        trim: true,
      },
    },

    items: {
      type: [orderItemSchema],
      required: true,
      validate: {
        validator: (items) => items.length > 0,
        message: "An order must contain at least one item.",
      },
    },

    delivery: {
      address: {
        type: String,
        required: true,
        trim: true,
      },

      area: {
        type: String,
        required: true,
        trim: true,
      },

      phone: {
        type: String,
        required: true,
        trim: true,
      },

      instructions: {
        type: String,
        trim: true,
        default: "",
      },

      latitude: {
        type: Number,
        required: true,
      },

      longitude: {
        type: Number,
        required: true,
      },

      distance: {
        type: Number,
        required: true,
        min: 0,
      },
    },

    pricing: {
      subtotal: {
        type: Number,
        required: true,
        min: 0,
      },

      deliveryFee: {
        type: Number,
        required: true,
        min: 0,
      },

      total: {
        type: Number,
        required: true,
        min: 0,
      },
    },

    payment: {
      method: {
        type: String,
        enum: ["cash_on_delivery"],
        required: true,
      },

      status: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending",
      },
    },

    orderStatus: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "assigned",
        "out_for_delivery",
        "delivered",
        "cancelled",
        "rejected",
      ],
      default: "pending",
    },

    deliveryBoy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;