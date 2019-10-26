/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* dmv deze micro interactie wordt de zoekbalk groter en wordt deze ook van kleur veranderd */

var input = document.querySelector('.zoeken input');

input.addEventListener('click', function () {
    input.classList.toggle('showsearch');
});
