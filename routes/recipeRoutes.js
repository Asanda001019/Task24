const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// POST /api/recipes
router.post('/', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/recipes with pagination
router.get('/', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const recipes = await Recipe.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Recipe.countDocuments();
    res.status(200).json({
      recipes,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/recipes/:id - Get a specific recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);  // Look for the recipe by its ID
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);  // If found, return the recipe data
  } catch (err) {
    res.status(500).json({ message: err.message });  // Handle errors (e.g., invalid ID format)
  }
});



// PUT /api/recipes/:id - Update a specific recipe by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/recipes/:id - Delete a specific recipe by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.status(200).json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
