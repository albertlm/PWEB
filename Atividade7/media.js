var nome = prompt("Nome do aluno: ");

var nota1 = parseFloat(prompt("1ª nota do aluno: "));
var nota2 = parseFloat(prompt("2ª nota do aluno: "));
var nota3 = parseFloat(prompt("3ª nota do aluno: "));

var media = (nota1 + nota2 + nota3)/3;

alert(`A média do aluno ${nome} é ${media.toFixed(2)}`);