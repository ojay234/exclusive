const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const { name, price, description, stock } = req.body;
  const newProduct = new Product({
    name,
    price,
    description,
    stock,
    vendor: req.user.id,
  });
  await newProduct.save();
  res.status(201).json(newProduct);
};
