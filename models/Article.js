import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    keywords: { type: [String] },
    category: { type: String },
    comments: [
      {
        text: { type: String },
        user: { type: String },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Article = mongoose.model("Article", ArticleSchema);

export default Article;
