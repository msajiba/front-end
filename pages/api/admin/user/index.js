import { createRouter } from 'next-connect';
import bcrypt from 'bcrypt';


import User from '@/models/User';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import applyCors from '@/middleware/cors';


const router = createRouter().use(verifyTokenAndAdmin);

router.get(async(req, res)=>{
    try{
        db.connectDb();
        const users = await User.find();
        db.disconnectDb();
        res.status(200).json(users);

    }catch(error){
        return res.json({
            message: "something went wrong",
          });
    }
})




export default applyCors(router.handler());