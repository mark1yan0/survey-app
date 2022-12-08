const apiUrl: string = import.meta.env.VITE_API_URL;
const apiHost: string = import.meta.env.VITE_API_HOST;

const config = {
  baseUrl: apiUrl + apiHost,
};

export default config;
