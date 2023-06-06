import mongoose from "mongoose";
const siteInfoSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
      },
    logo: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
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

const Siteinfo =
  mongoose.models.Siteinfo || mongoose.model("Siteinfo", siteInfoSchema);

export default Siteinfo;
