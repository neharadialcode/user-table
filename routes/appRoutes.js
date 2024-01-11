const express = require("express");
const tableData = require("../controllers/tableData");

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  return res.status(200).json({
    message: "server started",
  });
});
userRoutes.post("/create-table", tableData);

module.exports = userRoutes;
