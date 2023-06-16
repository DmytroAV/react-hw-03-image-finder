import axios from 'axios';

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com/api';

const KEY_AUTH = process.env.REACT_APP_SECRET_KEY_API;
const image_type = 'photo';
const orientation = 'horizontal';
const per_page = 12;

export default async function FetchImages(query, page) {
  try {
    const response = await axios.get(`/?q=${query}&page=${page}&key=${KEY_AUTH}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`);
    console.log('response.data :>> ', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
