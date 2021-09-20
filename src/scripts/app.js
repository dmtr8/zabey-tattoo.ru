
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

//page index block services
let block = document.querySelectorAll('.block-decor');
block.forEach(function (i){
    i.addEventListener('mouseover', function (e) {
        let current = i.closest('div').querySelector('.bg-hover');
        current.style.display = "block"
    });
    i.addEventListener('mouseout', function (e) {
        let current = i.closest('div').querySelector('.bg-hover');
        current.style.display = "none"
    });
});

//page index block masters
let but = document.querySelectorAll('.master');
but.forEach(function (elem){
    elem.addEventListener('mouseover', function (e) {
        let cur = elem.closest('div').querySelector('.master__button');
        cur.style.display = "block"
    });
    elem.addEventListener('mouseout', function (e) {
        let cur = elem.closest('div').querySelector('.master__button');
        cur.style.display = "none"
    });
});




