// using Manager constructor 
const Manager = require('../lib/Manager');


describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const manager = new Manager("", "")

            expect(manager.id).toEqual("");
            expect(manager.name).toEqual("");
        });
    });
});