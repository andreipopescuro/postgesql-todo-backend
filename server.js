import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import PostRoute from "./routes/post.js";
import TodoRoute from "./routes/todo.js";
import UserRoute from "./routes/users.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", UserRoute);
app.use("/api/todos", TodoRoute);
app.use("/api/posts", PostRoute);

app.listen(process.env.PORT, () => {
  console.log("Server running on port ", process.env.PORT);
});
