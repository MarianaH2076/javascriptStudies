//será o entrypoint do programa -> o arquivo que iremos executar
    //e por isso ele precisa se conectar com o resto do programa

//Install prompt: npm i prompt --save

import prompt from 'prompt' // sintaxe pra importar coisas pra esse arquivo

//entrypoint da aplicação
function main() {
    prompt.get(['nome', 'peso', 'altura'], (err: Object, result: Object) => {
        if(err) {
            console.log(err)
        }

        console.log(result)

    })//busca do terminar o que eu quero que ele busque

}

main() 