// TODO: put meaningful errors
export default async function getSurveyById(id: string) {
  const res = await fetch(`http://localhost:5000/survey/${id}`);
  return await res.json();
}
