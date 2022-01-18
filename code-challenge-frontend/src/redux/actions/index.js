import axios from 'axios';

export default axios.create({
  baseURL: 'https://code-challenge-backend-heroku.herokuapp.com',
});
