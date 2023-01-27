export default function generateSurveyLink(id: string) {
  const origin = location.origin;
  return `${origin}/survey/${id}`;
}
