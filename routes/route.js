const express = require("express");
const tableData = require("../controllers/tableData");

const userRoutes = express.Router();

userRoutes.post("/create-table", tableData);

module.exports = userRoutes;
