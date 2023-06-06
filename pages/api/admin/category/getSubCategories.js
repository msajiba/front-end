import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import applyCors from "@/middleware/cors";
import SubCategory from "@/models/SubCategory";

const router = createRouter();

router.get(async (req, res) => {
  try {
    const { categoryId } = req.query;
    db.connectDb();

    if (categoryId) {
      const subcategories = await SubCategory.find({ category: categoryId });
      return res.json({
        subcategories: subcategories,
      });
    }
  } catch (error) {
    db.disconnectDb();
    res.json({ message: error.message });
  }
});

export default applyCors(router.handler());
