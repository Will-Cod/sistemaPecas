// Váriaveis, são um espaço na memória para guardar algum valor
let pesoPeca = 120

// pesoPeca - Camel Case
// peso_peca - Snake Case
// PesoPeca - Pascal Case

if(pesoPeca > 100) { console.log("Peso maior que 100g, peça pode ser cadastrada!!")}
else { console.log("Peso insuficiente, não é possível cadastrar.")}

let numeroPecas = 9

if(numeroPecas < 10) {console.log("Ainda há espaço na caixa, podemos cadastrar")}
else {console.log("Limite de espaço atingido")}

let nomePeca = "Disco de Freio"

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length <3) {
    console.log("Nome muito curto, não podemos cadastrar")
} else {
    console.log("Nome da peça adequado, podemos cadastrar")
}