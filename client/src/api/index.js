import axios from 'axios';
import { BASE_URL } from '../config';

const http = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const getHeroes = ({ userId = 1 } = {}) =>
  http.get(`/superheroes/`);

export default http;
