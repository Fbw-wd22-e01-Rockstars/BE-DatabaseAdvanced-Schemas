import Article from "../models/Article.js";

export const getArticles = async (req, res, next) => {
  let articles = await Article.find();
  res.send(articles);
};

export const addArticle = async (req, res, next) => {
  const info = req.body;
  try {
    const article = await Article.create(info);
    res.json(article);
  } catch (err) {
    next(err);
  }
};
