import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div``;

const DetailsJumbotron = styled.div`
  width: 100%;
  height: 304px;
  background: #1ca677;
`;

const CookingTime = styled.ul`
  display: flex;
`;

const CookingTimeItem = styled.li``;

const TimeLabel = styled.div``;

const TimeValue = styled.div``;

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
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  display: flex;
`;

const RecipeDetails = ({ recipeDetails }) => {
  return (
    <DetailsContainer>
      <DetailsJumbotron>{console.log(recipeDetails)}</DetailsJumbotron>
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
      </CookingTime>
    </DetailsContainer>
  );
};

export default RecipeDetails;
