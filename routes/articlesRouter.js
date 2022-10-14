import express from "express";

const router = express.Router();
import { addArticle, getArticles } from "../controllers/articleControllers.js";

router.route("/").post(addArticle).get(getArticles);

export default router;
