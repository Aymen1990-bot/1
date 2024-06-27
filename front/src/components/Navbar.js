import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <nav>
            <Link to="/recipes">Recipes</Link>
            <Link to="/add-recipe">Add Recipe</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
