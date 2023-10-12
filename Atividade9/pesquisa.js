var idade=[5];
var sexo=[5];
var opiniao=[5];
var qtdPositivo=0;
var qtdNegativo=0;
var qtdMulher=0;
var qtdHomem=0;
var soma=0;
var media=0;

for(i=0;i<5;i++){
    var varIdade = parseInt(prompt("Idade: "));
    var varSexo = prompt("Sexo: ");
    var varOpiniao = parseInt(prompt("Opinião: "));

    idade[i]=varIdade;
    sexo[i]=varSexo;
    opiniao[i]=varOpiniao;

    soma=soma+idade[i];
    media = soma/idade.length;

    if((opiniao[i]==1)){
        qtdNegativo=qtdNegativo+1
    }

    if((opiniao[i]==4) || (opiniao[i]==3)){
        qtdPositivo=qtdPositivo+1;
    }

    if(sexo[i] == 'F'){
        qtdMulher=qtdMulher+1;
    }else{
        qtdHomem=qtdHomem+1;
    }
}

alert(
    `
    A média da idade das pessoas é ${(media)}
    A idade da pessoa mais velha é ${Math.max.apply(null,idade)}
    A idade da pessoa mais nova é ${Math.min.apply(null,idade)}
    A quantidade de pessoas que responderam péssimo é ${qtdNegativo}
    A quantidade de pessoas que responderam ótimo e bom é ${((qtdPositivo/opiniao.length)*100).toFixed(2)}%
    O número de mulheres que responderam o questionário é ${qtdMulher}
    O número de homens que responderam o questionário é ${qtdHomem}\n
    Idades: ${idade}
    Sexo: ${sexo}
    Opiniões: ${opiniao}
    `)