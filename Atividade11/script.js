//Utilizando Object
var aluno1 = new Object();
aluno1.ra = "0030482123001";
aluno1.nome = "Albert Leme de Brito";
alert("RA: " + aluno1.ra + "\nNome: " + aluno1.nome);

//Utilizando {}
var aluno2 = {};
aluno2.ra = "0030482123021";
aluno2["nome"] = "Mayara Angel de Jesus Ascari";
//aluno2.nome = "Mayara";
alert("RA: " + aluno2.ra + "\nNome: " + aluno2.nome);

//Utilizando declaração literal
var aluno3 = {
    ra: "0030482123012",
    nome: "João Carlos Pereira Geraldo"
}
alert("RA: " + aluno3.ra + "\nNome: " + aluno3.nome);

//Utilizando função construtora
function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;

    this.MostraDados = function (){
        return "RA: " + this.ra + "\nNome: " + this.nome;
    }
}

var aluno4 = new Aluno("0030482123011","Jaquiel Jorge Moreno");

alert(aluno4.MostraDados());

//Utilizando nome da propriedade
var aluno5 = {};
var nome_propriedade = "ra";
aluno5[nome_propriedade] = "0030482123026";
aluno5['nome'] = "Dayane Alves da Silva";
alert("RA: " + aluno5.ra + "\nNome: " + aluno5.nome);

//Utilizando função com "métodos"
function Aluno2(){
    var ra;
    var nome;
    this.setRa = function(value){
        this.ra = value;
    };
    this.getRa = function(){
        return this.ra;
    };
    this.setNome = function(value){
        this.nome = value;
    }
    this.getNome = function(){
        return this.nome;
    }
}

var aluno6 = new Aluno2()
aluno6.setNome("Igor Belo Coan");
aluno6.setRa("0030482123019");
alert("RA: " + aluno6.getRa() + "\nNome: " + aluno6.getNome());