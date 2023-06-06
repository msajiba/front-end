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
    const { description,image } = req.body;
    
    db.connectDb();
    await new Slider({ description, image}).save();

    db.disconnectDb();
    res.json({
      status: true,
      message: `Slider has been created successfully.`,
    });
  } catch (error) {
    db.disconnectDb();
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
