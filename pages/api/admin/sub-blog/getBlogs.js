import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Category from '@/models/Category';
import slugify from 'slugify';
import Product from '@/models/Products';
import applyCors from '@/middleware/cors';
import SubCategory from '@/models/SubCategory';
import SubBlog from '@/models/SubBlog';
import Blog from '@/models/Blog';


const router = createRouter();

router.get(async (req, res) => {
  try {
    const { slug } = req.query;
    db.connectDb();
    const subBlog = await SubBlog.findOne({slug:slug});

    const blogs = await Blog.find({ subBlog: subBlog._id }).populate("subBlog");
    db.disconnectDb();
    return res.json({
        blogs: blogs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




export default applyCors(router.handler());
