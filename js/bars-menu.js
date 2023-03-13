const linea1_bar = document.querySelector(".bars-menu__linea1");
const linea2_bar = document.querySelector(".bars-menu__linea2");
const linea3_bar = document.querySelector(".bars-menu__linea3");
/*const menu_link = document.querySelector(".menu_link");*/

const menu = document.querySelector(".menu");

export function animateBars(){

    linea1_bar.classList.toggle("bars-menu__linea1--active");
    linea2_bar.classList.toggle("bars-menu__linea2--active");
    linea3_bar.classList.toggle("bars-menu__linea3--active");

    menu.classList.toggle("menu--active");

}
