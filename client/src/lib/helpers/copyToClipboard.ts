export default function copyToClipboard(string: string) {
  if ('clipboard' in navigator) {
    navigator.clipboard.writeText(string);
  }
}
