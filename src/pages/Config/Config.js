const BASE_URL = 'http://10.58.3.174:8000';

const API = {
  SIGN_UP: `${BASE_URL}/users/signup`,
  LOG_IN: `${BASE_URL}/users/login`,
  FIND_ID: `${BASE_URL}/users/usersearch`,
  FIND_PASSWORD: `${BASE_URL}/users/find-password`,
  RESET_PASSWORD: `${BASE_URL}/users/reset-password`,
};

export default API;
