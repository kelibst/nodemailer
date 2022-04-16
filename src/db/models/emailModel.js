const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  messages: [
    {
      id: {
        type: String,
        required: true,
      },
      threadId: {
        type: String,
      },
      labelIds: {
        type: Array
      },
      snippet: {
        type: String
      }
    },
  ],
  sizeEstimate: {
    type: String,
  },
  sizeEstimate: {
    type: String,
  },
  internalDate: {
    type: String,
  }
});

const Emails = mongoose.model("Emails", emailSchema);

module.exports = Emails;
