export function expresionesRegulares(input){
    const tipoDeInput = input.dataset.tipo;
    const reg = expresiones[tipoDeInput];
    input.setAttribute("pattern",reg);
}

const expresiones = {
    nombreCompleto: "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$",

    email: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}",

    asunto: "^[s\\S ][^<>${}]{0,100}",

    mensaje: "[s\\S]{0,500}",
}