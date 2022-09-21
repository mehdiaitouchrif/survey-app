const express = require("express");
const validate = require("../middleware/validate.middleware");
const { signup, login } = require("../controllers/auth.controller");
const { signupSchema, loginSchema } = require("../schemas/auth.schemas");
const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);

module.exports = router;
