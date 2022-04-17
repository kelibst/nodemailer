const { google } = require("googleapis");

const authorize = (credentials) => {
  const { clientSecret, clientId, redirect_uris } = credentials;
  return (oAuth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirect_uris[0]
  ));
};

module.exports = authorize;
