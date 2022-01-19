import axios from "axios";
const API = process.env.REACT_APP_API_KEY;

export const getRecipe = async () => {
  try {
    console.log(API);
    console.log("hello");
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}`,
      {
        headers: {
          "Content-type": "application/json",
        },
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
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&query=${search}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const getIngredientsByRecipeId = async (id = "1003464") => {
  try {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
