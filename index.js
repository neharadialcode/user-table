// const express = require("express");
// require("dotenv").config();
// const app = express();
// const cors = require("cors");
// const connectionDB = require("./config/connectionDB");
// const { route } = require("./routes/route");

// app.use(cors());
// const port = process.env.PORT;
// const DATABASE_URL = process.env.DATABASE_URL;
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
// connectionDB(DATABASE_URL);
// app.get("/", (req, res) => {
//   res.send("Welcome");
// });
// app.use("/user", route);

// app.listen(port, function () {
//   console.log("http://localhost:4500");
// });

const express = require("express");
const userRoutes = require("./routes/route");
const connectDB = require("./config/connectionDB");
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
// app.use("/images", uploadRoute);

app.listen(port, function () {
  console.log("http://localhost:8000");
});
