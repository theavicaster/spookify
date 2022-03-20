import axios from 'axios';

const jokeAPI = axios.create({
  baseURL: 'https://nova-joke-api.netlify.app/.netlify/functions/index/',
});

export default jokeAPI;
