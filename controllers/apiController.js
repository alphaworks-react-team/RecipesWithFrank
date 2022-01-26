const axios = require("axios");
require("dotenv").config();
const API = process.env.API_KEY;

const headers = {
  "Content-Type": "application/json",
};

exports.getPopularRecipes = async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&addRecipeInformation=true&addRecipeNutrition=true&instructionsRequired=true&sort=popularity&sortDirection=desc`,
      {
        headers: headers,
      }
    );
    return res.json(result.data.results);
  } catch (error) {
    console.log(error);
  }
};

exports.getRecipeBySearch = async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&query=${req.query.search}&addRecipeInformation=true&addRecipeNutrition=true&instructionsRequired=true`,
      {
        headers: headers,
      }
    );
    return res.json(result.data);
  } catch (error) {
    console.log(error);
  }
};

exports.getRecipeDetailsById = async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${API}&includeNutrition=true`,
      {
        headers: headers,
      }
    );
    return res.json(result.data);
  } catch (error) {
    console.log;
  }
};
