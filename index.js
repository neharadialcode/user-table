const express = require("express");
const userRoutes = require("./routes/appRoutes");
const connectDB = require("./config/connetDB");
require("dotenv").config();
const app = express();
const cors = require("cors");
// const uploadRoute = require("./routes/uploadRoute");

app.use(cors());
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
connectDB(DATABASE_URL);
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/user", userRoutes);

app.listen(port, function () {
  console.log("http://localhost:8000");
});
