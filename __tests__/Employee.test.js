// using Employee constructor 
const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id and name', () => {
            const employee = new Employee('', '')

            expect(employee.id).toEqual('');
            expect(employee.name).toEqual('');
        });
    });
});

