import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { IoCloseSharp } from "react-icons/io5";


export const StyledForm = styled(Form)`
position: relative;
display: flex;
flex-direction: column;
gap: 15px;
max-width: 50%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 15px;
  background-color: #5dd7d2;
  border: 1px solid #0daea7;
  border-radius: 5px;
  box-shadow: gray 1px 1px 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrMessageStyled = styled(ErrorMessage)`
  color: red;
`;

export const StyledField = styled(Field)`
  max-width: 100%;
  height: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 4px;
  margin: 0;
  padding-left: 35px;
`;

export const Button = styled.button`
  width: 120px;
  align-self: center;
  padding: 10px;
  color: white;
  background-color: #4d83c2;
  cursor: pointer;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid rgba(33, 33, 33, 0.2);
`;

export const StyledTitle = styled.h2`
text-align: center;
`
export const CloseButton = styled.button`
position: relative;

color: white;
background-color: #4d83c2;
cursor: pointer;
padding: 5px;
width: 30px;
height: 30px;

border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border: 1px solid rgba(33, 33, 33, 0.2);
`

export const CloseIcon = styled(IoCloseSharp)`
width: 20px;
height: 20px;
position: absolute;
transform: translate(-50%, -50%);
`