import ky from 'ky';
import { BACKENDS, ROUTES } from '../../config';

export const userInfo = () => ky.get(`${BACKENDS.FLASK_SERVER}/${ROUTES.USER}`);

export const todo = null;
