function servisePixabay(str) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42170319-af092c1d236dd53a733e41db9';
  const params = new URLSearchParams({
    key: API_KEY,
    q: str,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export { servisePixabay };
