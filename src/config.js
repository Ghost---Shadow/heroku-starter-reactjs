const ENVIRONMENT = window.ENVIRONMENT || 'development';

export const BACKENDS = {
  development: {
    FLASK_SERVER: 'http://localhost:5002',
  },
  production: {
    FLASK_SERVER: 'http://localhost/api',
  },
}[ENVIRONMENT];

export const ROUTES = {
  SIGNUP: 'signup',
  LOGIN: 'login',
  USER: 'user',
};
