import styled from 'styled-components';
import Modal from 'react-modal';
import { Form, Field, ErrorMessage } from 'formik';

export const ModalBox = styled.div`
margin-left: auto;
margin-right: auto;
padding: 20px;
margin-top: 15px;
backgroung-color: #8df2ee;
`

export const StyledModal = styled(Modal)`
width: 500px;

`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  gap: 16px;
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
`;

export const ErrMessageStyled = styled(ErrorMessage)`
  color: red;
`;

export const StyledField = styled(Field)`
  width: 200px;
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