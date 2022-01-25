import React from 'react';
import { BsTrophy } from 'react-icons/bs';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgb(25, 200, 140);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.div`
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const BodyText = styled.div`
color: white;
margin-bottom: 40px;
`

const Button = styled.div`
  width: 200px;
  height: 35px;
  padding: 10px 12px;
  border: none;
  border-radius: 50px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  background-color: rgb(249, 70, 66);
  &:hover {
    background-color: rgb(255, 53, 34);
    transition-delay: 100ms;
    transition: transform 100ms ease-in-out 25ms;
    transform: translateY(3px);
  }
`;

const ButtonATag = styled.a`
  text-decoration: none;
  color: white;
  font-size: 20px;
`;

const FooterPremium = () => {
  return (
    <div>
      <FooterContainer>
      <MainText>Looking for Frank?</MainText>
      <BodyText>unlock all of Frank's cutting-edge features with a Premium Membership.</BodyText>
        <Button>
          <ButtonATag>
            <BsTrophy />
            &nbsp;Get Frank
          </ButtonATag>
        </Button>
      </FooterContainer>
    </div>
  );
};

export default FooterPremium;
