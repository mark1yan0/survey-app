import apiEndpoints from '../constants/apiEndpoints';
import config from '../constants/config';

export default async function getAllSurveys() {
  const res = await fetch(`${config.baseUrl}${apiEndpoints.getAll}`);
  return await res.json();
}
