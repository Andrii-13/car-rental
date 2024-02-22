import axios from 'axios';

axios.defaults.baseURL = 'https://65d50ec63f1ab8c634368139.mockapi.io/'

export const getAllData = async() => {
      try {
        const { data } = await axios.get(`/`);
        console.log(data)
        return data;
      } catch (error) {
        
      }
    }
