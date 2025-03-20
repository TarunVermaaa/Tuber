const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastName,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = userModel.create({
    fullName: {
      firstname,
      lastName,
    },
    email,
    password,
  });

  return user;
};
