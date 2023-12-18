const prompt = require('prompt');
const UserService = require("../services/user-service");
const CpfValidator = require("../utils/cpf-validator");


class MenuService {
    //direciona o fluxo que tava no index
    //aqui estamos usando classes estáticas porque essas classes não serão instanciadas toda hora, é só pra gente registrar mesmo

    static async signUp() {
        const { nome, cpf, email } = await prompt.get(['nome', 'cpf', 'email']);
        
        if(!CpfValidator.isValid(cpf)) {
            console.log("Cpf inválido");
            return prompt.get(["Pressione qualquer tecla para continuar"]);
        };

        const userExists = UserService.userExists(cpf);

        if(userExists){
            console.log("Usuário já cadastrado");
            return prompt.get(['Pressione qualquer tecla para continuar']);
        };

        UserService.signUp({
            nome,
            cpf,
            email
        });

        console.clear();
        console.log("Usuário cadastrado com sucesso");
        return prompt.get(['Pressione qualquer tecla para continuar']);
    };
};

module.exports = MenuService;