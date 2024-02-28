export const toggleFavorite = (state, action) => {
  const id = action.payload;
  console.log(state.favorite)
  const existAdvert = state.favorite.filter(advert => advert.id === id);
  if (!existAdvert.length) {
    state.favorite = [...state.favorite, action.payload];
  }

};
