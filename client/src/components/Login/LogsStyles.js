import styled from "styled-components";

/*need to work on responsiveness, better colors, need to insert logo*/

export const FormContainer = styled.div`
  margin: 7em 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border: 2px solid lightblue;
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
  background: #3177bb;
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
  border: 2px solid #3177bb;
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
