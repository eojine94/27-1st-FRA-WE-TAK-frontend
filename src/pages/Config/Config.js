const BASE_URL = 'http://54.180.112.246:8000';

const API = {
  SIGN_UP: `${BASE_URL}/users/signup`,
  LOG_IN: `${BASE_URL}/users/login`,
  FIND_ID: `${BASE_URL}/users/find-id`,
  FIND_PASSWORD: `${BASE_URL}/users/find-password`,
  RESET_PASSWORD: `${BASE_URL}/users/reset-password`,
};

export default API;
