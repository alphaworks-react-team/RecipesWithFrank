import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export const getRecipeBySearch = async search => {
  try {
    const res = await axios.get(
      `http://localhost:8000/recipes/search/?search=${search}`,
      {
        headers: headers,
      }
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeDetails = async id => {
  try {
    const res = await axios.get(`http://localhost:8000/recipes/${id}`, {
      headers: headers,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularRecipes = async () => {
  try {
    const res = await axios.get(`http://localhost:8000/recipes/popular`, {
      headers: headers,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipesByCuisine = async (cuisine) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/recipes/cuisine?cuisine=${cuisine}`,
      {
        headers: headers,
      }
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const cuisines = [
  "African",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];
