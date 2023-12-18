const prompt = require('prompt');
    //npm i prompt (pra pegar os dados inseridos, certo?)
const MenuService = require("./src/services/menu-service");
// const UserService = require('./src/services/user-service');
let db = {
    '123456': {
        nome: 'Esdras',
        cpf: '123456',
        email: 'esdras@gmail.com'
    }
};

const main = async () => {
    let run = true;
        //passamos run pra let porque precisamos trocar isso no caso da opção ser 3

    while(run) {
        console.clear()
        console.log("==== Calculadora IMC ====")
        console.log("Escolha uma opção abaixo:")
        console.log("   1. Cadastrar")
        console.log("   2. Visualizar usuários")
        console.log("   3. Calcular IMC")
        console.log("   4. Sair")
        
        const { selecione: option } = await prompt.get('selecione')
            //o nome na desestruturação deve ser o mesmo que é passado como parâmetro no .get

        switch (option) {
            case '1': //Cadastra o usuário na plataforma
                await MenuService.signUp();
                    break;
            case '2': //Visualiza o usuário
                console.log(db)
                await prompt.get(['Pressione qualquer tecla para continuar'])
                break
            case '3': //Calcula o IMC
                const { cpf: userCpf } = await prompt.get(['cpf'])
                console.clear()

                if(!db[userCpf]) {
                    console.log("Usuário não encontrado");
                    await prompt.get(["Pressione qualquer tecla para continuar"]);
                    break;
                };

                const { peso, altura } = await prompt.get(['peso', 'altura']);

                const imc = peso / (altura * altura);
                console.log(imc);
                console.clear();
                await prompt.get(['Pressione qualquer tecla para continuar'])
                break;
                    //lembrando que o break para de conferir o switch
            case '4': //Sai da plataforma
                run = false;
                break;
            default: //Se o usuário digitar qualquer valor diferente desses, podemos ter o default:
                console.log("Opção inválida");
                break;
        }
    }
}

main()