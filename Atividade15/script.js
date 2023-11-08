function validarFormulario() {
    var nome = document.meuForm.elements["nome"].value;
    var email = document.meuForm.elements["email"].value;
    var comentario = document.meuForm.elements["comentario"].value;
    var pesquisa = document.meuForm.elements["pesquisa"];
    var selectedValue = "";

    for (var i = 0; i < pesquisa.length; i++) {
        if (pesquisa[i].checked) {
            selectedValue = pesquisa[i].value;
            break;
        }
    }

    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("O email deve conter os caracteres '@' e '.'.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    if (selectedValue === "") {
        alert("A pesquisa é obrigatória. Selecione 'Sim' ou 'Não'.");
        return false;
    }

    if (selectedValue === "sim") {
        alert("Volte sempre a esta página!");
    } else {
        alert("Que bom que você voltou a visitar a página!");
    }

    return true;
}