const userModel = require("../models/userModel");

const userTable = async (req, res) => {
  try {
    console.log(req.body, "aaaaaa");
    res.status(200).json({
      success: true,
      message: "user added successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "user created",
    });
  }
};

module.exports = userTable;
