import styled, {css} from 'styled-components';

export const SignupContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1b8541;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 700px;
  }
`;

export const FormGroup = styled.div`
	color: white;
    display: block;
	width: 400px;
	margin: 20px auto;
  
  @media screen and (max-width: 480px) {   
    width: 350px;
  }
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: white;
  font-size: 1.1rem;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: green;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const textInput = styled.textarea`
	width: 100%;
`;

export const StyledTextarea = 
styled.textarea`
    resize: none;
    width: 100%;
    height: 75px;
    overflow: auto;
    outline: none;
    border: none;
    background: papayawhip;
  `; 

export const Message = styled.label`
	margin-bottom: 0.5em;
  font-size: 14px;
	color: green;
    display: block;
`;

export const FormButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 5px solid black;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${props => props.primary && css`
    background: black;
    color: white;
  `}
`;

export const ContactH1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;