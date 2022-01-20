import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
