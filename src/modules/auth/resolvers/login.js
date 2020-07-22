const { AuthenticationError } = require("apollo-server-express");
const { create } = require("../../../utils/token");
const User = require("../../../models/user");
const bcyrpt = require("bcrypt");
const config = require("../../../config");

const login = async (_, { email, password }) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new AuthenticationError("User not found");
  }

  const isPasswordValid = await bcyrpt.compare(password, user.hashedPassword);

  if (!isPasswordValid) {
    throw new AuthenticationError("Incorrect credentials");
  }

  const token = create(user._id);

  return {
    user: {
      ...user._doc,
      id: user._id,
    },
    token,
    tokenExpiration: config.JWT_LIFE_TIME,
  };
};

module.exports = login;
