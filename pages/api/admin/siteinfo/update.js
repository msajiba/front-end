import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import applyCors from "@/middleware/cors";
import Siteinfo from "@/models/Siteinfo";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { id, logo, title,phone,email,address, description } = req.body;
    db.connectDb();
    const updated = await Siteinfo.findByIdAndUpdate(id, {
        logo, title,phone,email,address, description
    });
    db.disconnectDb();
    if (updated) {
      return res.json({
        status: true,
        message: "Siteinfo has been updated successfully",
      });
    } else {
      return res.json({
        status: false,
        message: "Siteinfo not found with this id",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
