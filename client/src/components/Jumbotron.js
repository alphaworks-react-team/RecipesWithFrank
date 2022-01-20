import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/BackgroundImage.jpeg";

const JumbotronContainer = styled.div`
  height: 400px;
  background-image: url(${BackgroundImage});
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Jumbotron = ({ children }) => {
  return <JumbotronContainer>{children}</JumbotronContainer>;
};

export default Jumbotron;
