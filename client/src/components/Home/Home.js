import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Jumbotron from "./Jumbotron";
import Search from "../Search/Search";
import {
  getRecipeBySearch,
  getPopularRecipes,
  getRecipeDetails,
  cuisines,
  getRecipesByCuisine,
} from "../../utils";
import { AiOutlineClockCircle, AiOutlineFire } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import {
  JumbotronText,
  HomeContainer,
  RecipeContainer,
  RecipeCard,
  ImageContainer,
  RecipeImage,
  RecipeDetailsContainer,
  RecipeDetailsWrapper,
  RecipeDetailGroupWrapper,
  RecipeDetailText,
  ToolTipText,
  ToolTipBox,
  RecipeTitle,
  Header,
  CuisineButton,
  CuisineContainer,
} from "./home.styles";

//transitions
import { motion } from "framer-motion";
import { HomeVariant, pageTransitions } from "../FramerPageTransitions";

const Home = ({ setRecipeDetails }) => {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState();

  const navigate = useNavigate();
  const getRecipeDetail = async (id) => {
    const result = await getRecipeDetails(id);
    setRecipeDetails(result);
    navigate(`/recipes/${id}`);
  };

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const results = await getPopularRecipes();
    setRecipes(results);
  };

  const getRecipeByCuisine = async (cuisine) => {
    try {
      const results = await getRecipesByCuisine(cuisine.cuisine);
      setRecipes(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    <Jumbotron>
        <JumbotronText textAlign="center">
          Explore over <strong>2</strong> recipes With Frank.
        </JumbotronText>
        <Search
          getRecipeBySearch={getRecipeBySearch}
          setRecipes={setRecipes}
          setTitle={setTitle}
        />
        <JumbotronText>
          Having Trouble? Try these different cuisines!
        </JumbotronText>
        <CuisineContainer>
          {cuisines.map((cuisine, index) => (
            <CuisineButton
              key={index}
              onClick={() => getRecipeByCuisine({ cuisine })}
            >
              {cuisine}
            </CuisineButton>
          ))}
        </CuisineContainer>
      </Jumbotron>
      <motion.div initial="out" animate="in" exit="out" variants={HomeVariant} transition={pageTransitions}>
      <HomeContainer>
        <RecipeContainer>
          <Header>
            {title === undefined
              ? "Popular Recipes"
              : `You searched for ${title}...`}
          </Header>
          {recipes?.map((recipes, index) => (
            <RecipeCard key={index} onClick={() => getRecipeDetail(recipes.id)}>
              <ImageContainer>
                <RecipeImage src={recipes?.image} />
              </ImageContainer>
              <RecipeDetailsContainer>
                <RecipeTitle>{recipes.title}</RecipeTitle>
                <RecipeDetailsWrapper>
                  <RecipeDetailGroupWrapper>
                    <AiOutlineClockCircle
                      style={{ position: "relative", top: "1px", left: "2px" }}
                      color="gray"
                      size="25px"
                      position="center"
                    />
                    <RecipeDetailText>
                      {recipes.readyInMinutes}min
                    </RecipeDetailText>
                    <AiOutlineFire
                      style={{ position: "relative", top: "1px", left: "2px" }}
                      color="gray"
                      size="25px"
                      position="center"
                    />
                    <RecipeDetailText>
                      {Math.floor(recipes.nutrition?.nutrients[0].amount)}{" "}
                      {recipes.nutrition?.nutrients[0].name}
                    </RecipeDetailText>
                  </RecipeDetailGroupWrapper>
                  <RecipeDetailGroupWrapper>
                    <ToolTipBox>
                      <GoPrimitiveDot
                        style={{
                          position: "relative",
                          top: "2px",
                          left: "10px",
                        }}
                        size="25px"
                        color="red"
                      />
                      <ToolTipText
                        backgroundColor="red"
                        width="140px"
                        ml="-50px"
                        positionLeft="-8px"
                      >
                        {recipes.nutrition.nutrients[4].name}
                      </ToolTipText>
                    </ToolTipBox>
                    <RecipeDetailText>
                      {Math.floor(recipes.nutrition.nutrients[4].amount)}g
                    </RecipeDetailText>
                    <ToolTipBox>
                      <GoPrimitiveDot
                        style={{
                          position: "relative",
                          top: "2px",
                          left: "10px",
                        }}
                        size="25px"
                        color="blue"
                      />
                      <ToolTipText
                        backgroundColor="blue"
                        width="60px"
                        ml="-23px"
                        positionLeft="5px"
                      >
                        {recipes.nutrition?.nutrients[8].name}
                      </ToolTipText>
                    </ToolTipBox>
                    <RecipeDetailText>
                      {Math.floor(recipes.nutrition?.nutrients[8].amount)}g
                    </RecipeDetailText>
                    <ToolTipBox>
                      <GoPrimitiveDot
                        style={{
                          position: "relative",
                          top: "2px",
                          left: "10px",
                        }}
                        size="25px"
                        color="orange"
                      />
                      <ToolTipText
                        backgroundColor="orange"
                        width="60px"
                        ml="-22px"
                        positionLeft="5px"
                      >
                        {recipes.nutrition?.nutrients[1].name}
                      </ToolTipText>
                    </ToolTipBox>
                    <RecipeDetailText>
                      {Math.floor(recipes.nutrition?.nutrients[1].amount)}g
                    </RecipeDetailText>
                  </RecipeDetailGroupWrapper>
                </RecipeDetailsWrapper>
              </RecipeDetailsContainer>
            </RecipeCard>
          ))}
        </RecipeContainer>
      </HomeContainer>
      </motion.div>
      </div>
  );
};

export default Home;
