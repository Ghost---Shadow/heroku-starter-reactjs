import ky from 'ky';
import { BACKENDS, ROUTES } from '../../config';

export const signup = ({ email, password, name }) => ky
  .post(`${BACKENDS.FLASK_SERVER}/${ROUTES.SIGNUP}`, { json: { email, password, name } });

export const todo = null;
