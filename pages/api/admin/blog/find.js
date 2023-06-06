import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Product from '@/models/Products';
import applyCors from '@/middleware/cors';
import Blog from '@/models/Blog';
import SubBlog from '@/models/SubBlog';


const router = createRouter();

router.get(async(req, res)=>{
    try {
      const { slug } = req.query;
        db.connectDb();
        await SubBlog.find({});
        const found = await Blog.findOne({slug:slug}).populate("subBlog");
        db.disconnectDb();
        if(found){
          return res.json({
            message: "Blog has been found successfully",
            blog: found
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