import {
  verifyToken,
  verifyTokenAndAuthorization,
} from "@/helpers/verityToken";
import applyCors from "@/middleware/cors";
import Profile from "@/models/Profile";
import db from "@/utils/db";
import { createRouter } from "next-connect";
import { BsTruckFlatbed } from "react-icons/bs";

const router = createRouter().use(verifyToken).use(verifyTokenAndAuthorization);

router.post(async (req, res) => {
  try {
    const { data } = req.body;
    const filter = { user_id_no: req.body.user_id_no };
    const update = {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      post_code: req.body.post_code,
      country: req.body.country,
      phone: req.body.phone,
    };
    db.connectDb();
    let doc = await Profile.findOneAndUpdate(filter, update, { new: true });
    res.status(200).json(doc);
  } catch (error) {
    return res.json({
      message: "something went wrong",
    });
  }
});

export default applyCors(router.handler());
