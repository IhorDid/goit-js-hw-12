import axios from 'axios';
async function servisePixabay(str, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42170319-af092c1d236dd53a733e41db9';
  const params = new URLSearchParams({
    key: API_KEY,
    q: str,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  });

  const { data } = await axios.get(`${BASE_URL}?${params}`);
  return data;
}

export { servisePixabay };
