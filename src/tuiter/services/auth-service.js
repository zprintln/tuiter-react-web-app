import axios from "axios";

// get the URL to the remote API

const REACT_APP_SERVER_API_URL="http://localhost:4000/api";
const SERVER_API_URL = REACT_APP_SERVER_API_URL;

// URL to auth controller
const USERS_URL = `${SERVER_API_URL}/users`;

// configure axios to support cookies
// for passing credentials
const api = axios.create({ withCredentials: true })

// Login Service function
export const login = async ({ username, password}) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    const user = response.data;
    return user;
};

// Logout
export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

// Profile
export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response;
};

// Update User
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}`, user);
    return response.data;
};

// Register user
export const register = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/register`, { username, password });
    const user = response.data;
    return user;
}