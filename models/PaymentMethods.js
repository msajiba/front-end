import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const paymentMethodsSchema = new mongoose.Schema(
  {
    name: {
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

const PaymentMethods =
  mongoose.models.PaymentMethods ||
  mongoose.model("PaymentMethods", paymentMethodsSchema);

export default PaymentMethods;
