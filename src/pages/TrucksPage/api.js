import ky from 'ky';
import { BACKENDS, ROUTES } from '../../config';

export const getFoodTrucksNearbyFast = ({
  latitude, longitude, radius, limit,
}) => ky.get(`${BACKENDS.FLASK_SERVER}/${ROUTES.FOOD_TRUCKS_FAST}`, {
  searchParams: {
    latitude,
    longitude,
    radius,
    limit,
  },
}).json();

export const getFoodTrucksNearby = ({
  latitude, longitude, radius, limit,
}) => ky.get(`${BACKENDS.FLASK_SERVER}/${ROUTES.FOOD_TRUCKS}`, {
  searchParams: {
    latitude,
    longitude,
    radius,
    limit,
  },
}).json();
