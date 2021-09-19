
//document.body.style.backgroundImage = "url('../images/layout/background.jpg')";
//import '../images/layout/background.jpg';

import anime from 'animejs/lib/anime.es.js';
require('animejs');

import Vue from 'vue';
require('bootstrap');
require('jquery');

let textAnimation = document.querySelectorAll('.text-item--animation');

window.addEventListener('load', function () {
    anime({
        targets: [textAnimation],
        translateX: -200,
        //endDelay: 1000,
        //direction: 'alternate',
        //left: '100px',
        //color:'#544',
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: anime.stagger(300, {start: 500})
    });
})





