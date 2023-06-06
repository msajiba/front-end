import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import applyCors from '@/middleware/cors';
import NewsLetter from '@/components/home/NewsLetter';


const router = createRouter().use(verifyTokenAndAdmin);

router.get(async(req, res)=>{
    try {
        db.connectDb();
        const newsletter =await NewsLetter.find({}).sort({ updatedAt: -1 });
        db.disconnectDb();
        return res.json({
            newsletter: newsletter,
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default applyCors(router.handler());