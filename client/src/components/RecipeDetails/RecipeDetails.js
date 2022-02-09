import React from 'react';
import styled from 'styled-components';
import { BsClockHistory } from 'react-icons/bs';

const DetailsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;

const DetailsJumbotron = styled.div`
  width: 100%;
  height: 304px;
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
  width: 64%;
  display: flex;
  align-items: flex-end;
  height: 270px;
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
  margin-top: -88px;
  height: 775px;
  width: 600px;
  border-radius: 15px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const RecipeHeaderContent = styled.div`
  display: flex;
  flex-flow: column;
  height: 580px;
  width: 800px;
  margin-top: 25px;
`;

const RecipeTitle = styled.div`
  width: 535px;
  font-size: 50px;
  font-weight: bold;
`;

const RecipeSummary = styled.div`
  width: 535px;
  font-size: 14px;
`;

const IngredientContainer = styled.div`
  width: 60%;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const IngredientCard = styled.div`
  height: 100px;
  background-color: white;
  margin: 5px 0px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IngredientImage = styled.div`
  width: 75px;
  height: 75px;
  margin-left: 4px;
  background-image: url(${props => props.src});
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
  color: #6f737a;
`;

const IngredientTitleContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IngredientTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Button = styled.div`
  width: 400px;
  height: 30px;
  padding: 10px 12px;
  border: none;
  border-radius: 50px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  background-color: rgb(108, 136, 250);

  &:hover {
    transition-delay: 100ms;
    transition: transform 100ms ease-in-out 25ms;
    transform: translateY(3px);
  }
`;

const ButtonATag = styled.a`
  text-decoration: none;
  color: white;
  font-size: 20px;
`;

const StepsTime = styled.div`
  width: 400px;
  height: 30px;
  padding: 10px 12px;
  border: none;
  border-radius: 50px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  background-color: rgb(108, 136, 250);
`;

const StepsCard = styled.div``;

const StepsDescription = styled.div``;

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
              {recipeDetails.summary.replace(/(<([^>]+)>)/gi, '')}
            </RecipeSummary>
          </RecipeHeaderContent>
          <FoodImage src={recipeDetails.image}></FoodImage>
        </DetailsContainer>
        <IngredientContainer>
          <IngredientTitleContainer>
            <IngredientTitle>Ingredients</IngredientTitle>
            <Button>
              <ButtonATag>Frank's Cell</ButtonATag>
            </Button>
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
            <StepsTime></StepsTime>
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
