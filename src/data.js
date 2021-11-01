//---//> Obtener aquí los datos del JSON local y luego exportarlos para usarlos en el módulo app.js <//----//
alert("connected")

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
let iterarTarjetas = (data) => { // iterar el objeto
    console.log(data.memory_Game) // consologear el data del JSON
    for (const ficha of data.memory_Game) { // iterar dinámicamente para entrar al objeto
        console.log(ficha.name) // consologear la entrada al objeto
        mazo.innerHTML += // imprimir en HTML
            `
            <div class="card-container">
            <div class="card-portrait">
            <div class="card-cover">FRONT</div> 
            <div class="card-back" id='${ficha.name}'>back:
            <h5>${ficha.name}</h5>
            <p class="value" id='${ficha.name}_value'</p>
            </div>
            </div>
        </div>
        `
    }
}