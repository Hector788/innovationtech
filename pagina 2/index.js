//arrow-up
let ubicacionInicio = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento = window.pageYOffset;
    if (ubicacionInicio >= desplazamiento) {
        document.getElementById('arrowup').style.top = '0';
    } else {
        document.getElementById('arrowup').style.top = '-50px';

    }
    ubicacionInicio = desplazamiento;
}