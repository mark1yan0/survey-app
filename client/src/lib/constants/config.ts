const apiUrl = import.meta.env.VITE_API_URL;
const apiHost = import.meta.env.VITE_API_HOST;

const config = {
  baseUrl: apiUrl + apiHost,
};

export default config;
