import axios from 'axios';

const API_URL = 'https://6566de2d64fcff8d730f2d13.mockapi.io/users';

export const login = async (credentials) => {
    try {
        const response = await axios.get(`${API_URL}?username=${credentials.username}&password=${credentials.password}`);
        if (response.data.length === 1) {
            // Login successful
            return response.data[0];
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        throw new Error('Failed to log in');
    }
};

export const register = async (userData) => {
    try {
        const response = await axios.post(API_URL, userData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to register');
    }
};

