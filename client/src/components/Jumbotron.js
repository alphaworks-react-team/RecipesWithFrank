import React from "react";
import styled from "styled-components";
// import BackgroundImage from "../assets/BackgroundImage.jpeg";

const JumbotronContainer = styled.div`
  height: 400px;
  background-image: black;
  background-size: cover;
  color: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Jumbotron = ({ children }) => {
  return <JumbotronContainer>{children}</JumbotronContainer>;
};

export default Jumbotron;
