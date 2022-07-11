import React from "react";
import { BiCopyright } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: rgb(252, 252, 164);
`;

const SocialMedia = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyWrightText = styled.div`
  width: 100%;
  height: 60px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  margin: 15px;
  border-radius: 50px;
  background: #ffffff;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  &:hover {
    transition-delay: 100ms;
    transition: transform 100ms ease-in-out 25ms;
    transform: translateY(3px);
  }
`;

const ButtonATagBlue = styled.a`
  text-decoration: none;
  padding: 10px;
  color: grey;
  font-size: 20px;
  &:hover {
    color: darkblue;
  }
`;

const ButtonATagOrange = styled.a`
  text-decoration: none;
  padding: 10px;
  color: grey;
  font-size: 20px;
  &:hover {
    color: orange;
  }
`;

const ButtonATagRed = styled.a`
  text-decoration: none;
  padding: 10px;
  color: grey;
  font-size: 20px;
  &:hover {
    color: red;
  }
`;

const Footer = () => {
  return (
    <Container>

      <SocialMedia>
        <Button>
          <ButtonATagBlue>
            <FaFacebookF />
          </ButtonATagBlue>
        </Button>
        <Button>
          <ButtonATagOrange>
            <FaInstagram />
          </ButtonATagOrange>
        </Button>
        <Button>
          <ButtonATagRed>
            <FaPinterest />
          </ButtonATagRed>
        </Button>
        <Button>
          <ButtonATagRed>
            <FaYoutube />
          </ButtonATagRed>
        </Button>
      </SocialMedia>
      <CopyWrightText>
        <BiCopyright />
        2021-2022 Frank Apps LLC. All Rights Reserved.
      </CopyWrightText>
    </Container>
  );
};

export default Footer;
