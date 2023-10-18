//Função Retângulo
function Retangulo(){
    var x;
    var y;
    this.area = function area(){
        return this.x * this.y;
    };
    this.setX = function(value){
        this.x = value;
    }
    this.getX = function(){
        return this.x;
    }
    this.setY = function(value){
        this.y = value;
    }
    this.getY = function(){
        return this.y;
    }
}

var retangulo1 = new Retangulo()

retangulo1.setX(prompt("Insira a media da base: "));
retangulo1.setY(prompt("Insira a media da altura: "));
alert("A medida da base é: "+retangulo1.getX()+"m\nA medida da altura é: "+retangulo1.getY()+"m\nA área do retângulo é: " + retangulo1.area()+"m");

//Função Conta
function Conta(){
    var nomeCorrentista;
    var banco;
    var numeroConta;
    var saldo;
    this.setNomeCorrentista = function(value){
        this.nomeCorrentista = value;
    }
    this.getNomeCorrentista = function(){
        return this.nomeCorrentista;
    }
    this.setBanco = function(value){
        this.banco = value;
    }
    this.getBanco = function(){
        return this.banco;
    }
    this.setNumeroConta = function(value){
        this.numeroConta = value;
    }
    this.getNumeroConta = function(){
        return this.numeroConta;
    }
    this.setSaldo = function(value){
        this.saldo = value;
    }
    this.getSaldo = function(){
        return this.saldo;
    }
}

function Corrente(){
    var saldoEspecial;
    this.setSaldoEspecial = function(value){
        this.saldoEspecial = value;
    }
    this.getSaldoEspecial = function(){
        return this.saldoEspecial;
    }
}

function Poupanca(){
    var juros;
    var dataVencimento;
    this.setJuros = function(value){
        this.juros = value;
    }
    this.getJuros = function(){
        return this.juros;
    }
    this.setDataVencimento = function(value){
        this.dataVencimento = value;
    }
    this.getDataVencimento = function(){
        return this.dataVencimento;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

ContaCorrente1 = new Corrente();
ContaPoupanca1 = new Poupanca();

ContaCorrente1.setNomeCorrentista("Albert Leme de Brito")
ContaCorrente1.setBanco("Inter")
ContaCorrente1.setNumeroConta("1234-0")
ContaCorrente1.setSaldo("R$ 6.570,89")
ContaCorrente1.setSaldoEspecial("R$ 68.890,98")

ContaPoupanca1.setNomeCorrentista("Jaquiel Jorge Moreno")
ContaPoupanca1.setBanco("Nubank")
ContaPoupanca1.setNumeroConta("1472-7")
ContaPoupanca1.setSaldo("R$ 302,43")
ContaPoupanca1.setJuros("3,76% aa")
ContaPoupanca1.setDataVencimento("07/10/2023")

alert
(
    "CONTA CORRENTE\n"+
    "\nNome do correntista: "+ContaCorrente1.getNomeCorrentista()+
    "\nNome Banco: "+ContaCorrente1.getBanco()+
    "\nNúmero da Conta: "+ContaCorrente1.getNumeroConta()+
    "\nSaldo: "+ContaCorrente1.getSaldo()+
    "\nSaldo Especial: "+ContaCorrente1.getSaldoEspecial()+
    "\n\nCONTA POUPANÇA\n"+
    "\nNome do correntista: "+ContaPoupanca1.getNomeCorrentista()+
    "\nNome Banco: "+ContaPoupanca1.getBanco()+
    "\nNúmero da Conta: "+ContaPoupanca1.getNumeroConta()+
    "\nSaldo: "+ContaPoupanca1.getSaldo()+
    "\nJuros: "+ContaPoupanca1.getJuros()+
    "\nData Vencimento: "+ContaPoupanca1.getDataVencimento()
);