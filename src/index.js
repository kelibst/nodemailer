const express = require("express");
const tokenRouter = require("./routers/tokenRouter");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(tokenRouter);
// app.use(userRouter);
// app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
