//fazemos isso pra fazer o código esperar um pouco e esperar uma resposta, seja do usuário ou do prompt
import prompt from 'prompt'

const main = async function (){
    console.log('====== Ecommerce Lets Code ======')
    console.log('Escolha uma das opções abaixo')
    console.log('   1. Adicionar produto')
    console.log('   2. Ver produtos')
    
    const response = await prompt.get(['option']) //o nome do atributo é o nome que vai chegar no objeto, que no caso será o objeto option com o valor que o usuário vai colocar

    

    console.log(response.option) 


}

main()