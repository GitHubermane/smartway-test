import axios from 'axios';

export const API_URL = `${process.env.REACT_APP_SERVER_URL}/search/repositories`;

export const $api = axios.create({
  baseURL: API_URL,
});
