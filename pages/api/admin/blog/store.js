import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import slugify from "slugify";
import applyCors from "@/middleware/cors";
import Blog from "@/models/Blog";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { title, image, author, content, subBlog, slug } = req.body;
    db.connectDb();
    const test = await Blog.findOne({ title });
    if (test) {
      return res.json({
        status: false,
        message: "Blog already exist, Try a different title",
      });
    }
    await new Blog({
      title,
      slug,
      image,
      author,
      content,
      subBlog,
    }).save();

    db.disconnectDb();
    res.json({
      status: true,
      message: `Category ${title} has been created successfully.`,
    });
  } catch (error) {
    db.disconnectDb();
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
