const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CaptainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastname: {
      type: String,
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  socketId: {
    type: String,
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "Color should be atleast 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minLength: [4, "Plate should be atleast 4 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    vehicleType: {
      type: String,
      enum: ["bicycle", "car", "auto"],
      required: true,
    },
  },

  location: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
});


CaptainSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY, { expiresIn: '24h'});
  return token;
}

CaptainSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.password);
}

CaptainSchema.statics.hashPassword = async function(password){
  return await bcrypt.hash(password, 10);
}


const captainModel = mongoose.model("captain", CaptainSchema);

module.exports = captainModel;