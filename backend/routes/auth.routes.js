const express = require("express");
const validate = require("../middleware/validate.middleware");
const { signup, login, getMe } = require("../controllers/auth.controller");
const { signupSchema, loginSchema } = require("../schemas/auth.schemas");
const requireAuth = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);
router.get("/me", requireAuth, getMe);

module.exports = router;
