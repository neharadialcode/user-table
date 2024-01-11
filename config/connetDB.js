const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTION = {
      dbName: "user-table",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTION, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connection established");
  } catch (error) {
    console.log("database connection error", error);
  }
};
module.exports = connectDB;
