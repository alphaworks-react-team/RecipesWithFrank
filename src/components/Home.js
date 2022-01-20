import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import Search from "./Search/Search";
import styled from "styled-components";
import { getRecipeBySearch } from "../utils";

const JumbotronText = styled.h1`
  padding: 0;
`;

const Home = () => {
  const [recipes, setRecipes] = useState();
  return (
    <div>
      <Jumbotron>
        <JumbotronText>Recipes With Frank</JumbotronText>
        <Search getRecipeBySearch={getRecipeBySearch} setRecipes={setRecipes} />
      </Jumbotron>
      {recipes?.map((recipes, index) => (
        <div key={index}>{recipes.title}</div>
      ))}
    </div>
  );
};

export default Home;
