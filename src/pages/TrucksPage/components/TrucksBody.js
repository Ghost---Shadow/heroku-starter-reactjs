import {
  Button, TextInput, Table, NumberInput, Group, Stack, Loader, Center, Text,
} from '@mantine/core';
import { useState } from 'react';
import PropTypes from 'prop-types';

function TrucksBody({ getFoodTrucksNearby, getFoodTrucksNearbyFast, getUserLocation }) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [radius, setRadius] = useState(8000); // default radius
  const [limit, setLimit] = useState(5); // default limit
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State to track general loading status
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (fast = false) => {
    setIsLoading(true); // Start loading
    const getFunction = fast ? getFoodTrucksNearbyFast : getFoodTrucksNearby;
    try {
      const result = await getFunction({
        latitude, longitude, radius, limit,
      });
      setFoodTrucks(result.closest_food_trucks);
      setError('');
    } catch (err) {
      setError(err.message || err.toString());
    }
    setIsLoading(false); // Stop loading
  };

  const handleFetchUserLocation = async () => {
    setIsLoadingLocation(true); // Start loading for location fetch
    try {
      const [nextLatitude, nextLongitude] = await getUserLocation();
      setLatitude(nextLatitude);
      setLongitude(nextLongitude);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError(err.message || 'Failed to fetch user location');
    }
    setIsLoadingLocation(false); // Stop loading
  };

  const rows = foodTrucks.map((truck) => (
    <tr key={truck.locationid}>
      <td>{truck.applicant}</td>
      <td>{truck.coordinates.latitude}</td>
      <td>{truck.coordinates.longitude}</td>
      <td>{truck.distance}</td>
    </tr>
  ));

  return (
    <Stack>
      <Group grow>
        <TextInput
          label="Latitude"
          placeholder="Enter latitude"
          value={latitude}
          onChange={(event) => setLatitude(event.currentTarget.value)}
        />
        <TextInput
          label="Longitude"
          placeholder="Enter longitude"
          value={longitude}
          onChange={(event) => setLongitude(event.currentTarget.value)}
        />
        <NumberInput
          label="Radius in km"
          placeholder="Enter radius"
          value={radius}
          onChange={(value) => setRadius(value || 0)}
          min={0}
        />
        <NumberInput
          label="Limit"
          placeholder="Enter limit"
          value={limit}
          onChange={(value) => setLimit(value || 0)}
          min={1}
        />
      </Group>
      <Group position="right">
        <Button onClick={() => handleSearch(false)} loading={isLoading}>Search</Button>
        <Button onClick={() => handleSearch(true)} loading={isLoading}>Search Fast</Button>
        <Button
          onClick={handleFetchUserLocation}
          loading={isLoadingLocation}
        >
          Get User Location
        </Button>
      </Group>
      {error && (
        <Group>
          <Text color="red">{error}</Text>
        </Group>
      )}
      {isLoading ? (
        <Center style={{ height: 200 }}>
          <Loader />
        </Center>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Distance (km)</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
    </Stack>
  );
}

TrucksBody.propTypes = {
  getFoodTrucksNearbyFast: PropTypes.func.isRequired,
  getFoodTrucksNearby: PropTypes.func.isRequired,
  getUserLocation: PropTypes.func.isRequired,
};

export default TrucksBody;
