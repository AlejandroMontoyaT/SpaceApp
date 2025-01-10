//funcion sincrona
function uno (dos) {
    console.log("uno")
    setTimeout(dos, 2000)

}

function dos (tres) {
    console.log("dos")
    setTimeout(tres,2000)
}

function tres (cuatro) {
    console.log("tres")
    setTimeout(cuatro,2000)

}

function cuatro (cinco) {
    console.log("cuatro")
    setTimeout(cinco,2000)

}

function cinco() {
    console.log("cinco")
}


setTimeout(() => uno(dos),5000)

//calback hell
setTimeout(() => uno(
    () => dos(
        () => tres(
            () => cuatro(
                () => cinco(),)))), 3000);

//funcion asincrona

 setTimeout(() => uno (dos), 5000);


//funcion anonima
const nombre = function (){
    console.log("nombre");
}
nombre()

//funcion Arrow function
const persona = () =>  console.log("alejandro")
persona();

() => console.log()








