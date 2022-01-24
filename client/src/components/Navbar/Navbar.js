import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const navBarStyling = {
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
};

const linkStyling = {
  textDecoration: "none",
};

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

const A = styled.a`
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
`;
const ButtonATag = styled.a`
  text-decoration: none;
  color: ${(props) => (props.navColor ? "white" : "rgb(25, 200, 140)")};
  font-size: 16px;
`;

const NavBar = () => {
  // State to handle conditional render && event handling
  const [navColor, setNavColor] = useState(false);

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
    <div
      style={
        navColor ? navBarStyling.navBarWhite : navBarStyling.navBarTransparent
      }
    >
      {/* Logo */}

      <div style={{ width: "226px", paddingLeft: "80px" }}>
        <Link style={linkStyling} to="/">
          <A
            navColor={navColor}
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            Logo
          </A>
        </Link>
      </div>
      {/* Nav Items */}
      <div style={{ display: "flex" }}>
        <div style={{ justifyContent: "center" }}>
          <Link style={linkStyling} to="/">
            <A navColor={navColor}>Nav Item</A>
          </Link>
          <Link style={linkStyling} to="/">
            <A navColor={navColor}>Nav Item</A>
          </Link>
          <Link style={linkStyling} to="/">
            <A navColor={navColor}>Nav Item</A>
          </Link>
          <Link style={linkStyling} to="/">
            <A navColor={navColor}>Nav Item</A>
          </Link>
          <Link style={linkStyling} to="/">
            <A navColor={navColor}>Nav Item</A>
          </Link>
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", paddingRight: "80px" }}
      >
        {/* Login and Sign up button */}
        <div>
          <Link style={linkStyling} to="/login">
            <A navColor={navColor} style={{ marginRight: "30px" }}>
              Login In
            </A>
          </Link>
        </div>
        <Button navColor={navColor}>
          <Link style={linkStyling} to="/">
            <ButtonATag navColor={navColor} to="signup">Join For Free</ButtonATag>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
