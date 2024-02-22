import axios from 'axios';

axios.defaults.baseURL = 'https://65d50ec63f1ab8c634368139.mockapi.io';

export const fetchData = async () => {
  const responce = await axios.get('/adverts');
  return responce.data;
};
