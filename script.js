const $tiempo=document.querySelector('.tiempo'),
      $fecha=document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia= f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diasSemana = f.getDay();

    dia= ('0' + dia).slice(-2);
    mes= ('0' + mes).slice(-2);
    
    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;
    
    let semana =['DOMINGO', 'LUNES','MARTES','MIÉRCOLES','JUEVES','VIERNES','SÁBADOS'];
    let showSemana = semana[diasSemana];

    $fecha.innerHTML = `${showSemana} ${dia}-${mes}-${anio}`;
}
setInterval(() => {
    digitalClock()
}, 1000);

const inicio = document.getElementById('inicio');
const home = document.getElementById('home');
home.classList.add('showHome');

const m1 = document.getElementById('m1');
const form = document.getElementById('form');
const formacion = document.getElementById('formacion');

const m2 = document.getElementById('m2');
const expe = document.getElementById('expe');
const experiencia = document.getElementById('experiencia');

const m3 = document.getElementById('m3')
const hab = document.getElementById('hab');
const habilidades = document.getElementById('habilidades');

const m4 = document.getElementById('m4')
const serv = document.getElementById('serv');
const servicios = document.getElementById('servicios');

const m5 = document.getElementById('m5')
const proy = document.getElementById('proy');
const proyectos = document.getElementById('proyectos');

const m6 = document.getElementById('m6')
const cont = document.getElementById('cont');
const contacto = document.getElementById('contacto');

const hamb = document.getElementById('hamb');
const menu = document.getElementById('menu');

inicio.addEventListener('click', () => {
    home.classList.add('showHome');
    formacion.classList.remove('showForm');
    experiencia.classList.remove('showExpe');
    habilidades.classList.remove('showHab');
    servicios.classList.remove('showServ');
    proyectos.classList.remove('showProy');
    contacto.classList.remove('showCont');
    menu.classList.remove('showMenu');
});

form.addEventListener('click', () => {
    formacion.classList.add('showForm');
    home.classList.remove('showHome');
    experiencia.classList.remove('showExpe');
    habilidades.classList.remove('showHab');
    servicios.classList.remove('showServ');
    proyectos.classList.remove('showProy');
    contacto.classList.remove('showCont');
});
m1.addEventListener('click', () => {
    formacion.classList.add('showForm');
    home.classList.remove('showHome');
    experiencia.classList.remove('showExpe');
    habilidades.classList.remove('showHab');
    servicios.classList.remove('showServ');
    proyectos.classList.remove('showProy');
    contacto.classList.remove('showCont');
    menu.classList.remove('showMenu');
});

expe.addEventListener('click', () => {
    experiencia.classList.add('showExpe');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    habilidades.classList.remove('showHab');
    servicios.classList.remove('showServ');
    proyectos.classList.remove('showProy');
    contacto.classList.remove('showCont');
});
m2.addEventListener('click', () => {
    experiencia.classList.add('showExpe');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    habilidades.classList.remove('showHab');
    servicios.classList.remove('showServ');
    proyectos.classList.remove('showProy');
    contacto.classList.remove('showCont');
    menu.classList.remove('showMenu');
});

hab.addEventListener('click', () => {
    habilidades.classList.add('showHab');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    experiencia.classList.remove('showExpe');
    servicios.classList.remove('showServ');
    proyectos.classList.remove('showProy');
    contacto.classList.remove('showCont');
});
m3.addEventListener('click', () => {
    habilidades.classList.add('showHab');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    experiencia.classList.remove('showExpe');
    servicios.classList.remove('showServ');
    proyectos.classList.remove('showProy');
    contacto.classList.remove('showCont');
    menu.classList.remove('showMenu');
});


serv.addEventListener('click', () => {
    servicios.classList.add('showServ');
    habilidades.classList.remove('showHab');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    experiencia.classList.remove('showExpe');
    proyectos.classList.remove('showProy');
    contacto.classList.remove('showCont');
});
m4.addEventListener('click', () => {
    servicios.classList.add('showServ');
    habilidades.classList.remove('showHab');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    experiencia.classList.remove('showExpe');
    proyectos.classList.remove('showProy');
    contacto.classList.remove('showCont');
    menu.classList.remove('showMenu');
});

proy.addEventListener('click', () => {
    proyectos.classList.add('showProy');
    servicios.classList.remove('showServ');
    habilidades.classList.remove('showHab');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    experiencia.classList.remove('showExpe');
    contacto.classList.remove('showCont');
});
m5.addEventListener('click', () => {
    proyectos.classList.add('showProy');
    servicios.classList.remove('showServ');
    habilidades.classList.remove('showHab');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    experiencia.classList.remove('showExpe');
    contacto.classList.remove('showCont');
    menu.classList.remove('showMenu');
});

cont.addEventListener('click', () => {
    contacto.classList.add('showCont');
    proyectos.classList.remove('showProy');
    servicios.classList.remove('showServ');
    habilidades.classList.remove('showHab');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    experiencia.classList.remove('showExpe');
    
});
m6.addEventListener('click', () => {
    contacto.classList.add('showCont');
    proyectos.classList.remove('showProy');
    servicios.classList.remove('showServ');
    habilidades.classList.remove('showHab');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    experiencia.classList.remove('showExpe');
    menu.classList.remove('showMenu');
});

hamb.addEventListener('click', () => {
    menu.classList.add('showMenu');
    proyectos.classList.remove('showProy');
    servicios.classList.remove('showServ');
    habilidades.classList.remove('showHab');
    home.classList.remove('showHome');
    formacion.classList.remove('showForm');
    experiencia.classList.remove('showExpe');
    contacto.classList.remove('showCont');
});

function main () {
	$('.mresponsive').click(function(){
		$(this).menu('.menu').slideToggle();
	});
}