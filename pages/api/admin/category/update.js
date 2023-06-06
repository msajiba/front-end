import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import Category from "@/models/Category";
import slugify from "slugify";
import applyCors from "@/middleware/cors";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { id, name,image } = req.body;
    db.connectDb();
    const updated = await Category.findByIdAndUpdate(id, {
      name,
      slug: slugify(name),
      image
    });
    db.disconnectDb();
    if (updated) {
      return res.json({
        status: true,
        message: "Category has been updated successfully",
      });
    } else {
      return res.json({
        status: false,
        message: "Category not found with this id",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
