import React, { useState } from "react";

const Search = ({ getRecipeBySearch, setRecipes }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await getRecipeBySearch(search);
    console.log("search", result);
    setRecipes(result);
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} placeholder="Search Frank" />
      <button onClick={onSubmit}>Search</button>
    </form>
  );
};

export default Search;
