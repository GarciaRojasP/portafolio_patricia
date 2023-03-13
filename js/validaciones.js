export const validarFormulario = (inputTipo) => {
    const input = inputTipo.target;
    const tipoDeInput = input.dataset.tipo;
    
    if(input.validity.valid){
        input.parentElement.classList.remove("formulario__grupo-incorrecto");
        input.parentElement.classList.add("formulario__grupo-correcto");
        input.parentElement.querySelector(".formulario__validacion-estado").classList.remove("fa-circle-xmark");
        input.parentElement.querySelector(".formulario__validacion-estado").classList.add("fa-circle-check");
        input.parentElement.querySelector(".formulario__input-error").classList.remove("formulario__input-error-activo");
    }else{
        input.parentElement.classList.add("formulario__grupo-incorrecto");
        input.parentElement.classList.remove("formulario__grupo-correcto");
        input.parentElement.querySelector(".formulario__validacion-estado").classList.remove("fa-circle-check");
        input.parentElement.querySelector(".formulario__validacion-estado").classList.add("fa-circle-xmark");
        input.parentElement.querySelector(".formulario__input-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
    
}

const tipoDeErrores =[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
]

const mensajesDeError = {
    nombreCompleto: {
        valueMissing: "Ingrese su nombre por favor",
        patternMismatch: "Solo se acepta letras",
    },
    email: {
        valueMissing: "Ingrese algun correo electrónico",
        typeMismatch: "El correo no es válido",
        patternMismatch: "Se permite ._%+-,no letras mayúsculas",
    },
    asunto: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Máximo se aceptan 50 caracteres",
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Máximo se aceptan 300 caracteres",
    },
}

function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            console.log(tipoDeInput,error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje
}