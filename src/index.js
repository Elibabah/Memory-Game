import { getCardsfromAPI } from "./data.js"; //Importación de módulos. Recibe el EXPORT de data.js
getCardsfromAPI();

/*let color1 = document.getElementById("player1")
let color2 = document.getElementById("player2")

color1.style.color = "#E36477";
color2.style.color = "#E36477";*/

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


// ------- sonido hover cartas --------------- //
/*let seleccionar = document.getElementsByClassName(".card-cover")

seleccionar.addEventListener("hover", () => {
    let sobrevolar = document.getElementById("")
    sobrevolar.play()
    ticToc.volume = 1
});
seleccionar()*/