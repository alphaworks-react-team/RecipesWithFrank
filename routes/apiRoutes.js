const router = require("express").Router();

const {
  getPopularRecipes,
  getRecipeBySearch,
  getRecipeDetailsById,
  getRecipesByCuisine,
} = require("../controllers/apiController");

router.get("/recipes/popular", getPopularRecipes);
router.get("/recipes/search", getRecipeBySearch);
router.get("/recipes/cuisine", getRecipesByCuisine);
router.get("/recipes/:id", getRecipeDetailsById);

module.exports = router;
