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
Normal.args = {};
