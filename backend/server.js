const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./db/connect");
const errorHandler = require("./middleware/error.middleware");

// init app
const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// health check
app.get("/api/health", (req, res) => {
  res.send("App healthy!");
});

// routers
app.use("/api/surveys", require("./routes/survey.routes"));
app.use("/api/questions", require("./routes/questions.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

// Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  // connect to mongodb
  connectDB();

  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
