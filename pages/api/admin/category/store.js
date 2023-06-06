import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import Category from "@/models/Category";
import slugify from "slugify";
import applyCors from "@/middleware/cors";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { name,image } = req.body;
    console.log(name, image);
    db.connectDb();
    const test = await Category.findOne({ name });
    if (test) {
      return res.json({
        status: false,
        message: "Category already exist, Try a different name",
      });
    }
    await new Category({ name, slug: slugify(name),image}).save();

    db.disconnectDb();
    res.json({
      status: true,
      message: `Category ${name} has been created successfully.`,
    });
  } catch (error) {
    db.disconnectDb();
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
