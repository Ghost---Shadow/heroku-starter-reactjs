import React from 'react';
import { HTTPError } from 'ky';

import SignupBody from './SignupBody';

export default {
  title: 'Signup/SignupBody',
  component: SignupBody,
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SignupBody {...args} />;
}

export const Normal = Template.bind({});
Normal.args = {
  signup: async (...p) => { console.log(...p); return new Response({ message: 'yes' }); },
};

export const Unauthorized = Template.bind({});
Unauthorized.args = {
  signup: async () => { throw new HTTPError({ json: async () => ({ message: 'User already exists' }), status: 400 }); },
};
