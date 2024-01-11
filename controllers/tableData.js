const userModel = require("../models/userModel");
const tableData = async (req, res) => {
  const { name, email, DOB, phone, id, joiningDate } = req.body;

  try {
    const existingUser = await userModel.findOne({
      email: email,
    });
    console.log(existingUser, "existingUser");
    if (existingUser) {
      res.status(200).json({
        success: false,
        message: "existing user",
      });
    }

    const result = await userModel.create({
      id: id,
      name: name,
      email: email,
      DOB: DOB,
      phone: phone,
      joiningDate: joiningDate,
    });
    console.log(result, "result");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error creating",
    });
  }
};
module.exports = tableData;
