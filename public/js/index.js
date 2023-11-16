console.log('index.js connected success!');

const main = document.querySelector('.container')
// const mainByTag = document.querySelector('.main')
// const mainById = document.querySelector('.#mainConteiner')

const subtitulo = document.querySelector('.subtitulo')
const link = document.querySelector('.contenido a')
const parrafos = document.querySelector('.informacion p')

// for (let i = 0; i < parrafos.length; i++) {
//     console.log(parrafos[i].textContent);    
// }

// parrafos.forEach(parrafo => {
//     console.log(parrafo.textContent);
// });

const $ = id => document.getElementById(id)

const qs = e => document.querySelector(e)

// console.log(qs('.tituloPrincipal').textContent);

// console.log(($('logoDH')));

const nombre = prompt('INGRESE SU NOMBRE')

subtitulo.innerHTML += nombre ? nombre : '<h1>INVITADO</h1>' // manda en el formato h1

subtitulo.innerText += nombre ? nombre : '<h1>INVITADO</h1>' // manda textualmente lo que hay entre las comillas

subtitulo.classList.add('upperCase')

subtitulo.classList.remove('subtitulo')

$('p1').classList.toggle('verde')

$('p3').classList.toggle('verde')
