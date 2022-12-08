export default function getSurveyIdFromUri(uri: string) {
  return uri.substring(uri.lastIndexOf('/') + 1);
}
