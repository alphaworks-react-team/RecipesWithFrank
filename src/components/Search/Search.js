import React, { useState } from "react";

const Search = ({ getRecipeBySearch }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeBySearch(search);
  };

  return (
    <div>
      <input onChange={onChange} placeholder="Search Frank" />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
};

export default Search;
