
//criando a função para descobrir o saldo de vitoria do jogador
function saldo_de_Rankeadas(){
        let saldo= vitoria-derrota
    return saldo

}


// declarando as variaveis

let vitoria= 101
let derrota= 0
let saldoVitoria= saldo_de_Rankeadas()
let nivel= ""

// criando o laço de retição
for(let i=0;i<1; i++){
// criando o estrutura de repetição 
    


if (saldoVitoria<=10){
    nivel="Ferro" 
}
else if(saldoVitoria>11 && saldoVitoria<=20){
    nivel= "Bronze"
}
else if(saldoVitoria>20 && saldoVitoria<=50){
    nivel= "Prata"
}
else if(saldoVitoria>50 && saldoVitoria<=80){
    nivel= "Ouro"
}
else if(saldoVitoria>80 && saldoVitoria<=90){
    nivel= "Diamante"
}
else if(saldoVitoria>90 && saldoVitoria<=100){
    nivel= "Lendário"
}
else{nivel="Imortal"}

// ecxibindo a saida
console.log("  O Herói tem de saldo de "+saldoVitoria+" esta no nivel "+ nivel)

}















