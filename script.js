var corpo = document.querySelector("body");
var texto = document.querySelector("h1");

function btnred(){
    corpo.style.background="red";
    texto.style.textTransform="uppercase";
    texto.innerHTML="você clicou no vermelio";
}
function btnblue(){
    corpo.style.background="blue";
    texto.style.textTransform="uppercase";
    texto.innerHTML="você clicou no azul";
}
function voltar(){
    corpo.style.background="white";
    texto.style.textTransform="lowercase";
    texto.innerHTML="selecione a cor";
}