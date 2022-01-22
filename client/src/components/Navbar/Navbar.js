import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import useWindowSize from "../../utils/HelperFunc/WindowSize.js";

const navBarStyling = {
  navBarTransparent: {
    zIndex: "999",
    width: "100%",
    height: "80px",
    position: "absolute",
    borderRadius: "0 0 35px 35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
    backgroundColor: "transparent",
  },
  navBarWhite: {
    zIndex: "999",
    width: "100%",
    height: "50px",
    position: "fixed",
    borderRadius: "0 0 35px 35px",
    boxShadow: "0 10px 35px rgb(0 30 47 / 10%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
    backgroundColor: "white",
  },
};

const StyledLogoLink = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => (props.navColor ? "black" : "white")};
  margin: 0 10px;
  padding: 5px 0;
  text-decoration: none;
  &:hover {
    border-bottom: ${(props) =>
      props.navColor ? "2px solid rgb(25, 200, 140)" : "2px solid white"};
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.navColor ? "black" : "white")};
  margin: 0 10px;
  padding: 5px 0;
  text-decoration: none;
  &:hover {
    border-bottom: ${(props) =>
      props.navColor ? "2px solid rgb(25, 200, 140)" : "2px solid white"};
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyleButtonLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.navColor ? "white" : "rgb(25, 200, 140)")};
  font-size: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.div`
  width: 120px;
  height: 35px;
  padding: 10px 12px;
  border: none;
  border-radius: 50px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.navColor ? "rgb(25, 200, 140)" : "white"};
  &:hover {
    color: rgb(28, 166, 118);
    background-color: ${(props) =>
      props.navColor ? "rgb(28,166,118)" : "white"};
    transition-delay: 100ms;
    transition: transform 100ms ease-in-out 25ms;
    transform: translateY(3px);
  }
`;

const NavBar = () => {
  // State to handle conditional render && event handling
  const [navColor, setNavColor] = useState(false);

  const windowSize = useWindowSize();

  // On scroll event listener helper function
  const changeBackgroundColor = () => {
    if (window.scrollY >= 200) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", changeBackgroundColor);

  return (
    <>
      {windowSize >= 1200 ? (
        <div
          style={
            navColor
              ? navBarStyling.navBarWhite
              : navBarStyling.navBarTransparent
          }
        >
          {/* Logo */}
          <div style={{ width: "226px", paddingLeft: "80px" }}>
            <StyledLogoLink navColor={navColor} to="/">
              Logo
            </StyledLogoLink>
          </div>
          {/* Nav Items */}
          <div style={{ display: "flex" }}>
            <div style={{ justifyContent: "center" }}>
              <StyledLink navColor={navColor} to="/">
                NAV
              </StyledLink>
              <StyledLink navColor={navColor} to="/">
                NAV
              </StyledLink>
              <StyledLink navColor={navColor} to="/">
                NAV
              </StyledLink>
              <StyledLink navColor={navColor} to="/">
                NAV
              </StyledLink>
              <StyledLink navColor={navColor} to="/">
                NAV
              </StyledLink>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "80px",
            }}
          >
            {/* Login and Sign up button */}
            <div>
              <StyledLink
                style={{ marginRight: "20px" }}
                navColor={navColor}
                to="/login"
              >
                Login In
              </StyledLink>
            </div>
            <Button navColor={navColor}>
              <StyleButtonLink navColor={navColor} to="/">
                Join For Free
              </StyleButtonLink>
            </Button>
          </div>
        </div>
      ) : (
        <div
          style={
            navColor
              ? navBarStyling.navBarWhite
              : navBarStyling.navBarTransparent
          }
        >
          hello
        </div>
      )}
    </>
  );
};

export default NavBar;
