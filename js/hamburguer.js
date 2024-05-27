"use strict";
document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina (){

    
/*menu responsive*/
    document.querySelector(".botonMenu").addEventListener("click", toggleMenu);
    
    function toggleMenu() {
        document.querySelector(".nav_responsive").classList.toggle("show_responsive_menu");
    } 
}