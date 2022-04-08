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
  // console.log("Authorize this app by visiting this url:", authUrl);
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout,
  // });
  rl.question("Enter the code from that page here: ", (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error("Error retrieving access token", err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

module.exports = getNewToken;
