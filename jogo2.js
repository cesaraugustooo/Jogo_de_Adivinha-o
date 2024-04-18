const pergunta = require('readline-sync');
var nivel = pergunta.question("Qual o nivel de dificuldade? digite: [FACIL] [MEDIO] [DIFICIL]").toUpperCase();
var maxTentativas;
var num;
var pontos = 100;
var perca;
function dificuldade() {
    if (nivel === "FACIL") {
        nivel = "FACIL";
        perca = 5;
        maxTentativas = 20;
        if (num === undefined) {
            num = Math.floor(Math.random() * 21);
        }
    } else if (nivel === "MEDIO") {
        nivel = "MEDIO";
        maxTentativas = 15;
        perca = 15;
        if (num === undefined) {
            num = Math.floor(Math.random() * 1001);
        }
    } else if (nivel === "DIFICIL") {
        nivel = "DIFICIL";
        perca = 20;
        maxTentativas = 10;
        if (num === undefined) {
            num = Math.floor(Math.random() * 90001);
        }
    }
    return num;
}

function dentroloop() {
    var chute;
    if (nivel === "FACIL") {
        chute = pergunta.question("Voce tem " + pontos +" pontos\nQue numero voce acha que e, de 0 a 20? Voce tem 17 tentativas usou " + tentativas + " tentativas\n\n");
    } else if (nivel === "MEDIO") {
        chute = pergunta.question("Voce tem " + pontos + " pontos\nQue numero voce acha que e, de 0 a 1000? Voce tem 15tentativas e usou  " + tentativas + " tentativas\n\n");
    } else if (nivel === "DIFICIL") {
        chute = pergunta.question("Voce tem " + pontos + " pontos\nQue numero voce acha que e, de 0 a 90000? VOce tem 10 tentativas e usou " + tentativas + " tentativas\n\n");
    }
    if (isNaN(chute)) {
        console.log("Digite apenas numeros...");
    }
    if (!isNaN(chute)) {
        tentativas++;
    }
    chute = parseInt(chute);
    return chute;
}

function loopwhile() {
    var chute;
    while (chute !== num) {
        chute = dentroloop();
        if (tentativas >= maxTentativas) {
            console.log("👎👎👎Voce alcancou o limite de tentativas👎👎👎");
            finalizar();
            break;
        }
        if (chute === num) {
            console.log("Parabens!!! Voce adivinhou o numero em " + tentativas + " tentativa(s)!!!\nE terminou com "+pontos+" pontos");
            console.log("'▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n░░░░░░░░░░▀█▄▀▄▀██████░▀█▄▀▄▀████▀\n░░░░░░░░░░░░▀█▄█▄███▀░░░▀██▄█▄█▀'");
            if (tentativas <= 5 && nivel === "FACIL") {
                pontos += 10;
            } else {
                pontos += 5;
            }
            if (tentativas <= 5 && nivel === "MEDIO") {
                pontos += 30;
                return pontos;
            } else if (tentativas <= 10 && nivel === "MEDIO") {
                pontos += 20;
                return pontos;
            }
            if (tentativas <= 3 && nivel === "DIFICIL") {
                pontos += 100;
                return pontos;
            }
        } else if (chute > num) {
            console.log("👎👾Tente um numero menor👾👎");
            pontos -= perca;
        } else {
            console.log("👎👾Tente um numero maior👾👎");
            pontos -= perca;
        }
    }
}

function finalizar() {
    var resposta = pergunta.question("Deseja sair do jogo? (S/N)").toUpperCase();
    if (resposta === "S") {
        console.log("Obrigado por jogar! Até a próxima!");
        process.exit(0);
    } else if (resposta === "N") {
        tentativas = 0;
        num = dificuldade();
        loopwhile();
    } else {
        console.log("Opção inválida. Por favor, responda S para Sim ou N para Não.");
        finalizar();
    }
}

num = dificuldade();
var tentativas = 0;
var nome = pergunta.question("\nQual o seu nome?\n\n");
console.log("🎮🎲 Bem vindo " + nome + " 🎲🎮, nesse jogo voce devera tentar adivinhar um numero gerado aleatorio pelo programa\nNao se esqueca de digitar apenas numeros!\nBoa sorte!!!");

loopwhile();
finalizar();
