import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Product from '@/models/Products';
import applyCors from '@/middleware/cors';


const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { id } = req.body;
    const exist = await Product.findOne({ _id: id });
    if (exist) {
      db.connectDb();
      await Product.findByIdAndRemove(id);
      db.disconnectDb();
      return res.json({
        message: "Product has been deleted Successfully",
        status: true,
        Products: await Product.find({}).sort({ updatedAt: -1 }),
      });
    } else {
      db.disconnectDb();
      return res.json({
        status: false,
        message: "Product Not Exist Please try to delete exist product",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



export default applyCors(router.handler());