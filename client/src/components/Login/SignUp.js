import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LogoContainer,
  FormContainer,
  Header,
  Form,
  Paragraph,
  Button,
  Lable,
  Input,
} from "./LogsStyles";
const SignUp = ({ signUp, user, password, getPassword, getUser }) => {
  const navigate = useNavigate();

  return (
    <>
      <FormContainer>
        <LogoContainer onClick={() => {navigate("/")}}></LogoContainer>
        <Header>Read To Spice Up Your Home Cooked Meals? </Header>
        <Paragraph>
          Frank is a world renowned chef, trained by Gordan Ramsey himself.
          Frank has perfected many dishes, while creating his own one of a kind
          dishes, winning awards for <i>Most Creative Dish</i>, and{" "}
          <i>Best Glizzy Award</i>. Sign Up now and you too, will create the
          best of the best dish your pallet has never before tasted!{" "}
        </Paragraph>

        <Form onSubmit={(e) => signUp(e, user, password)}>
          <Lable>
            <Input
              id="user"
              type="text"
              name="name"
              onChange={getUser}
              placeholder="Username"
            />
          </Lable>
          <Lable>
            <Input
              id="password"
              type="password"
              name="password"
              onChange={getPassword}
              placeholder="Password"
            />
          </Lable>

          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Form>
        <Paragraph>Already a member with us?</Paragraph>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
         Log In
        </Button>
      </FormContainer>
    </>
  );
};

export default SignUp;
