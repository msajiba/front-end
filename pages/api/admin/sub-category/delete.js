import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import SubCategory from "@/models/SubCategory";
import applyCors from "@/middleware/cors";

const router = createRouter().use(verifyTokenAndAdmin);


router.post(async (req, res) => {
  try {
    const { id } = req.body;
    const exist = await SubCategory.findOne({ _id: id });
    if (exist) {
      db.connectDb();
      await SubCategory.findByIdAndRemove(id);
      db.disconnectDb();
      return res.json({
        message: "SubCategory has been deleted Successfully",
        status: true,
        SubCategory: await SubCategory.find({}).sort({ updatedAt: -1 }),
      });
    } else {
      db.disconnectDb();
      return res.json({
        status: false,
        message: "SubCategory Not Exist Please try to delete exist category",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
