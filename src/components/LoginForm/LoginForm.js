import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import * as Yup from 'yup';

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
        <Form autoComplete="off">
          <div>
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