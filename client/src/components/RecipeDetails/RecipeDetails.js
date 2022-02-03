import React from "react";
import styled from "styled-components";

const DetailsContainer = styled.div``;

const DetailsJumbotron = styled.div`
  width: 100%;
  height: 304px;
  background: #1ca677;
`;

const CookingTime = styled.ul`
  display: flex;

  padding-inline-start: 40px;
`;

const CookingTimeItem = styled.li`
  list-style-type: none;
  /* color: white; */
  margin-right: 48px;
`;

const TimeLabel = styled.div``;

const TimeValue = styled.div``;

const FoodImage = styled.img`
  display: flex;
  margin-top: -88px;
  height: 800px;
  width: 500px;
  border-radius: 15px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const RecipeHeaderContent = styled.div`
  display: flex;
  height: 580px;
  width: 800px;
`;

const IngredientContainer = styled.div`
  width: 100%;
  height: 800px;
  margin-left: 200px;
  margin-right: 200px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: white;
`;

const IngredientTitle = styled.div``;

const IngredientCard = styled.div`
  width: 100%;
  background-color: lightblue;
`;

const IngredientImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  display: flex;
`;

const RecipeDetails = ({ recipeDetails }) => {
  return (
    <>
      <DetailsJumbotron>{console.log(recipeDetails)}</DetailsJumbotron>
      <DetailsContainer>
        <RecipeHeaderContent>
          <CookingTime>
            <CookingTimeItem>
              <TimeLabel>Prep Time</TimeLabel>
              <TimeValue>{recipeDetails.preparationMinutes}min</TimeValue>
            </CookingTimeItem>
            <CookingTimeItem>
              <TimeLabel>Cook Time</TimeLabel>
              <TimeValue>{recipeDetails.cookingMinutes}min</TimeValue>
            </CookingTimeItem>
            <CookingTimeItem>
              <TimeLabel>Ready Time</TimeLabel>
              <TimeValue>{recipeDetails.readyInMinutes}min</TimeValue>
            </CookingTimeItem>
          </CookingTime>
        </RecipeHeaderContent>
        <FoodImage src={recipeDetails.image}></FoodImage>
      </DetailsContainer>

      <IngredientContainer>
        <IngredientTitle></IngredientTitle>
        {recipeDetails.extendedIngredients.map((ingredients, index) => (
          <IngredientCard key={index}>
            <IngredientImage
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredients.image}`}
            />
          </IngredientCard>
        ))}
      </IngredientContainer>
    </>
  );
};

export default RecipeDetails;
