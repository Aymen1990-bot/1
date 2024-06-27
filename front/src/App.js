import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import RecipeListPage from './pages/RecipeList';
import AddRecipePage from './pages/AddRecipe';
import EditRecipePage from './pages/EditRecipe';
import RecipeDetailsPage from './pages/RecipeDetail';
import GlobalStyles from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <GlobalStyles />
            <ToastContainer />
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <PrivateRoute path="/recipes" component={RecipeListPage} />
                <PrivateRoute path="/add-recipe" component={AddRecipePage} />
                <PrivateRoute path="/edit-recipe/:id" component={EditRecipePage} />
                <PrivateRoute path="/recipe/:id" component={RecipeDetailsPage} />
            </Switch>
        </Router>
    );
}

export default App;
