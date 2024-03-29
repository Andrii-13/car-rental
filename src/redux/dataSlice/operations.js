import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d50ec63f1ab8c634368139.mockapi.io';

export const fetchAllDataCars = createAsyncThunk(
  'data/adverts',
  async ({ page, limit = 5 }) => {
    try {
      const params = { page, limit };
      const response = await axios.get('/adverts', { params });
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
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

