import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import slugify from "slugify";
import applyCors from "@/middleware/cors";
import SubBlog from "@/models/SubBlog";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { title } = req.body;
    db.connectDb();
    const test = await SubBlog.findOne({ title });
    if (test) {
      return res.json({
        status: false,
        message: "SubBlog already exist, Try a different title",
      });
    }
    await new SubBlog({
      title,
      slug: slugify(title.toString()),
    }).save();

    db.disconnectDb();

    res.json({
      status: true,
      message: `SubBlog ${title} has been created successfully.`,
      subBlogs: await SubBlog.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    db.disconnectDb();
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
