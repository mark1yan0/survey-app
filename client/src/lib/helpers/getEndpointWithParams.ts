// will work only one param
export default function getEndpointWithParams(endpoint: string, value: string) {
  const index = endpoint.indexOf(':');
  const key = endpoint.substring(index);
  return endpoint.replace(key, value);
}
