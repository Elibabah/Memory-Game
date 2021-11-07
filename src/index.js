//-----------//> Eventos DOM. Obtener los valores de búsqueda para procesarlos en app.js <//------------ //


// Importación de módulos. Recibe el EXPORT de data.js
import { getCardsfromAPI } from "./data.js";

let click = false; // boleano
//declaración de funciones

//cartas
let carta1;
let id1;
let carta2;
let id2;

//contador
let Player1 = 0;
let Player2 = 0;
let turn = true;



// Función global desde script index.html
window.gameTest = {
    checkMatch: (cardName, cardId) => {
        //Función voltear cartas
        let cardFlip = document.getElementById(cardId + "_flip") //carta 2
        console.log(cardName, cardId)

        let cardFlip1 = document.getElementById(id1 + "_flip"); // carta 1


        cardFlip.style.transform = "rotateY(180deg)" // Efecto de volteo
        console.log(cardName, cardId)


        //------------ funciones de matching cards -----------//

        if (click == false) { //guardar datos en variable booleano para 2 click true false
            //primer click con una carta1 y valor1
            carta1 = cardName
            id1 = cardId
            click = true;
            console.log("primer click a " + carta1 + " " + id1)
        } else {
            //segundo click con otra carta y su valor, carta 2 y valor 2
            carta2 = cardName
            id2 = cardId
            click = false;
            console.log("segundo click a: " + carta2 + " " + id2)

            //Comparar si la carta1 == carta2 es un match
            console.log(carta1)
            if (carta1 == carta2 && id1 != id2) { // match en el mismo nombre pero con diferente id
                // comparar si la carta1 == carta2 es un match
                console.log("es un match")

                // Limpiar valores
                carta1 = null;
                id1 = null;
                carta2 = null;
                id2 = null;

                // Desactivar tarjetas matcheadas
                cardFlip.removeAttribute("onclick"); //segunda carta
                cardFlip1.removeAttribute("onclick"); // primera carta

                // Guardar puntaje Jugador 1
                if (turn) {
                    console.log("turno Jugador 2")
                    turn = false;
                    Player1++;
                    console.log(Player1)
                    document.getElementById("P1").innerHTML = Player1;
                } else {
                    console.log("turno Jugador 1");
                    turn = true;
                    Player2++;
                    console.log(Player2);
                    document.getElementById("P2").innerHTML = Player2;
                }
                //Meter aquí función de sonido

            } else {
                console.log("no es match")
                    //Set time out para devolver cartas
                setTimeout(() => {
                    cardFlip.style.transform = ""; //volver carta2
                    cardFlip1.style.transform = ""; //volver carta1
                }, 1010); // tiempo del setTimeout

                // limpiar valores
                carta1 = null;
                id1 = null;
                carta2 = null;
                id2 = null;
            }
        }

    }
}