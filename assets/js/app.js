const baseEndpoint = 'https://api.github.com';
const usersEndpoint = 'baseEndpoint/users';  //cambiamos a ''
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser (username){  //async fuction
  $n.textContent = "${cargando...}"; //agregamos ${}
  const response = await fetch(`${usersEndpoint}/${username}`); //await funciona con async function
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

async function handleError(err) {
  console.log('OH NO!');
  console.log(err);
$n.textContent = '${err]}'; //agregamos ; y modificamos '' y agregamos ${} y $n
}

displayUser('stolinski').catch(handleError);


