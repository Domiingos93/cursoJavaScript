//declaração de variáveis
var nome = "Glauco";
var sobreNome = "Domiingos Bezerra";

console.log("Instrução solta em um arquivo JS");

//declaração de função
function exibirNomeConsole(){
    console.log("exibir nome: " + nome);
}

function exibirNomeCompleto(){
    console.log("Nome Completo: " + nome + " " + sobreNome);
}

function eventoClick(){
    alert("Você clicou em um botão!");
}

//Chamadas de função
exibirNomeConsole();