import ky from 'ky';
import { BACKENDS, ROUTES } from '../../config';

export const getUserInfo = () => ky.get(`${BACKENDS.FLASK_SERVER}/${ROUTES.USER}`, { credentials: 'include' }).json();

export const todo = null;
