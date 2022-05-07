import React from 'react';
import { FormGroup, Label, Input, textInput, SignupContainer, FormButton} from "./SignupElements";

const Signup = () => {
  return (
    <SignupContainer id='signup'>
        <FormGroup>
      <Label htmlFor="label">Name</Label>
      <Input id="label" />
      <Label>Email Address</Label>
      <Input />
      <Label>Phone</Label>
      <Input />
      <Label>State</Label>
      <Input />
      <Label>City</Label>
      <Input />
    </FormGroup>
    <FormGroup>
    <Label>Subject</Label>
      <Input />
    <Label>Message:</Label>
    <textInput>
    This is simple textarea
    </textInput>
    </FormGroup>
    <FormButton>Send Message</FormButton>
    </SignupContainer>
        
  );
};

export default Signup;
