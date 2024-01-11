const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("userModel", userModel);
