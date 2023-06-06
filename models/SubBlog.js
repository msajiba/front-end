import mongoose from "mongoose";

const subBlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: [2, "must be atleast 2 charcters"],
      maxlength: [32, "must be atleast 2 charcters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const SubBlog =
  mongoose.models.SubBlog || mongoose.model("SubBlog", subBlogSchema);

export default SubBlog;
