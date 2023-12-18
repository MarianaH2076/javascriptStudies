const CpfValidator = require("../../src/utils/cpf-validator");

describe("CPF Validator", () => {
    it("Should return true if cpf masked is valid", () => {
        const isValid = CpfValidator.isValid('03629223141');
        
        expect(isValid).toBe(true);

    });

    it("Should return true if cpf is valid", () => {
        const isValid = CpfValidator.isValid("03629223141");
        expect(isValid).toBe(true);
    });

    //aqui não deveria ser 'should return false is cpf is not valid'?
    it("Should return false if cpf is not valid", () => {
        const isValid = CpfValidator.isValid("766720020031");
        expect(isValid).toBe(false);
    });

    it("Should return false if no cpf is provided", () => {
        const isValid = CpfValidator.isValid();
        expect(isValid).toBe(false);
    });

})