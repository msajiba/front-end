import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Product from '@/models/Products';
import applyCors from '@/middleware/cors';
import SubCategory from '@/models/SubCategory';


const router = createRouter();

router.get(async (req, res) => {
  try {
    const { slug } = req.query;
    db.connectDb();
    const subCategory = await SubCategory.findOne({slug:slug});
  
    const products = await Product.find({ subCategory: subCategory._id });
    db.disconnectDb();
    return res.json({
      products: products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




export default applyCors(router.handler());
