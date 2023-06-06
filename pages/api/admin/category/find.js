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
    const category = await Category.findOne({ slug: slug });
    db.disconnectDb();
    return res.json({
        category: category,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




export default applyCors(router.handler());
