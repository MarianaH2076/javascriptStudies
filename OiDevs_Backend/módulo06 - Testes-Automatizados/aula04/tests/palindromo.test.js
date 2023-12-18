const { verificaPalindromo, InvalidTypeError } = require("../src/palindromo");

describe('Teste verificaPalindromo', () => {
    it('Deve retornar true se um palíndromo válido é passado', () => {
        const resultado = verificaPalindromo('arara');

        expect(resultado).toBe(true);
    })

    it('Deve retornar false se um palíndromo inválido é passado', () => {
        const resultado = verificaPalindromo('palavra');

        expect(resultado).toBe(false);
    })

    it('Deve retornar false se uma string vazia é passada', () => {
        try {
            verificaPalindromo('')
        } catch (error) {
            console.log(error)
            expect(error).toBeInstanceOf(InvalidTypeError)
            expect(error.message).toBe('O argumento deve ser uma string válida')
        }

    })


})