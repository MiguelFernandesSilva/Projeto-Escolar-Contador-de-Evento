'use strict'

/* CONTADOR */
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {

    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
};

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    const contar = () => {
        if (tempo <= 0) {
            atualizar(0);
            pararContagem();
            return;
        }
        atualizar(tempo);
        tempo--;
    };

    const id = setInterval(contar, 1000);
};

const tempoRestante = () => {
    const dataEvento = new Date('2026-10-09 12:00:00');
    const hoje = Date.now();

    return Math.floor((dataEvento - hoje) / 1000);
};

const elementoContador = document.getElementById('dias');

if (elementoContador) {
    contagemRegressiva(tempoRestante());
}

/* CARROSSEL */
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');

let imageIndex = 0;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselBg = document.getElementById('carouselBg');

function updateCarousel(){
    slides.forEach(slide => {
        slide.classList.remove('active-img')
    });
    slides[imageIndex].classList.add('active-img');
}
function previousSlide(){
    imageIndex--;
    if(imageIndex < 0){
        imageIndex = slides.length - 1;
    }
    console.log(imageIndex);
    updateCarousel();
}
function nextSlide(){
    imageIndex++;
    if(imageIndex >= slides.length){
        imageIndex = 0;
    }
    console.log(imageIndex);
    updateCarousel();
}

prevBtn.addEventListener('click', previousSlide);
nextBtn.addEventListener('click', nextSlide);