export default async function getAllSurveys(endpoint: string) {
  const res = await fetch(`http://localhost:5000/survey/${endpoint}`);
  return await res.json();
}
