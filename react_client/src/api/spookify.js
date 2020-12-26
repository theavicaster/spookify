import axios from 'axios';

const spookifyAPI = axios.create({
  baseURL: 'https://spookify-music.herokuapp.com/api',
});

export default spookifyAPI;
