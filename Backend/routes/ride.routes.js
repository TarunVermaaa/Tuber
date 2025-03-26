const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/create",
  authMiddleware.authUser,
  body("pickup")
    .isString()
    .isLength({ min: 1, max: 100 })
    .withMessage("pickup is required"),
  body("destination")
    .isString()
    .isLength({ min: 1, max: 100 })
    .withMessage("destination is required"),
  body("vehicleType")
    .isString()
    .isIn(["car", "moto", "auto"])
    .withMessage("vehicleType is required"),
    rideController.createRide
);

module.exports = router;
