/*
    Can set school via constructor,
    getRole should return 'Intern',
    Can get school via getSchool()    
]
*/

// https://www.softwaretestinghelp.com/jest-testing-tutorial/

const Intern = require("../lib/Intern");

const name = "Phyllis";
const id = 12797;
const email = "phyllis@bigco.com";
const school = "Univ of Pennsylvania";
const intern = new Intern(name, id, email, school);

describe("Intern tests", () => {

    test('Can set school via constructor', () => {
      expect(intern.school).toBe(school);
    });

    test('getRole() should return Intern', () => {
        expect(intern.getRole()).toBe("Intern");
    });

    test('Can get school via constructor arguments', () => {
    expect(intern.getSchool()).toBe(school);
    });
    
})