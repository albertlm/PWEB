var num1 = parseFloat(prompt("Primeiro número: "));
var num2 = parseFloat(prompt("Segundo número: "));

soma = num1 + num2;
subtracao = num1 - num2;
produto = num1 * num2;
divisao = num1/num2;
resto = num1%num2;

alert(`A soma dos dois números é ${soma.toFixed(2)}\n\nA subtração do primeiro pelo segundo é ${subtracao.toFixed(2)}\n\nO produto dos dois números é ${produto.toFixed(2)}\n\nA divisão dos dois números é ${divisao.toFixed(2)}\n\nO resto da divisão do primeiro pelo segundo é ${resto.toFixed(2)}`);