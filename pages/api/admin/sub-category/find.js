import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Category from '@/models/Category';
import slugify from 'slugify';
import Product from '@/models/Products';
import applyCors from '@/middleware/cors';
import SubCategory from '@/models/SubCategory';


const router = createRouter();

router.get(async (req, res) => {
  try {
    const { slug } = req.query;
    db.connectDb();
    const subCategory = await SubCategory.findOne({ slug: slug });
    db.disconnectDb();
    return res.json({
        subCategory: subCategory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




export default applyCors(router.handler());
