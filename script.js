/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* dmv deze micro interactie wordt het hartje groter en gekleurd (class = hartjegroot) zodra je op button hartje drukt */


/*var hartje = document.querySelector('button.hartje');
var notificatie = document.querySelector('nav ul li span');

hartje.addEventListener('click', function () {
    hartje.classList.toggle('hartjegroot');
    hartje.classlist.toggle('showgetal')
});
*/


var hartje = document.querySelectorAll("button.hartje");

if (hartje) {
    for (var i = 0; i < hartje.length; i++) {
        hartje[i].addEventListener("click", addDownload);
    }
}

function addDownload(event) {
    console.log("hartje");
    var hartje = event.target; // met event target, target ik de daadwerkelijke aangeklikte button.
    hartje.classList.toggle("hartjegroot");
    var notificatie = document.querySelector('nav ul li span');
    notificatie.classList.toggle("showgetal");
}