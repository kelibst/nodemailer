const express = require("express");
const authorize = require("../db/authorize");
const router = new express.Router();

router.get("/v1/token/:clientToken/:clientId", async (req, res) => {
  const { clientToken, clientId } = req.params;
  const redirect_uris = ["http://localhost:3001"];
  authorize({ clientToken, clientId, redirect_uris }, (err, res) => {
    console.log(err);
    console.log(res);
  });
  res.send("Server is running we ll");
});

module.exports = router;
