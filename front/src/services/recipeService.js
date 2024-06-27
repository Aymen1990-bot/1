import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const getRecipes = (token) => {
    return axios.get(`${API_URL}/recipes`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

const createRecipe = (recipe, token) => {
    return axios.post(`${API_URL}/recipes`, recipe, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

const updateRecipe = (id, recipe, token) => {
    return axios.put(`${API_URL}/recipes/${id}`, recipe, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

const deleteRecipe = (id, token) => {
    return axios.delete(`${API_URL}/recipes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export default {
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe
};
