//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Lista de amigos
let amigos = [];

//Função que seleciona o campo "input" de texto do HTML e compara com If Elses se há ou não o nome digitado.
function adicionarAmigo() {
 let nome = document.querySelector ('input').value;

 if (nome == ""){
 alert("Por favor, insira um nome.");
 } else {
    amigos.push(nome);
 }
 //Limpar a lista antes de atualizar na tela.
 limparLista();

 // for (Nova variavel ; condição para o For continuar rodando; incremento)
 for (let listaNaTela = 0; listaNaTela < amigos.length;listaNaTela++){
    let newEl = document.createElement('li');
    newEl.innerHTML = amigos[listaNaTela];
    document.getElementById("listaAmigos").appendChild(newEl);
    }
   
 limpaCampo();
}

//Função que serve para limpar o campo "input" do HTML depois do nome adicionado a lista de amigos.
function limpaCampo(){
    let nome = document.querySelector ('input');
    nome.value = "";
}

//Função que serve para limpar a lista.
function limparLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}

//Função que seleciona aletoriamente um dos nomes amarzenados no array amigos.
function sortearAmigo(){
    if (amigos.length === 0){
        alert("Sem nome para sorteio! Por favor insira os nomes abaixo!");
    } else{
        let nomeAleatorio = Math.floor(Math.random()* amigos.length);
        let resultado = amigos[nomeAleatorio];

        //para mostrar o resultado na tela
        let newEl = document.createElement('li');
        newEl.innerHTML = resultado;
        document.getElementById("resultado").appendChild(newEl)
    }
}