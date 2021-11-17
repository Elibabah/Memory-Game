import { getCardsfromAPI } from "./data.js"; //Importación de módulos. Recibe el EXPORT de data.js
getCardsfromAPI();



//------------------- ENTRY BUTTON ----------------//
let play = document.getElementById("entry")

play.addEventListener("click", () => {
    document.getElementById("screen-users").hidden = true;
    document.getElementById("game-screen").hidden = false;

    //----------- Registro usuarios -----------//
    let userName1 = document.getElementById("player01")
    userName1.innerHTML = document.getElementById("user1").value + " ";

    let userName2 = document.getElementById("player02")
    userName2.innerHTML = document.getElementById("user2").value + " ";
});


//----------------- REPLAY BUTTON ------------------//

let volverJugar = document.getElementById("replay")

volverJugar.addEventListener("click", getCardsfromAPI);


// -------------- RESET BUTTON ---------------------//

let reset = document.getElementById("reset")

reset.addEventListener("click", () => {
    location.reload();
});
reset()