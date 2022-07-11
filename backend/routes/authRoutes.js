const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js")

router.post("/auth/login", authController.login);
router.post("/auth/signup", authController.signup);
router.get("/auth/logout", authController.logout);

module.exports = router;