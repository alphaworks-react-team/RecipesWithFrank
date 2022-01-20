import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import Search from "./Search/Search";
import styled from "styled-components";
import { getRecipeBySearch } from "../utils";

const JumbotronText = styled.h1`
  padding: 0;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RecipeContainer = styled.div`
  height: 2000px;
  width: 1200px;
  background-color: beige;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const RecipeCard = styled.div`
  background-color: pink;
  border-radius: 10px;
  display: inline-block;
  overflow: hidden;
`;

const RecipeTitle = styled.h3`
  margin: 10px 0;
  padding-left: 10px;
`;

const ImageContainer = styled.div`
  display: block;
  transition: transform 0.4s;
`;

const RecipeImage = styled.div`
  width: 500px;
  height: 300px;
  background-color: pink;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 12px 12px 0 0;
  &:hover {
    transform: scale(1.02);
    transform-origin: 50% 50%;
  }
`;

const Home = () => {
  const [recipes, setRecipes] = useState();
  return (
    <div>
      <Jumbotron>
        <JumbotronText>Recipes With Frank</JumbotronText>
        <Search getRecipeBySearch={getRecipeBySearch} setRecipes={setRecipes} />
      </Jumbotron>
      <HomeContainer>
        <RecipeContainer>
          {recipes?.map((recipes, index) => (
            <RecipeCard key={index}>
              <ImageContainer>
                <RecipeImage src={recipes?.image} />
              </ImageContainer>
              <RecipeTitle>{recipes.title}</RecipeTitle>
            </RecipeCard>
          ))}
        </RecipeContainer>
      </HomeContainer>
    </div>
  );
};

export default Home;
