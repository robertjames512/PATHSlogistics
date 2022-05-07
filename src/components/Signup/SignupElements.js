import styled, {css} from 'styled-components';

export const SignupContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const FormGroup = styled.div`
	color: green;
    display: block;
	width: 400px;
	margin: 20px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: green;
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
	color: green;
    display: block;
`;

export const FormButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 5px solid green;
  color: green;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${props => props.primary && css`
    background: green;
    color: white;
  `}
`;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;