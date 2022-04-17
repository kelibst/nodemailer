const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  emails: [
    {
      id: {
        type: String,
      },
      threadId: {
        type: String,
      },
      labelIds: [],
      snippet: {
        type: String,
      },
      payload: {},
      sizeEstimate: {
        type: String,
      },
      sizeEstimate: {
        type: String,
      },
      internalDate: {
        type: String,
      },
    },
  ],
});

const Emails = mongoose.model("Emails", emailSchema);

module.exports = Emails;
