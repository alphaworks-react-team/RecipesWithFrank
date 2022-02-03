import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  padding: 10px 12px;
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

const Logo = styled.div`
  width: 226px;
  padding-left: 80px;
`;
const DisplayFlex = styled.div`
  display: flex;
`;
const JustifyCenter = styled.div`
  justify-content: center;
`;


const Primary = ({ nav }) => {

  return (
    <>
      {/* Logo */}
      <Logo>
        <StyledLogoLink nav={nav} to="/">
          Logo
        </StyledLogoLink>
      </Logo>
      {/* Nav Links */}
      <DisplayFlex>
        <JustifyCenter>
          <StyledLink nav={nav} to="/">
            NAV
          </StyledLink>
          <StyledLink nav={nav} to="/">
            NAV
          </StyledLink>
          <StyledLink nav={nav} to="/">
            NAV
          </StyledLink>
          <StyledLink nav={nav} to="/">
            NAV
          </StyledLink>
          <StyledLink nav={nav} to="/">
            NAV
          </StyledLink>
        </JustifyCenter>
      </DisplayFlex>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingRight: "80px",
        }}
      >
        {/* Login && Sign Up Links */}
        <div>

          <StyledLink style={{ marginRight: "20px" }} nav={nav} to="/login">
            Login In
          </StyledLink>
        </div>
        <Button nav={nav}>
          <StyleButtonLink nav={nav} to="/">

            Join For Free
          </StyleButtonLink>
        </Button>
      </div>
    </>
  );
};

export default Primary;
