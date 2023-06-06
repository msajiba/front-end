import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import Category from "@/models/Category";
import slugify from "slugify";
import Product from "@/models/Products";
import applyCors from "@/middleware/cors";

const router = createRouter().use(verifyTokenAndAdmin);
// .use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const {
      title,
      price,
      image,
      originalPrice,
      shortDescription,
      description,
      brand,
      category,
      subCategory,
      bestDeal,
      discountedSale,
      stock
    } = req.body;

    db.connectDb();
    const test = await Product.findOne({ title });
    if (test) {
      return res.json({
        status: false,
        message: "Product already exist, Try a different name",
      });
    }
    await new Product({
      title,
      slug: slugify(title),
      price,
      image,
      originalPrice,
      shortDescription,
      description,
      brand,
      category,
      subCategory,
      bestDeal,
      discountedSale,
      stock
    }).save();

    db.disconnectDb();
    res.json({
      status: true,
      message: `Product ${title} has been created successfully.`,
    });
  } catch (error) {
    db.disconnectDb();
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
