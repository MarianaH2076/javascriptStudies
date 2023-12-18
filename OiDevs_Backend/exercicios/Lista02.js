
//?  Todos os exercícios serão resolvidos através de vídeos que serão enviado a vocês no decorrer da semana

// #1 Exercício
//   const message = "SE UMA IMAGEM VALE MAIS QUE MIL PALAVRAS, ENTÃO DIGA ISSO COM UMA IMAGEM"
  // Dado a mensagem acima, me forneca as seguintes respostas
  //   - Quantidade de caracteres da mensagem.
  //   - A primeira posição em quem a palavra "MIL" aparece.
  //   - Troque a palavra "mil" por "TRÊS MIL"
  //   - Imprima na tela a mesma mensagem trocando as palavras "IMAGEM" por "PALAVRA" e "PALAVRAS" por "IMAGENS"
  //   - Imprima na tela a expressão "ENTÃO DIGA ISSO COM UMA IMAGEM" utilizando função nativa.
  //   - Coloque a mensagem acima toda minúscula
  //   - Imprima a mensagem acima com apenas a primeira letra maiúscula. 

// #2 Exercício
   //  const email = "      USUAriO@EmAIL.COM.bR    "
    // Um sistema de informação pretende capturar os emails de seus usuários através de um formulário, nós como desenvolvedores de backend precisamos garantir que os e-mails cadastrados sejam inseridos de forma correta em nosso banco de dados, independente se o usuário cadastrou-o com espaços em branco, com letras maiúscula. Diante disso, crie um algoritmo que "limpe" de forma coerente o e-mail acima

// #3 Exercício
   // const resultadoDaConta = '2' + 3 * 4 + '45' 
   // Dado a conta acima, reescreva-a garantindo que o resultado seja 59 e não 21245, com está sendo impresso atualmente

// #4 Exercício 
   // const umaString = "Hello Word"
   // Dado a string acima, retorne em uma nova const os valores invertidos. Exemplo: "droW olleH"

// #5 Exercício -> VOLTAR!
   // Dados as variáveis
   // let varA = "A"
   // let varB = "B"
   // let varC = "C"
   //Sobreescreva os valores de cada variável (perceba que ela estão declaradas com let) em que, varA receba o varB, varB receba o valor de varC e varC receba o valor de varA... Não pode colocar os valores manualmente, exemplo: varB = "C".
   // Ao escrever o console.log(varA, varB, varC) imprima B, C, A

// #6 Exercício
   // const array = [1, 2, 3, 1, 2, 4, 5, 5, 4, 10, 12, 10, 1, 13, 12, 14]
   // // Dado o array acima:
   //    // Retorne um novo array que retire os resultados duplicados
   //       const novoArrSemDupli = [... new Set(array)];
   
   //    // Retorne a posição do primeiro número 2 
   //       const primeiraPosicao = array.indexOf(2);
        
   //    // Retorne a posição do último número 2
   //       const ultimaPosicao = array.lastIndexOf(2);

   //    // Crie uma varável que verfique se existe o número 14. Retorne true ou false
   //       const existeQuatorze = array.includes(14);
         
   //    // Crie uma variável que retorne uma string do array com os valores separados por traço, exemplo: 1 - 2 - 3 - 1 - 2 - 4 - 5 - 5 - 4 - 10 - 12 - 10 - 1 - 13 - 12 - 14
   //       const arrayEmString = array.join(" - ");
   //       console.log(arrayEmString)

// #7 Exercício
   // const arr1 = ["Fev", "Mar", "Abr", "Mai", "Jun"]
   // const arr2 = ["Jul", "Ago", "Set", "Out", "Nov"]
   // Concatene os arrays acima em um novo array
   // let novoArr = arr1.concat(arr2);

   // Insira na última posição do novo array a string "Dez"
   // novoArr.push('Dez');

   // Insira na primeira posição do novo array a string "Jan"
   // novoArr.unshift("Jan");

   // Crie uma variável que mostre o tamanho do novo array.
   // const tamanhoArr = novoArr.length;
   // console.log(tamanhoArr);

// #8 Exercício
   const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
   // Dado o array acima, utilizando o laço de repetição (for ou while)
   // Crie um novo array que receba os valores pares
   // Crie um novo array que receba os valores ímpares
   // Mostre aos usuários quantos números pares e quantos números ímpares existem nesses dois novos arrays.
   // console.log(`Existem ${numerosPares.length} números pares e ${numerosImpares.length} números ímpares`)
   // Crie um novo array que receba os números multiplicados por 3.
   //  - - - - - - - DO PROFESSOR
   const pares = []
   const impares = []
   const mult3 = []

   for (const number of numeros){
      if(number % 2 === 0) pares.push(number)
      else impares.push(number)
      mult3.push(number * 3)
   }

   // console.log(pares.length)
   // console.log(impares.length)
   // console.log(mult3)



// #9 Exercício
   // Utilizado o laço de repetição (for ou while)
   // Crie uma variável que receba um número e imprima na tela sua tabuada
   // Resultado esperado:
   /**
      variável * 1 = resultado
      variável * 2 = resultado
      variável * 3 = resultado
      variável * 4 = resultado
      variável * 5 = resultado
      variável * 6 = resultado
      variável * 7 = resultado
      variável * 8 = resultado
      variável * 9 = resultado
      variável * 10 = resultado
    */ 

   // const numero = 5;

   // for(i = 1; i < 11; i++){
   //    i * numero;
   //    console.log(`${numero} * ${i} = ${i * numero}`)
   // }

 
// #10 Exercício
   // Implemente uma função que receba uma string e informe ao usuário se é um palíndromo ou não.
   //    Certifique-se que o usuário pode escrever letras maiúsculas, trate essa questão.
   //    Palíndromo = Frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa”
   //    Exemplos de palíndromos: mirim, radar, ralar, reger, socos, sós, osso, Ana, radar, Renner

   // const string = ("Roma").toLowerCase();
   // const stringReversa = string.split("").reverse().join("").toLowerCase();

   // if(string === stringReversa){
   //    console.log(`A palavra "${string}" é um palíndromo`)
   // } else {
   //    console.log(`A palavra "${string}" não é um palíndromo`)
   // }

// #11 Exercício -> VOLTAR!
   calculaTodos(1, 5) // retorna a soma de 1 + 2 + 3 + 4 + 5 é 15
   // Implemente a função acima que recebe dois números e retorne a soma dos números passados nos parâmetros,
      // garanta que o número passado no primeiro parâmetro seja menor que o número do segundo parâmetro,
      // mostre erro ao usuário caso essa condição seja verdadeira.

      // function calculaTodos(num1, num2){
   
      // console.log(calculaTodos(1, 5))

      function calculaTodos(num1, num2){

         if(num1 >= num2) return "não é possível fazer a soma"

         //for que incremente um total 
         let total = 0
         for(let i = num1; i <= num2; i++) {
            total = total + i
         }

         return total
        
      }


// #12 Exercício
   // removaDoArray([10, 20, 30, 40], 20) // Deve remover 20 e retornar [10, 30, 40]
   // Implemente a função acima que recebe um array no primero parâmetro, e um número no segundo parâmetro.
   // Deve remover "20" e retornar [10,30,40], Caso o segundo parâmetro não exista no array do primeiro parâmetro,
      // informe ao usuário.



// #13 Exercício
  const notas = [7.5, 8, 3.7]

  // Dado as notas acima, utilizando o laço de repetição for, mostre os seguintes valores em novas variáveis:
  // - Calcule a média de todas as notas
  // - A maior nota
  // - A menor nota
  // - Escreva uma condição que, se a média for maior ou igual a 6.5, escreva "Aluno aprovado", caso a condição não seja verdadeira, escreva "Aluno reprovado"

      /* 1) escrever a média de todas as notas
         2) escrever a maior nota
         3) escrever a menor nota
         4) condição */

         // let soma = 0
         
         // for(let i = 0; i < notas.length; i++) {

         //    let nota = notas[i]

         //    soma = soma + nota
         // }

         // const media = soma / notas.length
         // const maiorNota = Math.max(...notas)
         // const menorNota = Math.min(...notas)

         // if(media >= 6.5) console.log("aluno aprovado")
         // else console.log("aluno reprovado")
      
    
// #14 Exercício 
// repitaString('ola', 4) // returns 'olaolaolaola
  // implemente a função acima que simplesmente repita a string dado um número de vezes
  // Se inserir dados de tipos incorretos como, "number" no primeiro parâmetro ou "string" 
   // no segundo parâmetro, a função retorne a mensagem de erro ao usuário

      function repitaString(str, num) {

         if(typeof str === 'string' || typeof num === 'number') return console.log(str.repeat(num))
         else return console.log("erro!")
                         
      }


  
// #15 Exercício
   // Precisamos fazer o controle de acesso de entrada de clientes de um teatro, para isso
      // temos que criar um sistema que atenda os seguintes requisitos:
      // 1) Crianças com menos de 2 anos não podem entrar, mesmo que acompanhadas dos pais
      // 2) Crianças com 12 anos só podem entrar acompanhadas dos pais
      // 3) Pessoas acima de 60 anos ganham desconto.

   // Dado os requisitos acima, crie uma função que receba dois parâmetros, 
      // 1º Parâmetro recebe a idade
      // 2º Parâmetro recebe um boolean que informa se está com os pais ou não

      function acessoTeatro(num, bool) {

         // num < 2 console.log("Entrada não permitida")
         // 12 <= num >=2 && true ("Entrada permitida")
         // 12 < num >=2 && false ("Menores de 12 anos não podem entrar desacompanhados no teatro")
         // 12 < num < 60 ("Entrada liberada")
         // num > 60 ("Entrada liberada e desconto concedido")

         // if(num < 2) return console.log("Menores de dois anos não podem entrar no teatro");
         // else if ((num >= 12 || num >= 2) && true) return console.log("Entrada permitida");
         // else if ((num >= 12 || num >= 2) && false) return console.log("Menores de 12 anos não podem entrar desacompanhados no teatro");
         // else if (num > 12 || num < 60) return console.log("Entrada liberada")
         // else (num > 60) console.log("Entrada liberada e desconto concedido");

         if(num <= 2) console.log("Menores de dois anos não podem entrar no teatro")
         else if (2 < num <= 12 && bool === true) console.log("Entrada permitida")
         else if (2 < num <= 12 && bool === false) console.log("Menores de 12 anos não podem entrar desacompanhados no teatro")
         else if (num >= 12 && num < 60) console.log("Entrada permitida, entre 12 e 60 anos")
         else if (num >= 60) console.log("entrada permitida e desconto concedido")
         
      }

      // acessoTeatro(10, true)

   //Modelos de respostas:
   // acessoTeatro(2, true) // "Pessoas com menos de 2 anos não podem entrar no Teatro"
   // acessoTeatro(11, true) // "Entrada Liberada"
   // acessoTeatro(11, false) // "Menores de 12 anos não podem entrar no Teatro"
   // acessoTeatro(11) // "Menores de 12 anos não podem entrar no Teatro"
   // acessoTeatro(65) // "Entrada liberada, desconto fornecido"
   // acessoTeatro(21) // "Entrada liberada"

// #16 Exercício
   const empresas = [
      { nome: "Empresa A", ramo: "financeiro", anoFundacacao: 1995 },
      { nome: "Empresa B", ramo: "alimentício", anoFundacacao: 2000 },
      { nome: "Empresa C", ramo: "financeiro", anoFundacacao: 2005 },
      { nome: "Empresa D", ramo: "educação", anoFundacacao: 1998 },
      { nome: "Empresa E", ramo: "alimentício", anoFundacacao: 1985 },
      { nome: "Empresa F", ramo: "financeiro", anoFundacacao: 1981 },
      { nome: "Empresa G", ramo: "tecnologia", anoFundacacao: 2006 },
      { nome: "Empresa H", ramo: "educação", anoFundacacao: 1986 },
      { nome: "Empresa I", ramo: "tecnologia", anoFundacacao: 1990 },
   ]
   // Dado o array de objetos acima
   // Filtre em um novo array apenas as empresas do ramo "financeiro"
   const ramoFinanceiro = empresas.filter(empresas => empresas.ramo === "financeiro")
   
   // Filtre em um novo array apenas as empresas do ramo "educação" e "tecnologia"
   const educacaoTecnologia = empresas.filter(empresas => empresas.ramo === "educação" || empresas.ramo === "tecnologia")
   // console.log(educacaoTecnologia)

   // Filtre em um novo array apenas as empresas que foram fundadas nos anos 80 e 90
   const oitentaNoventa = empresas.filter(empresas => empresas.anoFundacacao < 2000 && empresas.anoFundacacao >= 1980)

   // Filtre em um novo array as empresas que foram fundadas entre 1998 e 2005
   const filtro2 = empresas.filter(empresas => empresas.anoFundacacao >= 1998 && empresas.anoFundacacao <= 2005)

   // Filtre em um novo array a soma de todos os anos de fundação de todas as empresas
  let ano = []
   for(ano of empresas) {
   ano.push(empresas.anoFundacacao)
  }
  console.log(ano)

// #17 Exercício
   // Esse último exercício vamos fazer um sistema completo, vou elaborar com mais calma e envio a vocês até quarta-feira


  