import React from "react";
import styled from "styled-components";
import Search from "./Search/Search";

const JumbotronContainer = styled.div`
  height: 400px;
  background-color: black;
  color: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Jumbotron = ({ children }) => {
  return <JumbotronContainer>{children}</JumbotronContainer>;
};

export default Jumbotron;
