import axios from 'axios';
import { BASE_URL } from '../config';

const http = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const getHeroes = () => http.get(`/superheroes/`);

export const createHero = (heroData) => {
  http.post(`/superheroes/`, heroData);
};

export default http;
