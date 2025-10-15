const API_DOMAIN = "https://api.mediastack.com/v1/news";
// const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "501c7736515e606ce35b01df67b6be75";
export const endpointPath = (countries, category) =>
  `${API_DOMAIN}?languages=en&categories=${category}&access_key=${API_KEY}`;
// export const endpointSearch = (searchQuery) =>
  // `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`;
