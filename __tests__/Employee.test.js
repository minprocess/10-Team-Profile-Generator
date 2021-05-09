/*
    Can instantiate Employee instance,
    Can set name via constructor arguments,
    Can set id via constructor argument,
    Can get name via getName(),
    Can get id via getId(),
    Can get email via getEmail(),
    getRole() should return Employee
*/

// https://www.softwaretestinghelp.com/jest-testing-tutorial/

const Employee = require("../lib/Employee");

//const manager = new Manager("Michael Scott", 36284, "mscott@dundermifflin.com", "272-385-3927");
const name = "Michael Scott";
const id = 36284;
const email = "mscott@dundermifflin.com";
const employee = new Employee(name, id, email);

describe("Employee tests", () => {

    test('Can instantiate instance of Employee', () => {
        expect(typeOf(employee)).toBe('object');
    });

    test('Can set name via constructor arguments', () => {
        expect(employee.name).toBe(name);
    });

    test('Can set id via constructor arguments', () => {
        expect(employee.id).toBe(id);
    });

    test('Can get name via getName', () => {
        expect(employee.getName()).toBe(name);
    });

    test('Can get id via getId', () => {
        expect(employee.getId()).toBe(id);
    });

    test('Can get id via getEmail', () => {
        expect(employee.getEmail()).toBe(email);
    });

    test('getRole() should return Employee', () => {
        expect(employee.getRole()).toBe("Employee");
    });

});


