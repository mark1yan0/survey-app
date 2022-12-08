import { ISurvey } from '../interfaces/questions';
import config from '../constants/config';
import apiEndpoints from '../constants/apiEndpoints';

// TODO: put meaningful errors
export default async function createSurvey(values: ISurvey) {
  const res = await fetch(`${config.baseUrl}${apiEndpoints.createNew}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  const data = await res.json();

  return data;
}
