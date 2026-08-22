import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["customer", "admin", "deliveryBoy"],
      required: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

// Only one document can have role: "admin"
userSchema.index(
  { role: 1 },
  {
    unique: true,
    partialFilterExpression: {
      role: "admin",
    },
  }
);

const User = mongoose.model("User", userSchema);

export default User;