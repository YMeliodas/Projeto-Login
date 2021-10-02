const USER_DB=  "volibear";
const PASS_DB=  "deusraio";

var user = document.getElementById("login")
var pass = document.getElementById("senha")

var button = document.getElementById("btn_entrar")

button.addEventListener("click", function(){
    
    if(user.value == USER_DB && pass.value == PASS_DB) {
        window.location.href = "inicio.html";
    }

})