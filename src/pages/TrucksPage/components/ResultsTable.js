import {
  Table, Loader, Center, Text,
} from '@mantine/core';
import PropTypes from 'prop-types';

function ResultsTable({ foodTrucks, searchedAtLeastOnce, isLoading }) {
  const rows = foodTrucks.map((truck) => (
    <tr key={truck.locationid}>
      <td>{truck.applicant}</td>
      <td>{truck.coordinates.latitude.toFixed(6)}</td>
      <td>{truck.coordinates.longitude.toFixed(6)}</td>
      <td>{(truck.distance).toFixed(2)}</td>
    </tr>
  ));

  if (isLoading) {
    return (
      <Center style={{ height: '200px' }}>
        {' '}
        <Loader />
      </Center>
    );
  }

  if (!searchedAtLeastOnce) {
    return (
      <Center style={{ height: '200px' }}>
        <Text>Search to see food truck results.</Text>
      </Center>
    );
  }

  if (rows.length === 0) {
    return (
      <Center style={{ height: '200px' }}>
        <Text>No results</Text>
      </Center>
    );
  }

  return (
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
  );
}

ResultsTable.propTypes = {
  foodTrucks: PropTypes.arrayOf(PropTypes.shape({
    locationid: PropTypes.number.isRequired,
    applicant: PropTypes.string.isRequired,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }),
    distance: PropTypes.number.isRequired,
  })).isRequired,
  searchedAtLeastOnce: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ResultsTable;
