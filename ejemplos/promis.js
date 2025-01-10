
//el fetch api es una forma moderna de hacer peticiones http retorna una promesa


const solicitud = new Promise ((resolve, reject) => {
    const response = "resolve"

    if (response === "resolve") {
        resolve("la promea se cumplio")

    }else{
        reject("error")
    }
})

console.log(solicitud)  //Promise {<resolved>: undefined}