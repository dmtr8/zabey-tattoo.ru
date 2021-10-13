
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
        opacity: 1,
        easing: 'easeInOutQuad',
        delay: anime.stagger(300, {start: 500})
    });
})

//page index block services
let block = document.querySelectorAll('.services__block-decor');
block.forEach(function (i){
    i.addEventListener('mouseover', function (e) {
        let current = i.closest('div').querySelector('.services__circle');
        current.style.display = "block"
    });
    i.addEventListener('mouseout', function (e) {
        let current = i.closest('div').querySelector('.services__circle');
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

/*
let but = document.querySelectorAll('.master');
let mB = document.querySelectorAll('.master__button');
let clW = document.documentElement.clientWidth;

but.forEach(function (elem){
    let cur = elem.closest('div').querySelector('.master__button');
    if (clW >= 993){
        elem.addEventListener('mouseover', function (e) {
            cur.style.display = "block"
        });
        elem.addEventListener('mouseout', function (e) {
            cur.style.display = "none"
        });
    }else {
        cur.style.display = "block";
    }
});
*/

/*

let menuLink = document.querySelectorAll('.nav-link.menu-link');
if ( document.URL !== "http://localhost:3000/" ) {
    for (let i = 0; i <= menuLink.length; i++) {
        menuLink[i].style.color = '#3f5791';
    }
}
*/

let date = new Date();
let footerDate = document.querySelector('.footer__date').innerHTML = '2020 - ' + date.getFullYear();

