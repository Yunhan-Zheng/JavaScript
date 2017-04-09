export default function getBaseUrl(){
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3001/':'/'; //use mockapi if it's running in dev
}
