import React from "react";
import styled from "styled-components";
import { BsClockHistory } from "react-icons/bs";

const DetailsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
 
  `;

const DetailsJumbotron = styled.div`
  width: 100%;
  height: 202px;
  background: #1ca677;
  margin-top: -20px;
  display: flex;
  justify-content: center;
  `;

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 100px;
  `;

const CookingTime = styled.ul`
  width: 65%;
  display: flex;
  align-items: flex-end;
  height: 176px;
  `;

const CookingTimeItem = styled.li`
  list-style-type: none;
  padding: 0px 15px;
  `;

const TimeLabel = styled.div`
  margin-left: 35px;
  margin-bottom: 10px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  `;

const TimeValue = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  `;

const FoodImage = styled.div`
  display: flex;
  margin-top: 139px;
  height: auto;
  width: 38rem;
  border-radius: 12px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: containt;
  background-repeat: no-repeat;
  `;

const RecipeHeaderContent = styled.div`
  display: flex;
  flex-flow: column;
  height: 352px;
  width: 398px;
  margin-top: 25px;
  `;

const RecipeTitle = styled.div`
  width: 535px;
  font-size: 50px;
  font-weight: bold;
  `;

const RecipeSummary = styled.div`
  width: 387px;
  font-size: 14px;
  overflow: auto;
  word-spacing: 7px;

  `;

const IngredientContainer = styled.div`
  width: 60%;
  display: flex;
  flex-flow: column;
  /* justify-content: center; */
`;

const IngredientCard = styled.div`
  height: 100px;
  background-color: white;
  margin: 5px 0px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-out 3ms ;
  &:hover{
    transform:scale(1.1) ;
    border-bottom: 2px solid gold;

  }
  `;

const IngredientImage = styled.div`
  width: 75px;
  height: 75px;
  margin-left: 4px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  display: flex;
  `;

const TitleCard = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;

 
  `;

const IngredientName = styled.div`
  margin-left: 50px;
`;

const IngredientDescription = styled.div`
    padding-right: 10px;

  color: #6f737a;
  `;

const IngredientTitleContainer = styled.div`

  margin-top: 58px;
`;

const IngredientTitle = styled.div`
  font-size: 40px;
  font-weight: bold;

`;



const StepsCard = styled.div`
`;

const StepsDescription = styled.div`

`;

const RecipeDetails = ({ recipeDetails }) => {
  return (
    <>
      <DetailsJumbotron>
        {console.log(recipeDetails)}
        <CookingTime>
          <CookingTimeItem>
            <TimeLabel>Prep Time</TimeLabel>
            <TimeValue>
              <BsClockHistory />
              &nbsp;{recipeDetails.preparationMinutes}&nbsp;min
            </TimeValue>
          </CookingTimeItem>
          <CookingTimeItem>
            <TimeLabel>Cook Time</TimeLabel>
            <TimeValue>
              <BsClockHistory />
              &nbsp;{recipeDetails.cookingMinutes}&nbsp;min
            </TimeValue>
          </CookingTimeItem>
          <CookingTimeItem>
            <TimeLabel>Ready Time</TimeLabel>
            <TimeValue>
              <BsClockHistory />
              &nbsp;{recipeDetails.readyInMinutes}&nbsp;min
            </TimeValue>
          </CookingTimeItem>
        </CookingTime>
      </DetailsJumbotron>

      <BodyContainer>
        <DetailsContainer>
          <RecipeHeaderContent>
            <RecipeTitle>{recipeDetails.title}</RecipeTitle>
            <RecipeSummary>
              {recipeDetails.summary.replace(/(<([^>]+)>)/gi, "")}
            </RecipeSummary>
          </RecipeHeaderContent>
          <FoodImage src={recipeDetails.image}></FoodImage>
        </DetailsContainer>
        <IngredientContainer>
          <IngredientTitleContainer>
            <IngredientTitle>Ingredients</IngredientTitle>
          </IngredientTitleContainer>
          {recipeDetails.extendedIngredients.map((ingredients, index) => (
            <IngredientCard key={index}>
              <IngredientImage
                src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredients.image}`}
              />
              <TitleCard>
                <IngredientName>
                  {ingredients.name.replace(/(?:^|\s)\S/g, function (a) {
                    return a.toUpperCase();
                  })}
                </IngredientName>
                <IngredientDescription>
                  {ingredients.amount}
                  {ingredients.unit}
                </IngredientDescription>
              </TitleCard>
            </IngredientCard>
          ))}
        </IngredientContainer>
        <IngredientContainer>
          <IngredientTitleContainer>
            <IngredientTitle>Recipe Steps</IngredientTitle>
          </IngredientTitleContainer>
          {recipeDetails.analyzedInstructions[0].steps.map((steps, index) => (
            <div key={index}>
              <StepsCard>Step {steps.number}</StepsCard>
              <StepsDescription>{steps.step}</StepsDescription>
              {/* <IngredientImage
                src={`https://spoonacular.com/cdn/step_100x100/${steps.image}`}
              /> */}
            </div>
          ))}
        </IngredientContainer>
      </BodyContainer>
    </>
  );
};

export default RecipeDetails;
