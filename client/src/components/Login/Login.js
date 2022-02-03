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

const Login = ({ getUser, getPassword, authUser }) => {
  const navigate = useNavigate();

  return (
    <>
    
      <FormContainer>
      <LogoContainer onClick={() => {navigate("/")}}></LogoContainer>
        <Header>Welcome To Frank's Recipies!</Header>
        <Paragraph>Please sign in to get started</Paragraph>
        <Form onSubmit={authUser}>
          <Lable>
            {/*Username:*/}
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              // value={user}
              onChange={getUser}
            />
          </Lable>
          <Lable>
            {/*Password:*/}
            <Input
              placeholder="Password"
              id="password"
              type="password"
              name="password"
              // value={password}
              onChange={getPassword}
            />
          </Lable>
          <Button type="submit" value="Submit">
            Continue
          </Button>
        </Form>
        <Paragraph>Don't have an account with us?</Paragraph>
        <Button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </Button>
        <Paragraph>
          This site is protected by FrankProtectsINC and their privacy policy
          and terms apply.
        </Paragraph>
      </FormContainer>
    </>
  );
};

export default Login;
