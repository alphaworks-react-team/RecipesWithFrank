import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const SearchContainer = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem;
`;

const SearchInput = styled.input`
  box-shadow: none;
  height: 48px;
  border-radius: 100px;
  border: none;
  font-size: 16px;
  color: #6f737a;
  width: 100%;
  padding-left: 3rem;
  outline: none;
`;

const SearchButton = styled.button`
  text-align: center;
  border: none;
  box-shadow: none;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 100px;
  background: #3177bb;
  height: 50px;
  margin-left: -50px;
  text-align: center;
  width: 200px;
  :hover {
    background: #275f95;
    cursor: pointer;
  }
`;

const Search = ({ getRecipeBySearch, setRecipes, setTitle }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await getRecipeBySearch(search);
      setRecipes(result);
      setTitle(search);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SearchContainer onSubmit={onSubmit}>
      <AiOutlineSearch
        style={{ marginLeft: "1rem", position: "absolute" }}
        color="gray"
        size="1.5em"
      />
      <SearchInput onChange={onChange} placeholder="Search recipe..." />
      <SearchButton onClick={onSubmit}>Search</SearchButton>
    </SearchContainer>
  );
};

export default Search;
