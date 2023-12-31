exports.verificaPalindromo = (palavra) => {
    if(!palavra || typeof palavra !== 'string') {
        throw new InvalidTypeExcepction('O argumento deve ser uma string válida');
    };

    const replaced = palavra.replace(/[a-z0-9]/gi, '');

    if(replaced) {
        return false
    };

    return palavra.split('').reverse().join('').toUpperCase() === palavra.toUpperCase();

};


class InvalidTypeExcepction extends Error {
    constructor(err) {
        super(err)
        this.message = err
        this.name = 'Invalid Type Exception'
    }
}

exports.InvalidTypeError = InvalidTypeExcepction