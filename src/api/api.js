import axios from 'axios';

axios.defaults.baseURL = 'https://65d50ec63f1ab8c634368139.mockapi.io';


export const fetchCardById = async (id) => {
  const responce = await axios.get(`/adverts/${id}`);
  return responce.data;
};

