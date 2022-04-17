import React from 'react';

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
Normal.args = {};
