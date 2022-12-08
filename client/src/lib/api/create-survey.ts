import { ISurvey } from '../interfaces/questions';

// TODO: put meaningful errors
export default async function createSurvey(values: ISurvey) {
  const res = await fetch('http://localhost:5000/survey/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  const data = await res.json();

  return data;
}
