// #1

const nome = 'Mariana';

console.log(nome, " nasceu em 2000");
console.log("Em 2019 " + nome + " começou a programar");
console.log(`Em 2020 ${nome} ingressou na faculdade`);
console.log(`Em 2022 como programadora, ${nome} conquistou seu primeiro emprego`);

// #2

const meuAnoDeNascimento = 1990;
const anoAtual = 2022;

console.log(meuAnoDeNascimento, anoAtual);

minhaIdade = anoAtual - meuAnoDeNascimento;

console.log(minhaIdade);

const numeroCinco = 5;
console.log(`Em ${anoAtual + 5}, estarei com ${minhaIdade + 5} anos.`)

// #3

let temperaturaCelsius = 23;
let temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32

console.log(`A temperatura de ${temperaturaCelsius} Celsius é igual a Fahrenheit ${temperaturaFahrenheit}`);

// #4

const nomeImc = 'Mariana';
const idade = 31;
const quilos = 48;
const altura = 1.57;
const imc = Math.floor(quilos / (altura * altura));
const anoNascimento = 1990;

console.log(`${nome} tem ${idade} anos, pesa ${quilos}kg, tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);

// #5

let valorAbastecido = 100;
const valorGasolina = 5.966;
const valorAlcool = 4.632;
const litrosGasolina = (valorAbastecido / valorGasolina).toFixed(2);
const litrosAlcool = (valorAbastecido / valorAlcool).toFixed(2);
const kmGasolina = (litrosGasolina * 10.2).toFixed(2);
const kmAlcool = (valorAlcool * 9.8).toFixed(2);

console.log("Colocando R$", valorAbastecido, " é possível:")
console.log("GASOLINA: Percorrer", kmGasolina, "km e colocar", litrosGasolina, "litros");
console.log("ÁLCOOL: Percorrer", kmAlcool, "km e colocar", litrosAlcool, "litros");