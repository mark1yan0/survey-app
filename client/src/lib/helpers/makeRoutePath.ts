// ? wont work with more dynamic paths
export default function makeRoutePath(route: string, string: string) {
  return route.replace(route.substring(route.indexOf(':')), string);
}
