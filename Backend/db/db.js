const mongoose = require("mongoose");

function connectToDb() {
  console.log("Trying to connect to MongoDB...");
  console.log("DB_CONNECT:", process.env.DB_CONNECT); // Debugging

  mongoose
    .connect(process.env.DB_CONNECT, {
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
}

module.exports = connectToDb;
