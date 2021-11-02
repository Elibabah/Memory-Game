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
let iterarTarjetas = (data) => { // iterar el objeto
    console.log(data.memory_Game) // consologear el data del JSON
    for (const ficha of data.memory_Game) { // iterar dinámicamente para entrar al objeto
        console.log(ficha.name) // consologear la entrada al objeto
        mazo.innerHTML += // imprimir en HTML
            `
            <div class="card-container">
                <div class="cardPortrait" id="card"> 
                    <div class="card-cover"></div> 
                    <div class="card-back" id='${ficha.name}'></div>
                </div>
            </div>
        `

        // declaración para dar estilos dinámicamente por ID-nombre a la imagen oculta        
        let caraCard = document.getElementById(`${ficha.name}`)
        caraCard.style.backgroundImage = "url(" + ` ${ficha.image}` + ")"
        caraCard.style.backgroundSize = "cover"

        // Función para voltear tarjeta al click
        const cardPortrait = document.getElementById("card")
        console.log(card) // OK, el ID "card" lo trae cada imagen

        cardPortrait.addEventListener("click", flipCard)
        console.log(addEventListener, flipCard) //OK, sí me da las función escuchador y flipCard
            /*cardPortrait.style.transform = "rotateY(180deg)"*/

        function flipCard() {
            // AQUÍ ESTÁ EL PROBLEMA: el toggle no me devuelve la clase flipCard a todas las tags cardPortrait de c/ficha; sólo a la primera
            cardPortrait.classList.toggle("flipCard");
        }
    }
}