import axios from "axios";
const API = process.env.REACT_APP_API_KEY;

const headers = {
  "Content-Type": "application/json",
};

export const getRecipe = async () => {
  try {
    console.log(API);
    console.log("hello");
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}`,
      {
        headers: headers,
      }
    );
    console.log("response?", res.data.results);
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeBySearch = async (search = "pasta") => {
  try {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&query=${search}&addRecipeInformation=true&addRecipeNutrition=true&instructionsRequired=true`,
      {
        headers: headers,
      }
    );
    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

// export const getRecipeBySearch = async (search = "pasta") => {
//   try {
//     const res = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&query=${search}`,
//       {
//         headers: headers,
//       }
//     );
//     const recipeIds = res.data.results;
//     const recipes = [];
//     for (let value of Object.values(recipeIds)) {
//       let data = value.id;
//       recipes.push(data.data);
//     }
//     console.log(recipes);
//     return recipes;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getIngredientsByRecipeId = async (id = "1003464") => {
  try {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API}`,
      {
        headers: headers,
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const getPopularRecipes = async (func) => {
  try {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&addRecipeInformation=true&addRecipeNutrition=true&instructionsRequired=true&sort=popularity&sortDirection=desc`,
      {
        headers: headers,
      }
    );
    func(res.data.results);
  } catch (error) {
    console.log(error);
  }
};
