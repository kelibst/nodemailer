const express = require("express");
const authorize = require("../db/authorize");
const Token = require("../db/models/tokenModel");
const router = new express.Router();
const SCOPES = ["https://mail.google.com/"];
const axios = require("axios");
const Emails = require("../db/models/emailModel");
require("dotenv").config();

router.get("/v1/token", async (req, res) => {
  const { clientSecret, clientId } =  process.env;
  const redirect_uris = ["http://localhost:3001/auth"];
  const oAuth2Client = authorize({
    clientId: clientId,
    clientSecret: clientSecret,
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
    const storedToken = await Token.find({});

    if (storedToken.length) {
      await storedToken[storedToken.length - 1].updateOne(token.tokens);
      res.status(204).send(token.tokens);
    } else {
      const savedToken = await Token(token.tokens);
      savedToken.save();
      res.status(201).send(savedToken);
    }
    await oAuth2Client.setCredentials(token);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/v1/mails", async (req, res) => {
  let curToken = await Token.find({});
  if (!curToken[0].access_token) {
    return res.status(400).send("unable to get access token from the database");
  }

  const config = {
    method: "get",
    url: "https://gmail.googleapis.com/gmail/v1/users/me/messages",
    headers: {
      Authorization: `Bearer ${curToken[0].access_token}`,
    },
  };

  axios(config)
    .then(async function (response) {
      try {
        const storeEmails = await Emails(response.data);
        storeEmails.save();
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
