
const url = "https://api.nasa.gov/planetary/apod?api_key=ohkETHmDrbJqL5WXcERNIRcF0vRbKHXVbs2QyVL5&count=15"

//funcion con async y await
async function listaImagenes(){
    try{
        let fetchImagenes = await fetch(url)
        let datosImagenes = await fetchImagenes.json()

        console.log(datosImagenes)
        const card = document.querySelector("[data-ul]")

        datosImagenes.forEach(elemento => {

            const contenido=
                `<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
        </li>
            `
            card.innerHTML = card.innerHTML + contenido

        })

    }
    catch(error) {
        console.log(error)
    }
}

listaImagenes()


// funcion con fetch y catch
/*function listaImagenes(){
    // promis o se cumple la promesa o no se cumple la promesa
    fetch (url)
        // se ejecuta si la promesa se cumple
        .then(response => response.json())
        .then(datosImagenes =>{
            console.log(datosImagenes)

            const card = document.querySelector("[data-ul]")

            datosImagenes.forEach(elemento => {

            const contenido=`<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
        </li>
            `
                card.innerHTML = card.innerHTML + contenido

            })
        })
        // se ejecuta si la promesa no se cumple
        .catch(error => console.log(error))

}

listaImagenes() */


