import spookifyAPI from '../api/spookify';

const setJwtToken = (token) => {
  if (token) {
    spookifyAPI.defaults.headers.common['Authorization'] = token;
  } else {
    delete spookifyAPI.defaults.headers.common['Authorization'];
  }
};

export default setJwtToken;
