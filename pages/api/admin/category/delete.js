import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import Category from "@/models/Category";
import applyCors from "@/middleware/cors";

const router = createRouter().use(verifyTokenAndAdmin);


router.post(async (req, res) => {
  try {
    const { id } = req.body;
    const exist = await Category.findOne({ _id: id });
    if (exist) {
      db.connectDb();
      await Category.findByIdAndRemove(id);
      db.disconnectDb();
      return res.json({
        message: "Category has been deleted Successfully",
        status: true,
        categories: await Category.find({}).sort({ updatedAt: -1 }),
      });
    } else {
      db.disconnectDb();
      return res.json({
        status: false,
        message: "Category Not Exist Please try to delete exist category",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default applyCors(router.handler());
