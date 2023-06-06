import { verifyToken ,verifyTokenAndAuthorization} from '@/helpers/verityToken';
import applyCors from '@/middleware/cors';
import Profile from '@/models/Profile';
import db from '@/utils/db';
import { createRouter } from 'next-connect';

const router = createRouter().use(verifyToken).use(verifyTokenAndAuthorization);

router.post(async(req, res)=>{
    try{
        const data = req.body;
        db.connectDb();
        const oldProfile =  await Profile.findOne({user_id_no: data.user_id_no});
        if(oldProfile){
            res.status(200).json({message: "already exists"});
        }else{
             const profile = new Profile(data);
        const response = await profile.save();
        res.status(200).json(response)

        }


    }catch(error){
        return res.json({
            message: "something went wrong",
          });
    }
})



export default applyCors(router.handler());