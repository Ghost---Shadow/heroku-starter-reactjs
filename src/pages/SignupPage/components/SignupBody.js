import { Stack, Text, Title } from '@mantine/core';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../../components/Fields/SubmitButton';
import TextField from '../../../components/Fields/TextField';
import { ROUTES } from '../../../config';

function SignupBody({ signup }) {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onSignup = async (values) => {
    try {
      // TODO: Handle errors
      await signup(values);

      navigate(`/${ROUTES.LOGIN}`, { replace: true });
    } catch (e) {
      const errorBody = await e.response.json();
      setError(errorBody.message);
    }
  };

  return (
    <Formik initialValues={{ email: '', password: '', name: '' }} onSubmit={onSignup}>
      <Form>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'center', marginTop: '5rem' }}>
          <Stack sx={{
            display: 'flex', flexDirection: 'column', flex: 0.8,
          }}
          >
            <Title order={1} align="center">Signup</Title>
            <TextField type="name" name="name" placeholder="name" />
            <TextField type="email" name="email" placeholder="email" />
            <TextField type="password" name="password" placeholder="password" />
            <SubmitButton>Signup</SubmitButton>
            {error && <Text color="red">{error}</Text>}
          </Stack>
        </Stack>
      </Form>
    </Formik>
  );
}

SignupBody.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default SignupBody;
