// [START gmail_quickstart]
const fs = require("fs");
const authorize = require("./db/authorize");
const listLabels = require("./db/gmails/getListLabels");

// If modifying these scopes, delete token.json.
const SCOPES = ["https://mail.google.com/"];

// Load client secrets from a local file.
fs.readFile("credentials.json", (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  authorize(JSON.parse(content), listLabels);
});

module.exports = {
  SCOPES,
};
