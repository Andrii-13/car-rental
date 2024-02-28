import axios from 'axios';

axios.defaults.baseURL = 'https://65d50ec63f1ab8c634368139.mockapi.io';


export const fetchCardById = async (id) => {
  const responce = await axios.get(`/adverts/${id}`);
  return responce.data;
};

// export const changeToFavorite = async (id, value) => {
//   const responce = await axios.put(`/adverts/${id}`, value);
//   return responce.data;
// };