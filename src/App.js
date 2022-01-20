import logo from "./logo.svg";
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
      {/* <button onClick={() => getIngredientsByRecipeId()}>Get Data</button> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
