import axios from 'axios';
import.meta.env.VITE_API_URL;

const API_BASE_URL = import.meta.env.VITE_API_URL as string;
console.log('APIBASE', API_BASE_URL);

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});