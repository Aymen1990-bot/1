import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

const signup = (username, password) => {
    return axios.post(`${API_URL}/signup`, { username, password });
};

const login = (username, password) => {
    return axios.post(`${API_URL}/login`, { username, password });
};

export default {
    signup,
    login
};
