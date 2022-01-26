import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkContainer1 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const LinkContainer2 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;

const LineContainer = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
`;

const Line = styled.div`
  width: 25%;
  height: 1px;
  background-color: lightgrey;
  opacity: 50%;
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

const ButtonLink = styled.div`
  width: 150px;
  height: 35px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: rgb(25, 200, 140);
    cursor: pointer;
  }
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  margin: 15px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
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
{/*      <LogoContainer>Frank Foto</LogoContainer> */}      <LinkContainer1>
        <ButtonLink>Featured Frank</ButtonLink>
        <ButtonLink>Premium Frank's</ButtonLink>
        <ButtonLink>Frank's Recipes</ButtonLink>
        <ButtonLink>Frank's Cookbook</ButtonLink>
        <ButtonLink>Frank's Articles</ButtonLink>
        <ButtonLink>Frank Foods</ButtonLink>
        <ButtonLink>Frank Support</ButtonLink>
        <ButtonLink>Log In</ButtonLink>
        <ButtonLink>Join For Free</ButtonLink>
      </LinkContainer1>
      <LinkContainer2>
        <ButtonLink>Gift Cards</ButtonLink>
        <ButtonLink>Support Center</ButtonLink>
        <ButtonLink>Forums</ButtonLink>
        <ButtonLink>Terms Of Service</ButtonLink>
        <ButtonLink>Privacy Policy</ButtonLink>
        <ButtonLink>Contact</ButtonLink>
        <ButtonLink>System Status</ButtonLink>
      </LinkContainer2>
      <LineContainer>
        <Line />
      </LineContainer>
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
