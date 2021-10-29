//---//> Obtener aquí los datos del JSON local y luego exportarlos para usarlos en el módulo app.js <//----//


// Exportación de módulos
export let getCardsfromAPI = (tarjetaParaBuscar) => {}




// traer la data del JSON con un fetch
fetch("../data/memory.json")
    .then((response) => response.json()) // traer el json
    .then((data) => iterarTarjetas(data)) // traer data y dar a variable
    .catch((error) => console.log(error)) // atrapar error

// variable del área de tarjetas
let iterarTarjetas = (data) => {
    console.log(data.memory_Game) // consologear el data del JSON
}