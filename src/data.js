import { replayScore } from "./app.js"

console.log(replayScore)


// variable para el área de juego
let mazo = document.getElementById("juego") // ID del HTML donde se imprimirá la iteración
    // Exportación de módulos

export let getCardsfromAPI = () => {
    console.log("resetear")
    mazo.innerHTML = ""; // limpiar cartas

    replayScore() // activar función Resetear Score


    // traer la data del JSON con un fetch
    fetch("../data/memory.json")
        .then((response) => response.json()) // traer el json
        .then((data) => iterarTarjetas(data)) // traer data y dar a variable
        .catch((error) => console.log(error)) // atrapar error
};


// variable para el área de tarjetas
let iterarTarjetas = (data) => { // iterar el objeto
    console.log(data.memory_Game) // consologuear el data del JSON

    //SORT desordenar el array
    //  data.memory_Game.sort(function() { return 0.5 - Math.random() });

    for (const ficha of data.memory_Game) { // iterar dinámicamente para entrar al objeto
        console.log(ficha.name) // consologuear la entrada al objeto
        mazo.innerHTML += // imprimir en HTML
            `
            <div class="card-container">
                <div class="cardPortrait" id='${ficha.id}_flip' onclick="checkClick('${ficha.name}', '${ficha.id}')"> 
                    <div class="card-cover"></div> 
                    <div class="card-back" id='${ficha.id}'></div>
                </div>
            </div>
        `

        // declaración para dar estilos dinámicamente por ID-nombre a la imagen oculta        
        let caraCard = document.getElementById(`${ficha.id}`)
        caraCard.style.backgroundImage = "url(" + ` ${ficha.image}` + ")"
        caraCard.style.backgroundSize = "cover"
    }
}