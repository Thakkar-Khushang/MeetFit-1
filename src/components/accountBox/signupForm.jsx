import { Select } from "@material-ui/core";
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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer action="https://whatevermeetfit.azurewebsites.net/api/user" method="post">
        <Input type="text" name="name" id="name" placeholder="Full Name" />
        <Input type="text" name="email" id="email" placeholder="Email" />
        <Input type="text" name="city" id="city" placeholder="City" />
        <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
        <Input name="password" id="password" type="password" placeholder="Password" />
        <Input name="confPassword" id="confPassword" type="password" placeholder="Confirm Password" />
        <Select name="activity" id="activity" native defaultValue='none'>
          <option value="none" disabled>Activites</option>
          <option value="Trek">Trek</option>
          <option value="Circuit Training">Circuit Training</option>
          <option value="Meditation">Meditation</option>
          <option value="Cardio">Cardio</option>
          <option value="Walk">Walk</option>
          <option value="Yoga">Yoga</option>
          <option value="Swimming">Swimming</option>
        </Select>
        <Marginer direction="vertical" margin="1em" />
          <SubmitButton type="submit">Signup</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
