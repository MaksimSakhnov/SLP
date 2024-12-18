import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;
export const getClient = () => {
  const client = axios.create({
    baseURL: `${baseUrl}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return client;
};
