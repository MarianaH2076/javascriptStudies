const Calculadora = require('./calculadora')

describe('Calculator tests', () => {
    test('Should return 4', () => {
        //passa o que é esperado do teste
        //parâmetro dentro do expect
        //e o que é esperado dentro do toBe
        const sum = Calculadora.soma(2,2);
        expect(sum).toBe(4)
    });

    test('Should throw if 0 is provided', () => {
        //passa o que é esperado do teste
        //parâmetro dentro do expect
        //e o que é esperado dentro do toBe
        const division = Calculadora.dividir(0,2);
        expect(division).toBe('Operação inválida')
    })
})