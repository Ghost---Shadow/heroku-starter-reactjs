import { HTTPError } from 'ky';
import React from 'react';

import LoginBody from './LoginBody';

export default {
  title: 'Login/LoginBody',
  component: LoginBody,
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <LoginBody {...args} />;
}

export const Normal = Template.bind({});
Normal.args = {
  login: async (...p) => { console.log(...p); return new Response({ message: 'yes' }); },
};

export const Unauthorized = Template.bind({});
Unauthorized.args = {
  login: async () => { throw new HTTPError({ json: async () => ({ message: 'Invalid credentials' }), status: 401 }); },
};
