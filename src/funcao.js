

// fazendo o laço de repetição(criando uma varivel "i", como contador, definindo a quant. de repetição conm "i<1"vai repetir apenas uma vez)

for(let i=0; i<1;i++){

if(XP<=1000){
    nivel=" Ferro "
}
else if(XP>=1001 && XP<=2000){
    nivel=" Bronze "
}
else if(XP>=2001 && XP<=5000){
    nivel=" Prata "
}
else if(XP>=5001 && XP<=7000){
    nivel=" Ouro "
}
else if(XP>=7001 && XP<=8000){
    nivel=" Platina "
}
else if(XP>=8001 && XP<=9000){
    nivel=" Ascendente "
}
else if(XP>=9001 && XP<=10000){
    nivel=" Imortal "
}
else{
    nivel=" Radiante "
}

// mensagem final
console.log("O heroi de nome "+nome+", esta no nivel de "+ nivel +".")