const express = require("express");
const tokenRouter = require("./routers/tokenRouter");
require("./db/app");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(tokenRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
