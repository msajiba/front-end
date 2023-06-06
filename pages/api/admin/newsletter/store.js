import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import applyCors from '@/middleware/cors';
import Shipping from '@/models/Shipping';
import Newsletter from '@/models/Newletter';


const router = createRouter();

router.post(async(req, res)=>{
    try {
        const { email } = req.body;
        db.connectDb();
        await new Newsletter({ email}).save();
    
        db.disconnectDb();
        res.json({
          message: `You've subscribed successfully.`,

        });
      } catch (error) {
        db.disconnectDb();
        res.status(500).json({ message: error.message });
      }
})




export default applyCors(router.handler());