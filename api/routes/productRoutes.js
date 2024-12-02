const express = require("express");
const {
  getAllProducts,
  addProduct,
} = require("../controllers/productController");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", getAllProducts);
router.post("/", authenticate, addProduct); 

module.exports = router;
