import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const RecipeDetailsPage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:3000/api/recipes/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setRecipe(response.data);
            } catch (error) {
                toast.error('Failed to fetch recipe');
            }
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p>{recipe.category}</p>
            <img src={recipe.imageUrl} alt={recipe.name} />
        </div>
    );
};

export default RecipeDetailsPage;
