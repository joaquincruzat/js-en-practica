//Formulario//
let form = document.getElementById("formulario");
formulario.addEventListener("submit", function(event){
    event.preventDefault ()
    limpiarErrores ()
    let nombreCompleto = document.querySelector(".nombre-completo").value
    let Asunto = document.querySelector(".asunto").value
    let Mensaje = document.querySelector(".mensaje").value

    let resultado = validar (nombreCompleto, Asunto, Mensaje)

    if (resultado == true){
        exito ();
    }
})

function limpiarErrores () {
    document.querySelector(".resultado").innerHTML = ""
    document.querySelector(".error-nombre").innerHTML = ""
    document.querySelector(".error-asunto").innerHTML = ""
    document.querySelector(".error-mensaje").innerHTML = ""
}

function exito (){
    document.querySelector(".resultado").innerHTML = "¡Mensaje enviado con éxito!"
}

function validar (nombre, asunto, mensaje) {
    let validacionExito = true;
    let validacionNombre = /[a-zA-z]/gim
 
       if(validacionNombre.test(nombre) == false){
        document.querySelector(".error-nombre").innerHTML = "Ingrese un nombre válido"
        validacionExito = false;
    }
    let validacionAsunto = /[a-zA-z]/gim

    if(validacionAsunto.test(asunto) == false){
        document.querySelector(".error-asunto").innerHTML = "Ingrese un asunto válido"
        validacionExito = false;
    }
    let validacionMensaje = /[a-zA-z]/gim

    if(validacionMensaje.test(mensaje) == false){
        document.querySelector(".error-mensaje").innerHTML = "Ingrese un mensaje válido"
        validacionExito = false;
    }

    return validacionExito
}
//Paleta de Colores//

let boxRed = document.getElementById("boxRed");
boxRed.addEventListener('click', function(){
document.querySelector(".boxColor").setAttribute ("style", "background-color:red");
});

let boxOrange = document.getElementById("boxOrange");
boxOrange.addEventListener('click', function(){
document.querySelector(".boxColor").setAttribute ("style", "background-color:orange");
});

let boxYellow = document.getElementById("boxYellow");
boxYellow.addEventListener('click', function(){
document.querySelector(".boxColor").setAttribute ("style", "background-color:yellow");
});

let boxGreen = document.getElementById("boxGreen");
boxGreen.addEventListener('click', function(){
document.querySelector(".boxColor").setAttribute ("style", "background-color:green");
});

let boxCyan = document.getElementById("boxCyan");
boxCyan.addEventListener('click', function(){
document.querySelector(".boxColor").setAttribute ("style", "background-color:cyan");
});

let boxMagenta = document.getElementById("boxMagenta");
boxMagenta.addEventListener('click', function(){
document.querySelector(".boxColor").setAttribute ("style", "background-color:Magenta");
});

//Calculadora//

let activarCalculadora = document.getElementById ("activarCalculadora");
activarCalculadora.addEventListener ("click", function calculadora () {
    let num1 = parseInt(prompt("Ingrese un número"));
    let num2 = parseInt(prompt("Ingrese otro número"));
    let resultadoSuma = num1+num2;
    let resultadoResta = num1-num2;
   document.querySelector(".resultadoOperacion").innerHTML= ("El resultado de la suma entre los dos números es: "+resultadoSuma+", y la resta es: "+resultadoResta);
   if (resultadoResta < 0) {
    document.querySelector(".resultadoOperacion").innerHTML= ("El resultado de la suma entre los dos números es: "+resultadoSuma+", y la resta es: 0");
   } 
})


