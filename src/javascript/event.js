'use strict'

// REDIRECIONAMENTOS
const place = document.getElementById('place');
const podpah = document.getElementById('podpahYoutube');
const bda = document.getElementById('bdaTwitch');

place.addEventListener('click', () => {
    window.open('https://www.google.com/maps/place/Vale+do+Anhangaba%C3%BA/@-23.545185,-46.6379912,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59002bfa64eb:0x4dab736c516bd59e!8m2!3d-23.5451899!4d-46.6354163!16s%2Fg%2F11zwqxvfjq?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D', 
                '_blank');
});
podpah.addEventListener('click', () => window.open('https://www.youtube.com/watch?v=XUGYAJtNv0U', '_blank'));
bda.addEventListener('click', () => window.open('https://www.twitch.tv/batalhadaaldeia/schedule?lang=pt-br', '_blank'));