import apiEndpoints from '../constants/apiEndpoints';
import config from '../constants/config';

// TODO: put meaningful errors
export default async function getSurveyById(id: string) {
  const res = await fetch(`${config.baseUrl}/${id}`);
  return await res.json();
}
