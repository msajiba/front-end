import mongoose from "mongoose";
const shippingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cost: {
        type: String,
        required: true,
      },
    description: {
      type: String,
      required: false,
    },
  
  },
  {
    timestamps: true,
  }
);

const Shipping =
  mongoose.models.Shipping ||
  mongoose.model("Shipping", shippingSchema);

export default Shipping;
