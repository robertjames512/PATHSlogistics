import React from 'react';
import { FormGroup, Label, Input, StyledTextarea, SignupContainer, FormButton, ContactH1} from "./SignupElements";

const handleSubmit = e => {
    e.preventDefault();
    console.log("Succeeded!!!")        
    var name = document.getElementById("name").value
    // var email = document.getElementById("email").value
    // var phone = document.getElementById("phone").value
    // var state = document.getElementById("state").value
    // var city = document.getElementById("city").value
    // var equipment = document.getElementById("equipment").value
    var subject = document.getElementById("subject").value
    var message = name + " has an inquiry: \n" + document.getElementById("message").value

    console.log(document.getElementById("name").value);
    window.open('mailto:Support@pathslogistics.com?subject=' + subject + '&body=' + message );

  };

const Signup = () => {
  return (
    <SignupContainer id='contact'>
    <ContactH1>Contact Us at Support@pathslogistics.com</ContactH1>
    <FormGroup>
      <Label htmlFor="name">Name</Label>
      <Input id="name" />
      <Label>Email Address</Label>
      <Input id="email"/>
      <Label>Phone</Label>
      <Input id="phone"/>
      {/* <Label>State</Label>
      <Input id="state"/>
      <Label>City</Label>
      <Input id="city"/>
      <Label>Equipment</Label>
      <select id="equipment">
        <optgroup label="Trucks">
        <option value="18wheeler">18 wheeler</option>
        <option value="flatBed">Flat Bed</option>
        <option value="boxTruck">Box Truck</option>
        <option value="other_indoor">Other</option>
        </optgroup>
        <optgroup label="Vans">
        <option value="53DryVan">53' Dry Van</option>
        <option value="53Reefer">53' Reefer</option>
        </optgroup>
        </select>       */}
    </FormGroup>
    <FormGroup>
    <Label>Subject</Label>
      <Input id="subject"/>
    <Label>Message:</Label>
    <StyledTextarea id="message" placeholder="Please enter your inquiry here"></StyledTextarea>
    </FormGroup>
    <FormButton onClick={handleSubmit} primary>Send Message</FormButton>
    </SignupContainer>
        
  );
};

export default Signup;
