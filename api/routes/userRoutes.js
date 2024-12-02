const express = require("express");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/profile", authenticate, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}`, user: req.user });
});

module.exports = router;
