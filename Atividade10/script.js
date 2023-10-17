function encontrarMaiorNumero() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let num3 = parseFloat(prompt("Digite o terceiro número:"));

    let maior = Math.max(num1, num2, num3);
    alert("O maior número é: " + maior);
}

function ordenarNumerosCrescente() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let num3 = parseFloat(prompt("Digite o terceiro número:"));

    // Verifica se os valores são numéricos
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let numeros = [num1, num2, num3];
        numeros.sort(function(a, b) {
            return a - b;
        });

        alert("Números em ordem crescente: " + numeros.join(", "));
    } else {
        alert("Por favor, insira números válidos.");
    }
}