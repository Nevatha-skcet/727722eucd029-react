import axios from 'axios';

const API_URL = 'https://6566de2d64fcff8d730f2d13.mockapi.io/users';

export const fetchUsers = async () => {
    return await axios.get(API_URL);
};

export const addUser = async (userData) => {
    return await axios.post(API_URL, userData);
};

export const updateUser = async (id, updatedData) => {
    return await axios.put(`${API_URL}/${id}`, updatedData);
};

export const deleteUser = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
