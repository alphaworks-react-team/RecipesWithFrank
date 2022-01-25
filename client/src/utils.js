import axios from "axios";
const API = process.env.REACT_APP_API_KEY;

const headers = {
  "Content-Type": "application/json",
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

export const getRecipeDetails = async (id) => {
  console.log(id);
  try {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API}&includeNutrition=true`,
      {
        headers: headers,
      }
    );
    return res.data;
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
