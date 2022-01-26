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
`;

const CookingTimeItem = styled.li``;

const TimeLabel = styled.div``;

const TimeValue = styled.div``;

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
      </CookingTime>
    </DetailsContainer>
  );
};

export default RecipeDetails;
