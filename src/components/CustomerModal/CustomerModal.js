import * as Yup from 'yup';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { Notify } from 'notiflix';
import { Formik } from 'formik';
import {
  Button,
  CloseButton,
  CloseIcon,
  Container,
  ErrMessageStyled,
  Label,
  StyledField,
  StyledForm,
  StyledTitle
} from './CustomerModal.Styled';


const ContactShema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .matches(
      /^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('This is a required field'),
  number: Yup.string()
    .trim()
    .matches(
      /^\+?\d{1,4}?[ .\-s]?(\(\d{1,3}?\))?([ .\-s]?\d{1,4}){1,4}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This is a required field')
    .min(9, 'Please enter at least 9 characters'),
});

Modal.setAppElement('#root');

export const CustomModalForm = ({ isOpen, onClose, userId, customStyles }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, actions) => {
    const newData = {
      id: userId,
      data: values,
    };
    dispatch(updateContact(newData));
    Notify.success(`Contact updated`);
    actions.resetForm({ name: '', number: '' });
    onClose();
  };

  return (
    
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Modal Form"
      >
        <CloseButton onClick={onClose}><CloseIcon /></CloseButton>
        <StyledTitle>Please, enter new contact details:</StyledTitle>
        <Container>
          <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={(values, actions) => {
              handleSubmit(values, actions);
            }}
            validationSchema={ContactShema}
          >
            <StyledForm>
              <Label>
                <StyledField name="name" type="text" placeholder="Name" />
                <ErrMessageStyled name="name" component="span" />
              </Label>

              <Label>
                <StyledField name="number" type="tel" placeholder="Number" />
                <ErrMessageStyled name="number" component="span" />
              </Label>
              <Button type="submit">Update contact</Button>
            </StyledForm>
          </Formik>
        </Container>
      </Modal>
    
  );
};
