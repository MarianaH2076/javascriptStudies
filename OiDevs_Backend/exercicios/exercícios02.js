// #1 Exercício
// const message = "SE UMA IMAGEM VALE MAIS QUE MIL PALAVRAS, ENTÃƒO DIGA ISSO COM UMA IMAGEM"
// Dado a mensagem acima, me forneca as seguintes respostas
//   - Quantidade de caracteres da mensagem.
//   - A primeira posiÃ§Ã£o em quem a palavra "MIL" aparece.
//   - Troque a palavra "mil" por "TRÃŠS MIL"
//   - Imprima na tela a mesma mensagem trocando as palavras "IMAGEM" por "PALAVRA" e "PALAVRAS" por "IMAGENS"
//   - Imprima na tela a expressÃ£o "ENTÃƒO DIGA ISSO COM UMA IMAGEM" utilizando funÃ§Ã£o nativa.
//   - Coloque a mensagem acima toda minÃºscula
//   - Imprima a mensagem acima com apenas a primeira letra maiÃºscula.

// const message = "SE UMA IMAGEM VALE MAIS QUE MIL PALAVRAS, ENTÃO DIGA ISSO COM UMA IMAGEM";
// const quantidadeCaracteres = message.length;
// const posicaoMil = message.indexOf("MIL");
// const altera = message.replace('MIL', 'TRÊS MIL');
// const stringCortada = message.slice(42);
// const minuscula = stringCortada.toLowerCase();
// const primeiraMaiuscula = minuscula[0].toUpperCase();

// console.log(`Quantidade de caracteres: ${quantidadeCaracteres}`);
// console.log(`Posição da palavra 'mil': ${posicaoMil}`);
// console.log(altera);
// console.log(message.replace('IMAGEM', 'PALAVRA').replace('PALAVRAS', 'IMAGENS'));
// console.log(stringCortada);
// console.log(minuscula);
// console.log(`${primeiraMaiuscula}${minuscula.slice(1)}`);

// #2 ExercÃ­cio
// const email = "      USUAriO@EmAIL.COM.bR    "
// Um sistema de informaÃ§Ã£o pretende capturar os emails de seus usuÃ¡rios atravÃ©s de um formulÃ¡rio, nÃ³s como desenvolvedores de backend precisamos garantir que os e-mails cadastrados sejam inseridos de forma correta em nosso banco de dados, independente se o usuÃ¡rio cadastrou-o com espaÃ§os em branco, com letras maiÃºscula.
// Diante disso, crie um algoritmo que "limpe" de forma coerente o e-mail acima

// const email = "      USUAriO@EmAIL.COM.bR    ";
// const limpaEmail = email.trim();

// console.log(limpaEmail);

// #3 ExercÃ­cio
// const resultadoDaConta = '2' + 3 * 4 + '45' 
// Dado a conta acima, reescreva-a garantindo que o resultado seja 59 e nÃ£o 21245, com estÃ¡ sendo impresso atualmente

// const resultadoDaConta = Number('2') + 3 * 4 + Number('45' );

// console.log(resultadoDaConta);

// #4 ExercÃ­cio 
// const umaString = "Hello Word"
// Dado a string acima, retorne em uma nova const os valores invertidos. Exemplo: "droW olleH"

// const umaString = "Hello Word";
// const umArray = umaString.split("");
// const reverso = umArray.reverse();
// const novaArray = reverso.join("");

// console.log(novaArray);

// #6 ExercÃ­cio
// const array = [1, 2, 3, 1, 2, 4, 5, 5, 4, 10, 12, 10, 1, 13, 12, 14]
// Dado o array acima:
   // Retorne um novo array que retire os resultados duplicados
   // Retorne a posiÃ§Ã£o do primeiro nÃºmero 2 
   // Retorne a posiÃ§Ã£o do Ãºltimo nÃºmero 2
   // Crie uma varÃ¡vel que verfique se existe o nÃºmero 14. Retorne true ou false
   // Crie uma variÃ¡vel que retorne uma string do array com os valores separados por traÃ§o,
   // exemplo: 1 - 2 - 3 - 1 - 2 - 4 - 5 - 5 - 4 - 10 - 12 - 10 - 1 - 13 - 12 - 14





   // #7 ExercÃ­cio
//    const arr1 = ["Fev", "Mar", "Abr", "Mai", "Jun"]
//    const arr2 = ["Jul", "Ago", "Set", "Out", "Nov"]
   // Concatene os arrays acima em um novo array
   // Insira na Ãºltima posiÃ§Ã£o do novo array a string "Dez"
   // Insira na primeira posiÃ§Ã£o do novo array a string "Jan"
   // Crie uma variÃ¡vel que mostre o tamanho do novo array.

   // const arr1 = ["Fev", "Mar", "Abr", "Mai", "Jun"];
   // const arr2 = ["Jul", "Ago", "Set", "Out", "Nov"];

   // const novaArr = arr1.concat(arr2);
   // novaArr.push('Dez');
   // novaArr.unshift('Jan');
   // const tamanhoArr = novaArr.push();

   // console.log(novaArr);
   // console.log(tamanhoArr);

const novaturma = ['carlos', 'ana', 'maria', 'joão']
const teste = 10
const ehArr = novaturma instanceof Array
const ehARr2 = Array(teste)

// console.log(ehArr)
console.log(ehARr2)
// console.log(teste)
console.log(ehARr2)