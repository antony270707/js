var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i < paciente.length ; i++){

    var paciente = paciente[i];

    var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso invalido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso invalido!";
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura invalida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura invalids!"
}

if( alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
}