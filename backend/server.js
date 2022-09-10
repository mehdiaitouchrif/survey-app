const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./db/connect");

// init app
const app = express();
dotenv.config();

// connect to mongodb
connectDB();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// health check
app.get("/api/health", (req, res) => {
  res.send("App healthy!");
});

// routers

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
