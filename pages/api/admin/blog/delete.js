import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import applyCors from "@/middleware/cors";
import Blog from "@/models/Blog";

const router = createRouter().use(verifyTokenAndAdmin);


router.post(async (req, res) => {
  try {
    const { id } = req.body;
    const exist = await Blog.findOne({ _id: id });
    if (exist) {
      db.connectDb();
      await Blog.findByIdAndRemove(id);
      db.disconnectDb();
      return res.json({
        message: "Blog has been deleted Successfully",
        status: true,
        Blogs: await Blog.find({}).sort({ updatedAt: -1 }),
      });
    } else {
      db.disconnectDb();
      return res.json({
        status: false,
        message: "Blog Not Exist Please try to delete exist blog",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default applyCors(router.handler());
