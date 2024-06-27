import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddRecipePage = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const history = useHistory();

    const handleAddRecipe = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:3000/api/recipes', { name, ingredients, instructions, category, imageUrl }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            history.push('/recipes');
            toast.success('Recipe added successfully');
        } catch (error) {
            toast.error('Failed to add recipe');
        }
    };

    return (
        <form onSubmit={handleAddRecipe}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Recipe Name" />
            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients"></textarea>
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions"></textarea>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipePage;
