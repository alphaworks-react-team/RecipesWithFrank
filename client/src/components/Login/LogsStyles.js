import styled from "styled-components";
import LetsEat from "../../assets/LetsEat.png";

export const LogoContainer = styled.div`
  height: 102px;
  background-image: url(${LetsEat});
  background-size: cover;
  color: white;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 22px;
  background-position: center;
  border-radius: 8rem;
  width: 17rem;
`;

export const FormContainer = styled.div`
  margin: 3em 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 38%;
  margin-left: auto;
  margin-right: auto;
  /* background-color: #e1c699; */
  background-color: #ffff;
  padding: 1rem;
  border: 2px solid #d29685;
  border-radius: 10px;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  box-shadow: none;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 100px;
  background: #d29685;
  height: 50px;
  text-align: center;
  width: 200px;
`;
export const Lable = styled.label`
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid #d29685;
  height: 3rem;
  width: 18.5rem;
  text-align: center;
  font-size: 25px;
  font-weight: 200;
  letter-spacing: 5px;

  &:hover {
    box-shadow: 0 0 25px rgba(33, 33, 33, 0.2);
  }
`;

export const Header = styled.h1`
  font-size: xx-large;
  font-weight: 500;
`;

export const Paragraph = styled.p``;
