//ajax
let obj={};
let request = new XMLHttpRequest();
let url = 'https://swapi.co/api/';
request.open("GET", url);
request.onreadystatechange = function(e) {
  if (request.readyState === 4 && request.status === 200) {
    let res = request.responseText;
    obj = JSON.parse(res);
  }
};
request.send();
