import { createSlice } from '@reduxjs/toolkit';
import { fetchAllDataCars } from './operations';

const initialState = {
  adverts: [],
  isfavorite: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,

  // reducers: {
  //   addFavorite(state, action) {
  //     console.log(state);
  //     state.adverts = [...state.adverts, action.payload];
  //   },

  extraReducers: builder => {
    builder.addCase(fetchAllDataCars.fulfilled, (state, action) => {
      state.adverts = action.payload; //записую в стейт дані зі беку
    });
  },
});

export const dataReducer = dataSlice.reducer;
export const { addFavorite, delFavorite } = dataSlice.actions;
