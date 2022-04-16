const mongoose = require("mongoose");

const emailsSchema = new mongoose.Schema({
  messages: [
    {
      id: {
        type: String,
        required: true,
      },
      threadId: {
        type: String,
        required: true,
      },
    },
  ],
  nextPageToken: {
    type: String,
  },
  resultsSizeEstimate: {
    type: Number,
  },
});

const EmailsList = mongoose.model("EmailsList", emailsSchema);

module.exports = EmailsList;
