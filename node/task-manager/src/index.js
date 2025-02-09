import express from "express";
import "./db/mongoose.js";
import taskRouter from "./routers/task.js";
import userRouter from "./routers/user.js";

const app = express();
const port = process.env.PORT;
console.log(port);

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
