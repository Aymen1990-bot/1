const express = require('express');
const { createRecipe, getRecipes, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/recipes', authMiddleware, createRecipe);
router.get('/recipes', authMiddleware, getRecipes);
router.put('/recipes/:id', authMiddleware, updateRecipe);
router.delete('/recipes/:id', authMiddleware, deleteRecipe);

module.exports = router;
