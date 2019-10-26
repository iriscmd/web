/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* dmv van deze micro interactie draait de download knop en wordt deze ook van kleur veranderd */

var bewaar = document.querySelector('button.bewaar');

bewaar.addEventListener('click', function () {
    bewaar.classList.toggle('bewaarclick');
});
