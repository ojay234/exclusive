const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  const { name, description, parentCategory } = req.body;
  const newCategory = new Category({ name, description, parentCategory });
  try {
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: "Error creating category", error });
  }
};


exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("parentCategory");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, parentCategory } = req.body;

  try {
    const category = await Category.findByIdAndUpdate(
      id,
      { name, description, parentCategory },
      { new: true }
    );
    res.json(category);
  } catch (error) {
    res.status(400).json({ message: "Error updating category", error });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await Category.findByIdAndDelete(id);
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
};
