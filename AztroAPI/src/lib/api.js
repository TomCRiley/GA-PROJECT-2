import axios from 'axios';

const baseUrl = 'https://aztro.sameerkumar.website';

export const todaysHoroscope = () => {
  return axios.get(`${baseUrl}/sign`);
};
