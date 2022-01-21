import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import Search from "./Search/Search";
import styled from "styled-components";
import { getRecipeBySearch } from "../utils";
import { AiOutlineClockCircle, AiOutlineFire } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

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
  padding: 20px;
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
  color: grey;
`;

const RecipeDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecipeDetailGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 220px;
`;

const RecipeDetailText = styled.p`
  font-size: 20px;
  margin: 0 5px;
  color: grey;
`;

const ToolTipText = styled.span`
  visibility: hidden;
  position: absolute;
  z-index: 1;
  width: ${(props) => props.width};
  bottom: 27px;
  left: ${(props) => props.positionLeft};
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: 5px;
  text-align: center;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 1.5s;

  ::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: ${(props) => props.ml};
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => props.backgroundColor} transparent transparent
      transparent;
  }
`;

const ToolTipBox = styled.div`
  position: relative;
  :hover {
    ${ToolTipText} {
      visibility: visible;
      opacity: 1;
    }
  }
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
                      {Math.floor(recipes.nutrition.nutrients[0].amount)}{" "}
                      {recipes.nutrition.nutrients[0].name}
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
                        {recipes.nutrition.nutrients[8].name}
                      </ToolTipText>
                    </ToolTipBox>
                    <RecipeDetailText>
                      {Math.floor(recipes.nutrition.nutrients[8].amount)}g
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
                        ml="-23px"
                        positionLeft="5px"
                      >
                        {recipes.nutrition.nutrients[1].name}
                      </ToolTipText>
                    </ToolTipBox>
                    <RecipeDetailText>
                      {Math.floor(recipes.nutrition.nutrients[1].amount)}g
                    </RecipeDetailText>
                  </RecipeDetailGroupWrapper>
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
