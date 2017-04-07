//centralized HTTP requests
import 'whatwg-fetch';

export function getUsers(){
  return get('users');
}

//reusable boilerplate for get()
function get(url){
  return fetch(url).then(onSuccess,onError);
}
function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}
