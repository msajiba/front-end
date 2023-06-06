import { createRouter } from 'next-connect';
import { verifyToken, verifyTokenAndAuthorization } from '@/helpers/verityToken';
import db from '@/utils/db';
import Product from '@/models/Products';
import applyCors from '@/middleware/cors';
import Order from '@/models/Order';


const router = createRouter().use(verifyToken).use(verifyTokenAndAuthorization);

router.post(async(req, res)=>{
    try {
      const { user_id_no } = req.body;
        db.connectDb();
      await Product.find({});
        const found = await Order.find({user_id_no:user_id_no}).populate("products");
        db.disconnectDb();
        if(found){
          return res.json({
            message: "Order has been found successfully",
            order: found
          });
        }else{
          return res.json({
            message: "Product not found with this id",
          });
        }
       
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default applyCors(router.handler());