const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  credentials: {
    access_token: {
      type: String,
      required: true,
    },
    refresh_token: {
      type: String,
      required: true,
    },
    scope: {
      type: String,
      required: true,
    },
    token_type: {
      type: String,
    },
    expiry_date: {
      type: Number,
    },
  },
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
