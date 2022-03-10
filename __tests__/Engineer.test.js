// using Engineer constructor 
const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should create an id and name', () => {
            const engineer = new Engineer('', '')

            expect(engineer.id).toEqual('');
            expect(engineer.name).toEqual('');
        });
    });
});