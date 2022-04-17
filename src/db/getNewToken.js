const { google } = require("googleapis");
const TOKEN_PATH = "token.json";
const readline = require("readline");
const fs = require("fs");

function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  return authUrl;
}

module.exports = getNewToken;
