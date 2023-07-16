import axios from 'axios';
import { envConfig } from '../env';

export const httpClient = axios.create({
  baseURL: envConfig.backendBaseUrl,
  withCredentials: true
});
