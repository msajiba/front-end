import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';

import applyCors from '@/middleware/cors';
import Category from '@/models/Category';
import Slider from '@/models/Slider';


const router = createRouter();

router.get(async(req, res)=>{
    try {
        db.connectDb();
        const sliders =await Slider.find({}).sort({ updatedAt: -1 });
        db.disconnectDb();
        return res.json({
            sliders: sliders,
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default applyCors(router.handler());