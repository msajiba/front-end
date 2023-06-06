import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import applyCors from "@/middleware/cors";
import SubBlog from "@/models/SubBlog";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { id } = req.body;
    const exist = await SubBlog.findOne({ _id: id });
    if (exist) {
      db.connectDb();
      await SubBlog.findByIdAndRemove(id);
      db.disconnectDb();
      return res.json({
        message: "SubBlog has been deleted Successfully",
        status: true,
        SubBlog: await SubBlog.find({}).sort({ updatedAt: -1 }),
      });
    } else {
      db.disconnectDb();
      return res.json({
        status: false,
        message: "SubBlog Not Exist Please try to delete exist title",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
