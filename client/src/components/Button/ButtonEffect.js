import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  text-decoration: none;
  border: 2px solid rgb(25, 200, 140);
  color: rgb(25, 200, 140);
  padding: 10px 20px;
  border-radius: 25px;
  transition: all 1s;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(25, 200, 140);
    transition: all 1s;
    z-index: -1;
    transform: translateX(-101%);
  }
  &:hover::before {
    transform: translateX(0);
  }
  &:hover {
    color: #fff;
  }
`;

const ButtonEffect = () => {
  return <Button>HELLO</Button>;
};

export default ButtonEffect;
