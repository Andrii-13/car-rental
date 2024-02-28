import { createSlice } from '@reduxjs/toolkit';
import { toggleFavorite } from './favoriteReducer';

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    favoriteCards: toggleFavorite // як сбираємось записати в стейт
  },
});

export const favoriteCardsReducer = favoriteSlice.reducer;
export const { favoriteCards } = favoriteSlice.actions;
