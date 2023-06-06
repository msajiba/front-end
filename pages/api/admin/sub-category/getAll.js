import { createRouter } from "next-connect";
import db from "@/utils/db";
import SubCategory from "@/models/SubCategory";
import applyCors from "@/middleware/cors";
import Category from "@/models/Category";

const router = createRouter();

router.get(async (req, res) => {
  try {
    db.connectDb();
    await Category.find({});
    const subcategories = await SubCategory.find({}).populate("category")
      .sort({ updatedAt: -1 }).lean();
    db.disconnectDb();
    return res.json({
      subcategories: subcategories,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
