const userModel = require("../models/userModel");

const userTable = async (req, res) => {
  const { name, email, phone, DOB, joiningDate, id } = req.body;

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
      name: name,
      email: email,
      phone: phone,
      joiningDate: joiningDate,
      DOB: DOB,
      id: id,
    });

    res.status(200).json({
      success: true,
      message: "user added successfully",
      data: result,
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
