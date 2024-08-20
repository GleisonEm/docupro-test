import { apiClient } from './apiClient';

const AUTH_PATH_ROUTE = '/auth';

export const login = (email: string, password: string) => {
    return apiClient.post(definePath('/login'), { email, password });
};

export const register = (name: string, username: string, email: string, password: string) => {
    return apiClient.post(definePath('/register'), { name, username, email, password });
};

function definePath(route: string): string {
    return `${AUTH_PATH_ROUTE}${route}`;
}