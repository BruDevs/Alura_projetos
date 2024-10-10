
// mensagem boas vindas
alert('Boas vindas ao jogo do número secreto');

// definição das variáveis
let numeroMax = 100;
let numeroSecreto = parseInt(Math.random() * `${numeroMax}` + 1);
let chute ;
let tentativas = 1;

// Enquanto o chute é diferente do numero secreto
while(chute != numeroSecreto){

    // solicita o numero para o jogador
    chute = prompt(`Escolha um número de 0 a ${numeroMax}`);

    // se chute for igual ao número secreto
if (chute == numeroSecreto) {
    // para o código
   break;
} 
// se não for igual faça
else {

    // se numero secreto maior que o chute informa
    if (numeroSecreto > chute){
        alert(`O número secreto é maior que ${chute}`);
    }
    // se numero secreto menor que o chute informa
    else{
        alert(`O número secreto é menor que ${chute}`);
    }

    //tentativas = tentativas + 1;
    tentativas++
}
} ;

// operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// mensagem de parabéns
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*
if(tentativas > 1){
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
}
else{
    
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}*/