import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import { toast } from 'react-toastify';

const RecipeListPage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/api/recipes', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setRecipes(response.data);
            } catch (error) {
                toast.error('Failed to fetch recipes');
            }
        };
        fetchRecipes();
    }, []);

    return (
        <div>
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeListPage;
