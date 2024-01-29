import axios from 'axios';
import { token, ApiEndpoint } from './token';
export const generateRandomWord = () => {
  const words = ['dog', 'car', 'tree', 'beach', 'book', 'computer', 'mountain', 'ocean', 'guitar', 'flower'];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

export const ShowsRandomImage = async (data, q) => {
  try {
    const limitPerReq = 10;
    const params = {
      key: token,
      per_page: limitPerReq,
      q: generateRandomWord(),
    };
    const res = await axios.get(ApiEndpoint, { params });

    data(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const ShowsRandomImagemini = async (query, dataCallback) => {
  try {
    const limitPerReq = 20;
    const params = {
      key: token,
      per_page: limitPerReq,
      q: query,
    };
    const res = await axios.get(ApiEndpoint, { params });
    dataCallback(res.data);
  } catch (error) {
    console.log(error);
  }
};

// tambah untuk generate gambar random yang berbeda id

export const SearchImage = async (q, data) => {
  try {
    const params = {
      key: token,
      q: q,
    };
    const res = await axios.get(ApiEndpoint, { params });

    data(res.data);
  } catch (error) {
    console.log(error);
  }
};
