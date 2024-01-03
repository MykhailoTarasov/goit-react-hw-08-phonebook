import { Formik } from 'formik';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import {
  Button,
  Container,
  ErrMessageStyled,
  Label,
  StyledField,
  StyledForm,
} from './RegisterForm.Styled';

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .matches(
      /^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('This is a required field'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
      'Please create a stronger password. It must contain one uppercase and one lowercase letter'
    )
    .required('This is a required field'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    Notify.success(`${values.name} registered!`);
    actions.resetForm({ name: '', email: '', password: '' });
  };

  return (
    <Container>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
        validationSchema={ContactShema}
      >
        <StyledForm autoComplete="off">
          
            <Label>
              <StyledField name="name" type="text" placeholder="Name" />
              <ErrMessageStyled name="name" component="span" />
            </Label>
            <Label>
              <StyledField name="email" type="email" placeholder="Email" />
              <ErrMessageStyled name="email" component="span" />
            </Label>
            <Label>
              <StyledField
                name="password"
                type="password"
                placeholder="Password"
              />
              <ErrMessageStyled name="password" component="span" />
            </Label>
            <Button type="submit">Log In</Button>
          
        </StyledForm>
      </Formik>
    </Container>
  );
};
