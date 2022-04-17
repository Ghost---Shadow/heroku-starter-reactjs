import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

function LoginBody({ login }) {
  const onLogin = async (values) => {
    // TODO: Handle errors
    const response = await login(values);

    // TODO: Navigate to dashboard
    return response;
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onLogin}>
      <Form>
        <Field type="email" name="email" />
        <Field type="password" name="password" />
        <button type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

LoginBody.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginBody;
