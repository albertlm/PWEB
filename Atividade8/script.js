//Define a jogada do jogador
var escolhaJogador = prompt("Pedra, papel ou tesoura: ");

if(escolhaJogador == "Pedra" || escolhaJogador == "Papel" || escolhaJogador == "Tesoura"){

    var escolhaComputador = Math.random();

    //Define a jogada do Computador
    if(escolhaComputador<0.33){
        escolhaComputador = "Pedra";
    }else{
        if(escolhaComputador<0.66){
            escolhaComputador = "Papel";
        }else{
            escolhaComputador = "Tesoura";
        }
    }

    //Realiza o jogo
    if(escolhaJogador == escolhaComputador){
        alert(`Jogador: ${escolhaJogador}\nComputador: ${escolhaComputador}\n\nEmpate!`);
    }else{
        if(escolhaJogador == "Pedra" & escolhaComputador == "Tesoura"){
            alert(`Jogador: ${escolhaJogador}\nComputador: ${escolhaComputador}\n\nJogador venceu!`);
        }else{
            if(escolhaJogador == "Papel" & escolhaComputador == "Pedra"){
                alert(`Jogador: ${escolhaJogador}\nComputador: ${escolhaComputador}\n\nJogador venceu!`)
            }else{
                if(escolhaJogador == "Tesoura" & escolhaComputador == "Papel"){
                    alert(`Jogador: ${escolhaJogador}\nComputador: ${escolhaComputador}\n\nJogador venceu!`)
                }else{
                    alert(`Jogador: ${escolhaJogador}\nComputador: ${escolhaComputador}\n\nComputador venceu!`)
                }
            }
        }
    }
}else{
    alert("Escolha um valor entre Pedra, Papel ou Tesoura")
}