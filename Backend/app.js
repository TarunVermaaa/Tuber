const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const CookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
const captainRoutes = require("./routes/captain.routes");
const mapsRoutes = require("./routes/maps.routes");
const rideRoutes = require("./routes/ride.routes");
const cors = require("cors");


connectToDb();

app.use(cors({ origin: "*" })); // ⚠️ Production me * mat rakho, specific frontend ka URL do
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(CookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapsRoutes);

app.use("/rides", rideRoutes);

module.exports = app;
