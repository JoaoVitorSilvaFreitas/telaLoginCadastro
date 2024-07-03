var btnSignin = document.querySelector("#entrar");
var btnSignup = document.querySelector("#criarConta");

var main = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   main.className = "entrar-js"; 
});

btnSignup.addEventListener("click", function () {
    main.className = "criarConta-js";
})