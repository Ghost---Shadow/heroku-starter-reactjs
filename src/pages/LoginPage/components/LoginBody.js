import { Stack, Text, Title } from '@mantine/core';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import SubmitButton from '../../../components/Fields/SubmitButton';
import TextField from '../../../components/Fields/TextField';

function LoginBody({ login }) {
  const [error, setError] = useState();

  const onLogin = async (values) => {
    setError('');
    // TODO: Handle errors
    try {
      await login(values);

      // TODO: Navigate to dashboard
    } catch (e) {
      const errorBody = await e.response.json();
      setError(errorBody.message);
    }
  };

  // TODO: Validation

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onLogin}>
      <Form>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'center', marginTop: '5rem' }}>
          <Stack sx={{
            display: 'flex', flexDirection: 'column', flex: 0.8,
          }}
          >
            <Title order={1} align="center">Login</Title>
            <TextField type="email" name="email" />
            <TextField type="password" name="password" />
            <SubmitButton>Submit</SubmitButton>
            {error && <Text color="red">{error}</Text>}
          </Stack>
        </Stack>
      </Form>
    </Formik>
  );
}

LoginBody.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginBody;
