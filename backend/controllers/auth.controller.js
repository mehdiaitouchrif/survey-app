const User = require("../models/user.model");
const ErrorResponse = require("../utils/error.utils");

// Sign up
// POST /api/auth/signup
exports.signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = user.getJwtToken();
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

// Login
// POST /api/auth/login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // check user existence
    if (!user) return next(new ErrorResponse("Invalid email or password", 400));

    // check password validity
    const isMatch = await user.matchPasswords(password);
    if (!isMatch)
      return next(new ErrorResponse("Invalid email or password", 400));

    // auth user
    const token = user.getJwtToken();
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

// Get current user
exports.getMe = async (req, res, next) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    next(error);
  }
};
