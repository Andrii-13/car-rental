import { createSlice } from '@reduxjs/toolkit';
import { fetchAllDataCars } from './operations';

const initialState = {
  adverts: [],
  isfavorite: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addFavorite(state, action) {
      console.log(state);
      state.isfavorite.push(action.payload);
    },

    delFavorite(state, action) {
      state.isfavorite = state.isfavorite.filter(
        item => item.id !== action.payload.id
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllDataCars.fulfilled, (state, action) => {
      state.adverts = action.payload; //записую в стейт дані зі беку
    });
  },
});

export const dataReducer = dataSlice.reducer;
export const { addFavorite, delFavorite } = dataSlice.actions;
