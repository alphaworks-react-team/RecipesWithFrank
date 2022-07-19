import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.nav ? "black" : "white")};
  margin: 0 10px;
  padding: 5px 0;
  text-decoration: none;
  &:hover {
    border-bottom: ${(props) =>
      props.nav ? "2px solid rgb(25, 200, 140)" : "2px solid white"};
  }
`;

const Logo = styled.div`
  width: 226px;
  padding-left: 80px;
`;

const Primary = ({ nav }) => {
  return (
    <>
      {/* Logo */}
      <Logo>
        <StyledLogoLink nav={nav} to="/">
          Recipes With Frank
        </StyledLogoLink>
      </Logo>
    </>
  );
};

export default Primary;
