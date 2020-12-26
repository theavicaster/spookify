import axios from 'axios';

const jokeAPI = axios.create({
  baseURL: 'https://official-joke-api.appspot.com/jokes',
});

export default jokeAPI;
