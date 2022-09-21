const ErrorResponse = require("../utils/error.utils");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Invalid MongoDB ID
  if (err.name === "CastError") {
    const message = `Invalid ID`;
    error = new ErrorResponse(message, 404);
  }

  // Duplicate Key Values
  if (err.code === 11000) {
    const message = `This ${Object.keys(err.keyValue)[0]} already exists`;
    error = new ErrorResponse(message, 400);
  }

  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  res.status(status).json(message);

  next();
};

module.exports = errorHandler;
