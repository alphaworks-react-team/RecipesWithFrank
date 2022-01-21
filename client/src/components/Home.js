import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import Search from "./Search/Search";
import styled from "styled-components";
import { getRecipeBySearch } from "../utils";

const JumbotronText = styled.p`
  font-size: 26px;
  padding: 0;
  position: relative;
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

const RecipeDetailsContainer = styled.div`
  padding: 10px 15px 15px 15px;
  display: flex;
  flex-direction: column;
`;

const RecipeTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`;

const RecipeDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  overflow: hidden;
`;

const RecipeImage = styled.div`
  width: 500px;
  height: 300px;
  background-color: pink;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 12px 12px 0 0;
  transition: all 0.5s;
  position: relative;
  &:hover {
    transform: scale(1.08);
    transform-origin: 50% 50%;
  }
`;

const Home = () => {
  const [recipes, setRecipes] = useState();
  return (
    <div>
      <Jumbotron>
        <JumbotronText>
          Explore over <strong>2</strong> recipes With Frank.
        </JumbotronText>
        <Search getRecipeBySearch={getRecipeBySearch} setRecipes={setRecipes} />
      </Jumbotron>
      <HomeContainer>
        <RecipeContainer>
          {recipes?.map((recipes, index) => (
            <RecipeCard key={index}>
              <ImageContainer>
                <RecipeImage src={recipes?.image} />
              </ImageContainer>
              <RecipeDetailsContainer>
                <RecipeTitle>{recipes.title}</RecipeTitle>
                <RecipeDetailsWrapper>
                  <div>cooktime</div>
                  <div>nutrition</div>
                </RecipeDetailsWrapper>
              </RecipeDetailsContainer>
            </RecipeCard>
          ))}
        </RecipeContainer>
      </HomeContainer>
    </div>
  );
};

export default Home;
