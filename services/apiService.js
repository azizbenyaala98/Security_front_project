// apiService.js

import axios from 'axios';

const baseURL = 'https://localhost:8081'; // Replace with your backend API URL

const api = axios.create({
  baseURL,
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data; // Assuming your backend returns user data on successful registration
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
