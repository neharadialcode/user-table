const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("userModel", userModel);
