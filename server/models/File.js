const mongoose = require("mongoose");

const FileStrut = new mongoose.Schema({
  opens: {
    type: Number,
    required: true
  },
  closeAt: {
    type: Number,
    required: true
  },
  genkey: {
    type: String,
    required: true
  },
  message: {
    type: String
  }
});

const File = mongoose.model("File", FileStrut);

module.exports = File;
