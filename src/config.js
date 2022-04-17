const ENVIRONMENT = window.ENVIRONMENT || 'development';

export const BACKENDS = {
  development: {
    FLASK_SERVER: '',
  },
  production: {
    FLASK_SERVER: 'TODO',
  },
}[ENVIRONMENT];

export const ROUTES = {
  SIGNUP: 'signup',
  LOGIN: 'login',
  USER: 'user',
};
