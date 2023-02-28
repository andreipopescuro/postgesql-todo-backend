import express from "express";
import {
  createPost,
  deletePost,
  deletePosts,
  getPosts,
  updatePost,
} from "../controllers/PostController.js";

const router = express.Router();

router.get("/:userId", getPosts);
router.post("/:userId", createPost);
router.delete("/:userId", deletePosts);
router.delete("/:userId/:postId", deletePost);
router.put("/:postId", updatePost);

export default router;
