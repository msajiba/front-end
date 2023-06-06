import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import slugify from "slugify";
import applyCors from "@/middleware/cors";
import SubBlog from "@/models/SubBlog";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { id, title } = req.body;
    db.connectDb();
    const updated = await SubBlog.findByIdAndUpdate(id, {
      title,
      slug: slugify(title.toString()),
    });
    db.disconnectDb();
    if (updated) {
      return res.json({
        status: true,
        message: "Sub Blog has been updated successfully",
      });
    } else {
      return res.json({
        status: false,
        message: "Sub Blog not found with this id",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
