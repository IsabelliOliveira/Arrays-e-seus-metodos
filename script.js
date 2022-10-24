function inicio(){

    alert("Bem vindo.\n Arrays e seus métodos fantásticos \nArrays são ferramentas incríveis que podem trazer resultados maravilhosos.\n Segue alguns exercício na pratica ")

    var escolha = parseInt(prompt("Selecione a opcão de desejada: \n 1). Execicio 1 \n 2). Execicio 2 \n 3).Execicio 3 \n 4). Sair"));

    switch(escolha){

        case 1:
            exercicio_1();
            break;
        case 2:
            exercicio_2();
            break;
        case 3:
            exercicio_3();
            break;
        case 4:
            sair();
            break;
        default:

            alert("Selecione uma opção de 1 a 4");
            inicio();

    }

function exercicio_1(){

    var contagem =0
    var numero=[]
    
    while(contagem<=20){
        var numeroR= parseInt(prompt("Digite um número"));
        numero.push(numeroR)
        contagem++

        alert(numeroR);
    }

    inicio();

}



function exercicio_2(){

    let menores50 = [];
    let maiores50 = [];
    let contador = 12;

    while(contador<12){
        var numero= parseInt(prompt("Digite um número"))
        contador++;
        if(numero>50){
            maiores50.push(numero)
        }else if(numeroRecebido<50){
            menores50.push(numero)
        }
    }
    alert("Os número maiores que 50 são "+ menores50 + "<br/>"+ "Os número menores que 50 são:" + maiores50);

    }

inicio();


function exercicio_3(){

// Criando um array para obter as informações do inventário
var drofo = ['Anel da invisibilidade', 'Um par de botas mágicas', 'Um par de botas mágicas', 'Poção do sono', 'Poção da inocência', 'Poção da inocência'];
var torper = ['Capa da invisibilidade', 'Pedra do despertar', 'Varinha das varinhas', 'Poção da inocência', 'Poção da mentira', 'Poção da mentira', 'Poção anti-inteligência'];

//Imprimindo as informações do inventário inicial do Drofo e Torper
document.write('<h2>Inventário inicial</h2> <strong>Drofo</strong>: ' + drofo.join(', ') + "<br><br>");
document.write('<strong>Torper</strong>: ' + torper.join(', ') + "<br>");

//Inventário do Torper: removendo uma poção da mentira e a pedra do despertar. 
torper.splice(4,1);
torper.splice(1,1);

//Inventário do Torper: adicionando um par de botas mágicas do Drofo, por um escudo mágico e uma espada mágica
torper.push(drofo[1], 'Escudo mágico', 'Espada mágica');

//Inventário do Drofo: Adicionaando um par de botas mágicas, ovo de dragão e uma coxinha 
drofo.push('Um par de botas mágicas', 'Ovo de dragão', 'Coxinha');

//Inventário do Drofo: removendo um par de botas mágicas e a poção do sono
drofo.splice(1,1);
drofo.splice(2,1);
//Removendo a poção anti-inteligência do Torper
torper.splice(4,1);

//Imprimindo o novo inventário do Drofo e Torper
document.write('<h2>Inventário atualizado</h2> <strong>Drofo</strong>: ' + drofo.join(', ') + "<br><br>");
document.write('<strong>Torper</strong>: ' + torper.join(', '));

}

function sair(){

    var confirma_saida = confirm("Deseja sair do programa?");

    if(confirma_saida){
        alert("Foi um prazer, obrigada, Até mais!");
        window.close();

    }else{
        inicio();
    }
}

}