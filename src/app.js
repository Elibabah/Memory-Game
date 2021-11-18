let click = false; // boleano
//declaración de funciones

//cartas
let carta1;
let id1;
let carta2;
let id2;

//contador

let Player1 = "";
let Player2 = "";
let turn = true;



// Objeto global desde HTML
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
            soundGiro() //sonido al giro

        } else {
            //segundo click con otra carta y su valor, carta 2 y valor 2
            carta2 = cardName
            id2 = cardId
            click = false;
            console.log("segundo click a: " + carta2 + " " + id2)
            soundGiro() //sonido al giro
                //Comparar si la carta1 == carta2 es un match
            console.log(carta1)

            //------------ MATCH vs NO MATCH --------------------------//

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
                    winner(Player1, Player2) // activar función ganador
                } else {
                    console.log("turno Jugador 1");
                    turn = true;
                    Player2++;
                    console.log(Player2);
                    document.getElementById("P2").innerHTML = Player2;
                    winner(Player1, Player2) // activar función ganador
                }
                //Meter aquí función de sonido

            } else {
                console.log("no es match")

                //Set time out para devolver cartas
                setTimeout(() => {
                    cardFlip.style.transform = ""; //volver carta2
                    cardFlip1.style.transform = ""; //volver carta1
                    soundVolver() // sonido devolver cartas
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

//-------------- Función replay limpiar puntajes ---------------//

export let replayScore = () => {
    console.log("inicia replay: ", Player1, Player2)
    Player1 = ""
    Player2 = ""
    console.log("OK limpiar score")
    document.getElementById("P1").innerHTML = Player1;
    document.getElementById("P2").innerHTML = Player2;
};

// ---------------------- Función sonidos -----------------------//

//------ Función sonido al giro -----//
let soundGiro = () => {
    let girar = document.getElementById("girar")
    girar.play()
    girar.volume = 1
};

//-- Función sonido al volver card --//
let soundVolver = () => {
    let devolver = document.getElementById("devolver")
    devolver.play()
    devolver.volume = 1
};



//------------ Funciones ganador ------------//

let winner = (Player1, Player2) => {
    setTimeout(() => {
            if (Player1 + Player2 == 9) {
                if (Player1 > Player2) {
                    //stopFondo(); Detener música fondo
                    //playwinner(); Música ganador
                    alert("Felicidades, " + document.getElementById("user1").value);
                } else {
                    if (Player1 > Player2) {
                        //stopFondo();
                        //playwinner();
                        alert("Felicidades, " + document.getElementById('user2').value)
                    } else {
                        //stopFondo();
                        //playEmpate();
                        alert("Empataron")
                    }
                }
            }
        },
        200)
}