import axios from 'axios';
import { ApiEndpoint, token } from './token';

export const ShowsRandomImage = async (data) => {
  try {
    const limitPerReq = 10;
    const params = {
      key: token,
      per_page: limitPerReq,
      q: 'beauty-girl',
    };
    const res = await axios.get(ApiEndpoint, { params });

    data(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const ShowsRandomImagemini = async (data) => {
  try {
    const limitPerReq = 21;
    const params = {
      key: token,
      per_page: limitPerReq,
      q: 'cat',
    };
    const res = await axios.get(ApiEndpoint, { params });

    data(res.data);
  } catch (error) {
    console.log(error);
  }
};
