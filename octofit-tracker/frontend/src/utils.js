// Utility to get the correct API base URL for Codespace or localhost
export function getApiBaseUrl() {
  const codespace = window.location.hostname.endsWith('.app.github.dev');
  if (codespace) {
    return window.location.origin + '/api/';
  }
  return 'http://localhost:8000/api/';
}