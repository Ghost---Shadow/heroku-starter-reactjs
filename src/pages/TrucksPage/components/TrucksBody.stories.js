import React from 'react';

import TrucksBody from './TrucksBody';

export default {
  title: 'Dashboard/TrucksBody',
  component: TrucksBody,
};

const sampleResponse = {
  closest_food_trucks: [
    {
      applicant: "Park's Catering",
      coordinates: {
        latitude: 37.730906150359694,
        longitude: -122.37330257748522,
      },
      distance: 800.2761181006799,
    },
    {
      applicant: "Park's Catering",
      coordinates: {
        latitude: 37.73213495192223,
        longitude: -122.37539807856734,
      },
      distance: 800.49395925296,
    },
    {
      applicant: 'Singh Brothers Ice Cream',
      coordinates: {
        latitude: 37.72943828845401,
        longitude: -122.37665780072307,
      },
      distance: 800.5051578101001,
    },
    {
      applicant: "Park's Catering",
      coordinates: {
        latitude: 37.726382932182176,
        longitude: -122.37843478266778,
      },
      distance: 800.54722087182,
    },
    {
      applicant: 'Liang Bai Ping',
      coordinates: {
        latitude: 37.72578913981244,
        longitude: -122.37897271962358,
      },
      distance: 800.57150557295,
    },
  ],
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TrucksBody {...args} />;
}

export const Normal = Template.bind({});
Normal.args = {
  getFoodTrucksNearbyFast: () => Promise.resolve(sampleResponse),
  getFoodTrucksNearby: () => Promise.resolve(sampleResponse),
};
