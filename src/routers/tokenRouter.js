const express = require("express");
const authorize = require("../db/authorize");
const Token = require("../db/models/tokenModel");
const router = new express.Router();
const SCOPES = ["https://mail.google.com/"];
const axios = require("axios");
const Emails = require("../db/models/emailModel");

router.get("/v1/token/:clientSecret/:clientId", async (req, res) => {
  const { clientSecret, clientId } = req.params;
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
  res.send({ authUrl });
});

router.get("/auth", async (req, res) => {
  try {
    const { code } = req.query;
    const token = await oAuth2Client.getToken(code);
    const savedToken = await Token(token.tokens);
    savedToken.save();
    res.status(201).send(savedToken);
    await oAuth2Client.setCredentials(token);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/v1/mails", async (req, res) => {
  const curToken = await Token.findById("6250465e86c219cdcda1bab4");
  if (!curToken.access_token) {
    return res.status(400).send("unable to get access token from the database");
  }

  const config = {
    method: "get",
    url: "https://gmail.googleapis.com/gmail/v1/users/me/messages",
    headers: {
      Authorization: `Bearer ${curToken.access_token}`,
    },
  };

  axios(config)
    .then(async function (response) {
      try {
        await Emails(response.data);
      } catch (error) {
        res.status(500).send(error);
      }
      return res.status(200).send(response.data);
    })
    .catch(function (error) {
      res.status(400).send({ error });
    });
});

module.exports = router;
