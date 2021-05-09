/*
    Can set office number via constructor argument,
    getRole() should return 'Manager',
    Can get office number via getOffice()
*/

const Manager = require("../lib/Manager");

//const manager = new Manager("Michael Scott", 36284, "mscott@dundermifflin.com", "272-385-3927");
const name = "Mike";
const id = 36284;
const email = "mike@bigco.com";
const office = "133"
const manager = new Manager(name, id, email, office);

describe("Manager tests", () => {

    test('Can set office number via constructor arguments', () => {
       expect(manager.officeNumber).toBe(office);
    });

    test('getRole() should return Manager', () => {
        expect(manager.getRole()).toBe('Manager');
    });

    test('Can get office number via getOffice()', () => {
        expect(manager.getOffice()).toBe(office);
    });
 
})
