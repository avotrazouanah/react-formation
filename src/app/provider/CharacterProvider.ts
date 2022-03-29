import Axios from 'axios';

export const BASE_URL = 'http://hp-api.herokuapp.com/api/characters';

const axios = Axios.create({ baseURL: BASE_URL });
const options = {
  headers: {
    Accept: 'application/json',
  },
};

const handleError = async (result: any) => {
  if (result.data.status === 'success') {
    return result.data;
  }
  console.log(result.data.error);
  throw Error(result.data.error);
};

export const getCharacters = async (url: string) => {
  const result = await axios.get(url, options);
  console.log(handleError(result));
  return handleError(result);
};
