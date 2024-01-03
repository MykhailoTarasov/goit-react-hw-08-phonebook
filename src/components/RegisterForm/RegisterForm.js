import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';

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
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
        validationSchema={ContactShema}
      >
        <Form autoComplete="off">
          <div>
            <label>
              Name
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="span" />
            </label>
            <label>
              Email
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="span" />
            </label>
            <label>
              Password
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="span" />
            </label>
            <button type="submit">Log In</button>
          </div>
        </Form>
      </Formik>
    );
  };