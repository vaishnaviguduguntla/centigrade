// src/api.js
import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('auth/login', credentials);
    return response.data.token;
  } catch (error) {
    throw error.response;
  }
};

export const getProducts = async (category,sortOrder) => {
    try {
      const url = category ? `products/category/${category}?sort=${sortOrder}` : `products?sort=${sortOrder}`;
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      throw error.response;
    }
  };


  export const getCategories = async () => {
    try {
      const response = await api.get("products/categories");
      return response.data;
    } catch (error) {
      throw error.response;
    }
  };


export default api;