import { animateBars } from "./bars-menu.js";
import { expresionesRegulares } from "./expresionesRegulares.js";
import { autoheight } from "./textarea.js";
import { validarFormulario} from "./validaciones.js";

/*Animaciones bars-menu*/
document.querySelector(".bars-menu").addEventListener("click", animateBars);

/*Llamando todos los inputs*/
const inputs = document.querySelectorAll("input,textarea");

inputs.forEach((input) => {
    
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
    input.addEventListener("focus",(input) =>{
        expresionesRegulares(input.target);
    })

    const formulario = document.querySelector(".formulario");
    const btn = document.querySelector(".enviar");
    btn.disabled = true;

    formulario.addEventListener("input",() => {
        btn.disabled = !formulario.checkValidity();
    })
});


/*Funcion textarea*/
document.querySelector(".textarea").addEventListener("input",autoheight,false);
