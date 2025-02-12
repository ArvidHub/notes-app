import express from "express";
import "./db/mongoose.js";
import taskRouter from "./routers/task.js";
import userRouter from "./routers/user.js";

const app = express();

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);

export default app;
