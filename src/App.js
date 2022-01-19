import "./App.css";
import {
  getRecipe,
  getRecipeBySearch,
  getIngredientsByRecipeId,
} from "./utils";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Search getRecipeBySearch={getRecipeBySearch} />
      {/* <button onClick={() => getIngredientsByRecipeId()}>Get Data</button> */}
    </div>
  );
}

export default App;
