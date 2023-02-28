import express from "express";
import {
  createTodo,
  deleteTodo,
  deleteTodos,
  getTodos,
  updateTodo,
} from "../controllers/TodoController.js";

const router = express.Router();

router.get("/:postId", getTodos);
router.post("/:postId", createTodo);
router.delete("/single/:todoId", deleteTodo);
router.delete("/:postId", deleteTodos);
router.put("/:id", updateTodo);

export default router;
