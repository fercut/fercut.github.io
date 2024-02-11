const inicio = document.getElementById('inicio');
const home = document.getElementById('home');
home.classList.remove('hidden');

const form = document.getElementById('form');
const formacion = document.getElementById('formacion');

const expe = document.getElementById('expe');
const experiencia = document.getElementById('experiencia');

const hab = document.getElementById('hab');
const habilidades = document.getElementById('habilidades');

const serv = document.getElementById('serv');
const servicios = document.getElementById('servicios');

const proy = document.getElementById('proy');
const proyectos = document.getElementById('proyectos');

const cont = document.getElementById('cont');
const contacto = document.getElementById('contacto');

const hamb = document.getElementById('hamb');
const menu = document.getElementById('menu');

inicio.addEventListener('click', () => {
    home.classList.remove('hidden');
    formacion.classList.add('hidden');
    experiencia.classList.add('hidden');
    habilidades.classList.add('hidden');
    servicios.classList.add('hidden');
    proyectos.classList.add('hidden');
    contacto.classList.add('hidden');
    menu.classList.add('hidden');
});

form.addEventListener('click', () => {
    formacion.classList.remove('hidden');
    home.classList.add('hidden');
    experiencia.classList.add('hidden');
    habilidades.classList.add('hidden');
    servicios.classList.add('hidden');
    proyectos.classList.add('hidden');
    contacto.classList.add('hidden');
});

expe.addEventListener('click', () => {
    experiencia.classList.remove('hidden');
    home.classList.add('hidden');
    formacion.classList.add('hidden');
    habilidades.classList.add('hidden');
    servicios.classList.add('hidden');
    proyectos.classList.add('hidden');
    contacto.classList.add('hidden');
});

hab.addEventListener('click', () => {
    habilidades.classList.remove('hidden');
    home.classList.add('hidden');
    formacion.classList.add('hidden');
    experiencia.classList.add('hidden');
    servicios.classList.add('hidden');
    proyectos.classList.add('hidden');
    contacto.classList.add('hidden');
});


serv.addEventListener('click', () => {
    servicios.classList.remove('hidden');
    habilidades.classList.add('hidden');
    home.classList.add('hidden');
    formacion.classList.add('hidden');
    experiencia.classList.add('hidden');
    proyectos.classList.add('hidden');
    contacto.classList.add('hidden');
});

proy.addEventListener('click', () => {
    proyectos.classList.remove('hidden');
    servicios.classList.add('hidden');
    habilidades.classList.add('hidden');
    home.classList.add('hidden');
    formacion.classList.add('hidden');
    experiencia.classList.add('hidden');
    contacto.classList.add('hidden');
});

cont.addEventListener('click', () => {
    contacto.classList.remove('hidden');
    proyectos.classList.add('hidden');
    servicios.classList.add('hidden');
    habilidades.classList.add('hidden');
    home.classList.add('hidden');
    formacion.classList.add('hidden');
    experiencia.classList.add('hidden');
    
});

hamb.addEventListener('click', () => {
    menu.classList.remove('hidden');
    proyectos.classList.add('hidden');
    servicios.classList.add('hidden');
    habilidades.classList.add('hidden');
    home.classList.add('hidden');
    formacion.classList.add('hidden');
    experiencia.classList.add('hidden');
    contacto.classList.add('hidden');
});
