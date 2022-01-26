const router = require("express").Router();

const {
  getPopularRecipes,
  getRecipeBySearch,
  getRecipeDetailsById,
} = require("../controllers/apiController");

router.get("/recipes/popular", getPopularRecipes);
router.get("/recipes/search", getRecipeBySearch);
router.get("/recipes/:id", getRecipeDetailsById);

module.exports = router;
