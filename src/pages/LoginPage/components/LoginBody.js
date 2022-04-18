import { Stack, Text, Title } from '@mantine/core';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../../components/Fields/SubmitButton';
import TextField from '../../../components/Fields/TextField';
import { ROUTES } from '../../../config';

function LoginBody({ login }) {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onLogin = async (values) => {
    setError('');
    // TODO: Handle errors
    try {
      await login(values);

      navigate(`/${ROUTES.USER}`, { replace: true });
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
            <TextField type="email" name="email" placeholder="email" />
            <TextField type="password" name="password" placeholder="password" />
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
