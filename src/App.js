import logo from "./logo.svg";
import "./App.css";
import {
  getRecipe,
  getRecipeBySearch,
  getIngredientsByRecipeId,
} from "./utils";

function App() {
  return (
    <div className="App">
      <button onClick={() => getIngredientsByRecipeId()}>Get Data</button>
    </div>
  );
}

export default App;
