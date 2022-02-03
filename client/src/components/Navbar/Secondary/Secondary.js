import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuToggleBlack } from "../MenuToggleBlack";

const StyledLogoLink = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => (props.nav ? "black" : "white")};
  margin: 0 10px;
  padding: 5px 0;
  text-decoration: none;
  &:hover {
    border-bottom: ${(props) =>
      props.nav ? "2px solid rgb(25, 200, 140)" : "2px solid white"};
  }
`;

const StyleButtonLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.nav ? "white" : "rgb(25, 200, 140)")};
  font-size: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.div`
  width: 120px;
  height: 35px;
  padding: 5px 12px;
  margin-bottom: 7px;
  border: none;
  border-radius: 50px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.nav ? "rgb(25, 200, 140)" : "white")};
  &:hover {
    color: rgb(28, 166, 118);
    background-color: ${(props) => (props.nav ? "rgb(28,166,118)" : "white")};
    transition-delay: 100ms;
    transition: transform 100ms ease-in-out 25ms;
    transform: translateY(3px);
  }
`;

// const Logo = styled.div`
//   // padding-left: 50px;
// `;

const LinkWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: auto;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: absolute;
  top: 92px;
  left: 0;
  border-radius: 20px;
  padding: 5px;
`;

const LinkItems = styled.li`
  height: 100%;
  width: 100%;
  padding: 0 0.1em 1em;
  color: #222;
  font-weight: 500;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid yellow;
  }
`;
const Secondary = ({ nav }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuToggleBlack isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <LinkWrapper>
          <LinkItems nav={nav} to="/login">
            About
          </LinkItems>
          <Button nav={nav}>
            <StyleButtonLink nav={nav} to="/login">
              Login Here
            </StyleButtonLink>
          </Button>
          <Button nav={nav}>
            <StyleButtonLink nav={nav} to="/signup">
              Join For Free
            </StyleButtonLink>
          </Button>
        </LinkWrapper>
      )}
    </>
  );
};

export default Secondary;
