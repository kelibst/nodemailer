const { default: axios } = require("axios");
const Token = require("../models/tokenModel");

const getEmail = async (id, token) => {
  const config = {
    method: "get",
    url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios(config);
};

const fetchEmail = async (messages) => {
  let curToken = await Token.find({});
  if (!curToken[0].access_token) {
    return "unable to get access token";
  }
  const requ = messages.slice(0, 19).map((mes) => {
    return getEmail(mes.id, curToken[0].access_token)
      .then((res) => {
        return res.data;
      })
      .catch((error) => error);
  });
  return Promise.all(requ);
};

module.exports = fetchEmail;
