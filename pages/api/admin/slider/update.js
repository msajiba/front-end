import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import Category from "@/models/Category";
import slugify from "slugify";
import applyCors from "@/middleware/cors";
import Slider from "@/models/Slider";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { id, image, description } = req.body;
    db.connectDb();
    const updated = await Slider.findByIdAndUpdate(id, {
      image,
      description
    });
    db.disconnectDb();
    if (updated) {
      return res.json({
        status: true,
        message: "Slider has been updated successfully",
      });
    } else {
      return res.json({
        status: false,
        message: "Slider not found with this id",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
