import axios from 'axios';
import { BASE_URL } from '../config';

const http = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const getHeroes = ({ userId = 1 } = {}) => http.get(`/superheroes/`);

export const createHero = (heroData, heroId) => {
  http.post(`/superheroes/${heroId}/powers`, heroData);
};

export default http;
