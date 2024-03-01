export const toggleFavorite = (state, action) => {
  // const { id } = action.payload;

  // console.log(id);

  state.favorite = [...state.favorite, action.payload];
};
