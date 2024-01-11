// const mongoose = require("mongoose");

// const connectionDB = async (DATABASE_URL) => {
//   try {
//     const DB_OPTION = {
//       dbName: "data-entry",
//     };
//     await mongoose.connect(DATABASE_URL, DB_OPTION, {
//       userNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("database connection established");
//   } catch (error) {
//     console.log("database connection error", error);
//   }
// };
// module.exports = connectionDB;
// // Ab291cvqVFINDVQG;
const mongoose = require("mongoose");
const db =
  "mongodb+srv://neharadialcode:123@cluster0.af0xrhn.mongodb.net/?retryWrites=true&w=majority";

const connectionDB = async (DATABASE_URL) => {
  try {
    await mongoose
      .connect(db, {
        userNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB connected..."))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("database connection error", error);
  }
};
module.exports = connectionDB;
// // Ab291cvqVFINDVQG;

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//   })
//   .then(() => console.log("MongoDB connected..."))
//   .catch((err) => console.log(err));
