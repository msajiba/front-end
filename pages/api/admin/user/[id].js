import { createRouter } from 'next-connect';
import bcrypt from 'bcrypt';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import User from '@/models/User';
import applyCors from '@/middleware/cors';

const router = createRouter().use(verifyTokenAndAdmin);

router.get(async (req, res) => {
  const { id } = req.query;
  try {
    await db.connectDb();

    console.log(req.params.id);
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    db.disconnectDb();
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    return res.json({
      message: "something went wrong",
    });
  }
});




export default applyCors(router.handler());
