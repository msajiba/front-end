import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import slugify from "slugify";
import SubCategory from "@/models/SubCategory";
import applyCors from "@/middleware/cors";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { id, name, category,image } = req.body;
    db.connectDb();
    const updated = await SubCategory.findByIdAndUpdate(id, {
      name,
      category,
      slug: slugify(name),
      image
    });
    db.disconnectDb();
    if (updated) {
      return res.json({
        status: true,
        message: "SubCategory has been updated successfully",
      });
    } else {
      return res.json({
        status: false,
        message: "SubCategory not found with this id",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
