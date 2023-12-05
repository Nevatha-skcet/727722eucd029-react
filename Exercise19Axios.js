import axios from 'axios';

const API_URL = 'https://6566de2d64fcff8d730f2d13.mockapi.io/users';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to fetch users');
        }
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
};
