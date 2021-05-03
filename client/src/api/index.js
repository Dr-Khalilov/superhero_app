import axios from 'axios';
import { BASE_URL } from '../config';

const http = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const createHero = body => http.post(`/superheroes/`, body);

export const getHeroes = () => http.get(`/superheroes/`);

export const updateHero = ({ heroId, hero } = {}) =>
  http.put(`/superheroes/${heroId}`, hero);

export const deleteHero = ({ id = 1 } = {}) =>
  http.delete(`/superheroes/${id}`);

export default http;
