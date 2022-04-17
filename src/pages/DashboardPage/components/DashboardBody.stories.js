import React from 'react';

import DashboardBody from './DashboardBody';

export default {
  title: 'Dashboard/DashboardBody',
  component: DashboardBody,
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DashboardBody {...args} />;
}

export const Normal = Template.bind({});
Normal.args = {};
