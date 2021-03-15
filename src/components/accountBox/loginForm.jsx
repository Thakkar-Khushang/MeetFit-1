import React, { useContext } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer action="http://localhost:8080/api/verify" method="post">
        <Input type="text" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <MutedLink href="#">Forgot Password?</MutedLink>
        <Marginer direction="vertical" margin="3em" />
        <SubmitButton type="submit">Login</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
