//-----------//> Eventos DOM. Obtener los valores de búsqueda para procesarlos en app.js <//------------ //


// Importación de módulos. Recibe el EXPORT de data.js
import { getCardsfromAPI } from "./data.js";

let click = false; // boleano
//declaración de funciones
let carta1;
let id1;
let carta2;
let id2;


window.gameTest = {
    testScope: (cardName) => {
        console.log("click en card: " + cardName)
            //match(nombre == nombre)
    },
    checkMatch: (cardName, cardId) => { // boleano
        //voltear cartas
        let cardFlip = document.getElementById(cardId + "_flip")
        console.log(cardName, cardId)

        cardFlip.style.transform = "rotateY(180deg)"


        //funciones de matching cards

        if (click == false) { //guardar datos en variable boleano para 2 click true false
            //primer click con una carta1 y valor1
            carta1 = cardName
            id1 = cardId
            click = true;
            //alert("primer click a " + carta1 + " " + id1)
        } else {
            //segundo click con otra carta y su valor, carta 2 y valor 2
            carta2 = cardName
            id2 = cardId
                //alert("segundo click a: " + carta2 + " " + id2)
            click = false

            if (carta1 == carta2 && id1 != id2) { //match en el mismo nombre pero con diferente id
                // comparar si la carta1 == carta2 es un match
                //alert("es un match")
                carta1 = null;
                id1 = null;
                carta2 = null;
                id2 = null; //Aquí se puede hacer función para sonido
            } else {
                //alert("no es match")
                cardFlip.style.transform = "" //volver carta1
                let cardFlip1 = document.getElementById(id1 + "_flip")
                cardFlip1.style.transform = "" //volver carta2
                carta1 = null;
                id1 = null;
                carta2 = null;
                id2 = null;
            }
        }
    }
}



//definir un turno que contiene 2 clicks

//si la carta1 != carta 2 no es un match