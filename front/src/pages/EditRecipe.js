import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditRecipePage = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const history = useHistory();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:3000/api/recipes/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const { name, ingredients, instructions, category, imageUrl } = response.data;
                setName(name);
                setIngredients(ingredients);
                setInstructions(instructions);
                setCategory(category);
                setImageUrl(imageUrl);
            } catch (error) {
                toast.error('Failed to fetch recipe');
            }
        };
        fetchRecipe();
    }, [id]);

    const handleUpdateRecipe = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:3000/api/recipes/${id}`, { name, ingredients, instructions, category, imageUrl }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            history.push('/recipes');
            toast.success('Recipe updated successfully');
        } catch (error) {
            toast.error('Failed to update recipe');
        }
    };

    return (
        <form onSubmit={handleUpdateRecipe}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Recipe Name" />
            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients"></textarea>
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions"></textarea>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipePage;
