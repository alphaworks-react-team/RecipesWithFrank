
//components
import Home from './components/Home';
import Login from './components/Logs /Login';
import Logout from './components/Logs /Logout';
//routes
import { Routes, Route } from 'react-router-dom';
import './App.css';
//utilities
import {
  getRecipe,
  getRecipeBySearch,
  getIngredientsByRecipeId,
} from "./utils";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>

        <Search getRecipeBySearch={getRecipeBySearch} />
        {/* <button onClick={() => getIngredientsByRecipeId()}>Get Data</button> */}
      <Routes>
        <Route path='/' element={<Home />} />

        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/logout" element={<Logout />}/>
      </Routes>
    </div>
  );
};

export default App;
