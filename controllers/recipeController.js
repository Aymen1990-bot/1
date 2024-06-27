const Recipe = require('../models/recipe');

exports.createRecipe = async (req, res) => {
    const { name, ingredients, instructions, category, imageUrl } = req.body;
    try {
        const recipe = await Recipe.create({ name, ingredients, instructions, category, imageUrl, userId: req.user.id });
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ error: 'Recipe creation failed' });
    }
};

exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll({ where: { userId: req.user.id } });
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Fetching recipes failed' });
    }
};

exports.updateRecipe = async (req, res) => {
    const { id } = req.params;
    const { name, ingredients, instructions, category, imageUrl } = req.body;
    try {
        const recipe = await Recipe.findOne({ where: { id, userId: req.user.id } });
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

        recipe.name = name;
        recipe.ingredients = ingredients;
        recipe.instructions = instructions;
        recipe.category = category;
        recipe.imageUrl = imageUrl;
        await recipe.save();

        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: 'Recipe update failed' });
    }
};

exports.deleteRecipe = async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findOne({ where: { id, userId: req.user.id } });
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

        await recipe.destroy();
        res.status(200).json({ message: 'Recipe deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Recipe deletion failed' });
    }
};
