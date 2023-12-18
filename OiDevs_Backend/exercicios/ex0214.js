repitaString('ola', 4) // returns 'olaolaolaola
  // implemente a função acima que simplesmente repita a string dado um número de vezes
  // Se inserir dados de tipos incorretos como, "number" no primeiro parâmetro ou "string" 
   // no segundo parâmetro, a função retorne a mensagem de erro ao usuário

      function repitaString(str, num) {

         if(typeof str === 'string' || typeof num === 'number') return console.log(str.repeat(num))
         else return console.log("erro!")
                         
      }