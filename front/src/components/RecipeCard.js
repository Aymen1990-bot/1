import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            <Link to={`/edit-recipe/${recipe.id}`}>Edit</Link>
        </div>
    );
};

export default RecipeCard;
