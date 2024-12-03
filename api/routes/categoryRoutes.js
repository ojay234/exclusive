const express = require("express");
const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const {
  authenticate,
  authenticateAdmin,
} = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authenticate, authenticateAdmin, createCategory);
router.get("/", getCategories);
router.put("/:id", authenticate, authenticateAdmin, updateCategory);
router.delete("/:id", authenticate, authenticateAdmin, deleteCategory);

module.exports = router;
