import axios from 'axios';
import { BASE_URL } from '../config';

const http = axios.create({
  baseURL: BASE_URL,
});

export default http;
