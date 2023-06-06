import mongoose from "mongoose";
const sliderSchema = new mongoose.Schema(
  {
    image: {
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

const Slider =
  mongoose.models.Slider ||
  mongoose.model("Slider", sliderSchema);

export default Slider;
