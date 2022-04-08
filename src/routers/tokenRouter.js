const express = require("express");
const authorize = require("../db/authorize");
const router = new express.Router();
const SCOPES = ["https://mail.google.com/"];

router.get("/v1/token/:clientSecret/:clientId", async (req, res) => {
  const { clientSecret, clientId } = req.params;
  console.log("secreate", clientSecret);
  console.log(clientId);
  const redirect_uris = ["http://localhost:3001/auth"];

  const oAuth2Client = authorize({
    clientSecret,
    clientId,
    redirect_uris,
  });
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  res.send({ LoginToken: authUrl });
});

router.get("/auth", async (req, res) => {
  res.status(201).send("Successfully generated refresh token");
});

module.exports = router;
