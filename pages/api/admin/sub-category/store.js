import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import slugify from "slugify";
import SubCategory from "@/models/SubCategory";
import applyCors from "@/middleware/cors";
import Category from "@/models/Category";

const router = createRouter().use(verifyTokenAndAdmin);


router.post(async (req, res) => {
  try {
    const { name, category, image } = req.body;
    db.connectDb();
    const parentCategory = await Category.findById(category);
    const test = await SubCategory.findOne({ name });
    if (test) {
      return res.json({
        status: false,
        message: "SubCategory already exist, Try a different name",
      });
    }
    const subCategory = await new SubCategory({ name, category, slug: slugify(name),image }).save();
    parentCategory.subCategories.push(subCategory._id);
    await parentCategory.save()
    db.disconnectDb();
    res.json({
      status: true,
      message: `SubCategory ${name} has been created successfully.`,
      subCategories: await SubCategory.find({}).sort({ updatedAt: -1 }),
    });
  } catch (error) {
    db.disconnectDb();
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
