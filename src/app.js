//import { getCardsfromAPI } from "./data.js";


// ---------- Registro usuarios ---------- //



//-------------- Botón entrar ----------//
let play = document.getElementById("entry")

play.addEventListener("click", () => {
    document.getElementById("screen-users").hidden = true;
    document.getElementById("game-screen").hidden = false;
});

let userName1 = document.getElementById("player01")
userName1.innerHTML = document.getElementById("user1").value + " ";

let userName2 = document.getElementById("player02")
userName2.innerHTML = document.getElementById("user2").value + " ";