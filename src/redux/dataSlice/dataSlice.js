import { createSlice } from '@reduxjs/toolkit';
import { fetchAllDataCars } from './operations';

const initialState = {
  adverts: [],
  // isfavorite: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState, 

  extraReducers: builder => {
    builder.addCase(fetchAllDataCars.fulfilled, (state, action) => {
      state.adverts = action.payload; //записую в стейт дані зі беку
    });
  },
});

export const dataReducer = dataSlice.reducer;
export const { addFavorite, delFavorite } = dataSlice.actions;
