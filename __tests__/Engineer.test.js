const engineerTests = [
    "Can set GitHub account via constructor",
    "getRole() should return 'Engineer'",
    "Can get GitHub username via getGitHub()"
]

// https://www.softwaretestinghelp.com/jest-testing-tutorial/

// new Engineer("Pam Beesly", 1736, "pbeesly@dundermifflin.com", "pbdundermifflin")

const Engineer = require("../lib/Engineer");
const name = "Pam";
const id = 1736;
const email = "pam@bigco.com";
const github = "pambeesly";
const engineer = new Engineer(name, id, email, github);

describe("Engineer tests", () => {

    test('Can set GitHub account via constructor arguments', () => {
      expect(engineer.github).toBe(github);
    });

    test('getRole() should return Engineer', () => {
        expect(engineer.getRole()).toBe("Engineer");
    });

    test('Can get GitHub username via constructor arguments', () => {
    expect(engineer.getGitHub()).toBe(github);
    });
    
})
