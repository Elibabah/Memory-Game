//---//> Obtener aquí los datos del JSON local y luego exportarlos para usarlos en el módulo app.js <//----//


// Exportación de módulos
export let getCardsfromAPI = (tarjetaParaBuscar) => {}


// traer la data del JSON con un fetch
fetch("../data/memory.json")
    .then((response) => response.json()) // traer el json
    .then((data) => iterarTarjetas(data)) // traer data y dar a variable
    .catch((error) => console.log(error)) // atrapar error

// variable para el área de juego
let mazo = document.getElementById("juego") // ID del HTML donde se imprimirá la iteración


// variable para el área de tarjetas
let iterarTarjetas = (data) => {
    console.log(data.memory_Game) // consologear el data del JSON
    for (const ficha of data.memory_Game) {
        console.log(ficha.name)
        mazo.innerHTML += // imprimir en HTML
            ` 
        <div class="book-container">
            <div class="book-portrait">
                <div class="book-cover">${ficha.name}</div>
                <div class="book-back">back</div>
            </div>
        </div>
        `
    }
}