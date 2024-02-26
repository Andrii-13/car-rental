import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d50ec63f1ab8c634368139.mockapi.io';

export const fetchAllDataCars = createAsyncThunk(
  'data/adverts',
  async ({ page, limit = 12 }) => {
    try {
      const params = { page, limit };
      const response = await axios.get('/adverts', { params });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);


export const fetchFavorite = createAsyncThunk(
  'data/favorite',
  async (id) => {
    try {
      const response = await axios.get(`/adverts/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

