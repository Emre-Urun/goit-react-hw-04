import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos/";
const API_KEY = "eWyjKwRRDOC1AOrjOLe3iPxC2KJ3Gomiu_8HSBClVdk";

export const istek = async (kelime, sayfa) => {
  const response = await axios.get(BASE_URL, {
    params: {
      client_id: API_KEY,
      query: kelime,
      page: sayfa,
      per_page: 12,
    },
  });
  return response.data;
};
