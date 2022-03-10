// using Intern constructor 
const Intern = require('../lib/Intern');

describe('Intern Class', () => {
    describe('Initialization', () => {
        it('Should create an id and name', () => {
            const engineer = new Intern("", "")

            expect(engineer.id).toEqual("");
            expect(engineer.name).toEqual("");
        });
    });
});