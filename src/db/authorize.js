const { google } = require("googleapis");
const getNewToken = require("./getNewToken");
const fs = require("fs");
const TOKEN_PATH = "token.json";

const authorize = (credentials, callback) => {
  const { clientSecret, clientId, redirect_uris } = credentials;
  return (oAuth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirect_uris[0]
  ));

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token), callback);
    callback(oAuth2Client);
  });
};

module.exports = authorize;
