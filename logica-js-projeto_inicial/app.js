alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1)
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chuto não for igual ao número secreto 
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
      
    } else {
        if (chute > numeroSecreto) {
           alert(`O número secreto é menor que ${chute}`);
        } else { 
            alert(`O número secreto é maior que ${chute}`);
        }  
        //tentativas = tentativas + 1;
        tentativas++;
   }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentavia';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`); 



//if (tentativas > 1) {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`); 
//} else {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
