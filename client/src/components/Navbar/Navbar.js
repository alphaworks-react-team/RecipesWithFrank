import React, { useState } from "react";
import styled from "styled-components";

const stylingObject = {
  navBarWhite: {
    width: "100%",
    position: "fixed",
    height: "50px",
    borderRadius: "0 0 35px 35px",
    boxShadow: "0 10px 35px rgb(0 30 47 / 10%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
    backgroundColor: "white",
  },
  navBarTransparent: {
    width: "100%",
    // position: "fixed",
    height: "80px",
    borderRadius: "0 0 35px 35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
    backgroundColor: "transparent",
  },
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
    transition-delay: 100ms;
    transition: transform 100ms ease-in-out 25ms;
    transform: translateY(3px);
  }
`;

const A = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: black;
  margin: 0 10px;
  padding: 10px 0;
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
        navColor ? stylingObject.navBarWhite : stylingObject.navBarTransparent
      }
    >
      {/* Logo */}
      <div style={{ width: "226px", paddingLeft: "80px" }}>
        <A
          navColor={navColor}
          style={{ fontSize: "25px", fontWeight: "700", color: "black" }}
          href="/"
        >
          Logo
        </A>
      </div>
      {/* Nav Items */}
      <div style={{ display: "flex" }}>
        <div style={{ justifyContent: "center" }}>
          <A navColor={navColor} href="/">
            Nav Item
          </A>
        </div>
        <div style={{ justifyContent: "center" }}>
          <A navColor={navColor} href="/">
            Nav Item
          </A>
        </div>
        <div style={{ justifyContent: "center" }}>
          <A navColor={navColor} href="/">
            Nav Item
          </A>
        </div>
        <div style={{ justifyContent: "center" }}>
          <A navColor={navColor} href="/">
            Nav Item
          </A>
        </div>
        <div style={{ justifyContent: "center" }}>
          <A navColor={navColor} href="/">
            Nav Item
          </A>
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", paddingRight: "80px" }}
      >
        {/* Login and Sign up button */}
        <div>
          <A navColor={navColor} style={{ marginRight: "30px" }} href="/">
            Login In
          </A>
        </div>
        <Button navColor={navColor}>
          <ButtonATag navColor={navColor} href="/">
            Join For Free
          </ButtonATag>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
