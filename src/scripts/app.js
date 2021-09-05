
//document.body.style.backgroundImage = "url('../images/layout/background.jpg')";

//import '../images/layout/background.jpg';

import anime from 'animejs/lib/anime.es.js';

require('animejs');
import Vue from 'vue';
require('bootstrap');
require('jquery');

let z = document.querySelectorAll('.z');

window.addEventListener('load', function () {
    anime({
        targets: [z],
        translateX: -200,
        //endDelay: 1000,
        //direction: 'alternate',
        //left: '100px',
        //color:'#544',
        opacity: 1,
        color: '#892727',
        easing: 'easeInOutQuad',
        delay: anime.stagger(300, {start: 500})

        //round: 1,
        //cycles: 1500,

        /*update: function () {
            document.querySelector('#result').innerHTML = bat.charged;
        }*/
    });

    /* anime({
         targets: [img],
         //width: '20%',
         //skew:'0deg',
         rotate: '1turn',
         scale: 1,
         easing: 'easeInOutQuad',
         //direction: 'alternate',
     });
     */

    /* anime({
         targets: [elemOne],
         translateY:[
             { value:30, duration: 500, delay: 500},
             { value:20, duration: 500, delay: 500},
         ],
         loop: true
     });*/


})


