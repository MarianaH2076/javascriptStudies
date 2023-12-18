// Palíndromos

function reverterPalavra(palavra) {
    let palavraRevertida = "";

    for(let i = palavra.length-1; i >= 0; i--){
        palavraRevertida += palavra.charAt(i);
    };

    return palavraRevertida;

}

function ePalindromo(palavra) {
    let palavraRevertida = reverterPalavra(palavra);

    return palavra === palavraRevertida;
}

const fnB = (palavra) => palavra.split('').reverse().join('') === palavra