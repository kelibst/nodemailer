const express = require("express");
const router = new express.Router();

router.post("/v1/token/", async (req, res) => {
  res.send("Server is running well");
});

module.exports = router;
