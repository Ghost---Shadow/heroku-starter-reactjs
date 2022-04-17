import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

function SignupBody({ signup }) {
  const onSignup = async (values) => {
    // TODO: Handle errors
    const response = await signup(values);

    // TODO: Navigate to dashboard
    return response;
  };

  return (
    <Formik initialValues={{ email: '', password: '', name: '' }} onSubmit={onSignup}>
      <Form>
        <Field type="email" name="email" />
        <Field type="password" name="password" />
        <Field type="name" name="name" />
        <button type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

SignupBody.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default SignupBody;
