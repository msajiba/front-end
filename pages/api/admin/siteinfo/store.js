import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import applyCors from "@/middleware/cors";

import Siteinfo from "@/models/Siteinfo";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const {logo, title,phone,email,address, description } = req.body;
  
    db.connectDb();
    await new Siteinfo({logo, title,phone,email,address, description}).save();

    db.disconnectDb();
    res.json({
      status: true,
      message: `Siteinfo has been created successfully.`,
    });
  } catch (error) {
    db.disconnectDb();
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
