const express = require("express");
const router = express.Router();
const { body , query } = require("express-validator");
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


router.get('/get-fare' , 
  authMiddleware.authUser,
  query('pickup').isString().isLength({ min: 1, max: 100 }).withMessage("pickup is required"),
  query('destination').isString().isLength({ min: 1, max: 100 }).withMessage("destination is required"),
  rideController.getFare
)

router.get('/confirm' , 
  authMiddleware.authCaptain,
  body('rideId').isMongoId().withMessage("Invalid rideId"),
  rideController.confirmRide
)



module.exports = router;
