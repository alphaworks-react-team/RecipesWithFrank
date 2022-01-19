import logo from './logo.svg';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {
  getRecipe,
  getRecipeBySearch,
  getIngredientsByRecipeId,
} from './utils';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
