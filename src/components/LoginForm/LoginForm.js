import { Formik } from 'formik';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import * as Yup from 'yup';
import { Button, Container, ErrMessageStyled, StyledField, StyledForm } from './LoginForm.Styled';

const ContactShema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('This is a required field'),
    password: Yup.string().required('This is a required field'),
  });
  
  export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
      dispatch(logIn(values));
      actions.resetForm({ email: '', password: '' });
      Notify.success(`Authorization completed`);
    };
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
        validationSchema={ContactShema}
      >
        <StyledForm autoComplete="off">
          <Container>
            <label>
              
              <StyledField name="email" type="email" placeholder="Email"/>
              <ErrMessageStyled name="email" component="span" />
            </label>
            <label>
              
              <StyledField name="password" type="password" placeholder="Password"/>
              <ErrMessageStyled name="password" component="span" />
            </label>
            <Button type="submit">Log In</Button>
          </Container>
        </StyledForm>
      </Formik>
    );
  };