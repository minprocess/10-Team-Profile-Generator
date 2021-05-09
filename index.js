// Team Profile Generator using Inquirer and Jest

// Use Inquirer npm package to get facts about team members.
// Write the facts to html
// Test the objects using Jes npm packaget.
// This is a client side application. Start at command prompt with >node index

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//var tmp = require('./src/page-template');
//var another = require('./index.js');
//import genIndex from './src/page-template'
const genTeamPage = require('./src/page-template')


const fs = require('fs');
//const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
/*
What is the team manager’s name?
What is the team manger’s id?
What is the team manager’s email?
What is the team manager’s office number?
*/
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "email",
    },
    {
        type: 'input',
        message: "What is your team managers's office number?",
        name: 'officenumber',
    },
    {
        type: 'list',
        message: "Which type of employee would you like to add?",
        name: "nextAction",
        choices: ["Engineer", "Intern", "none"],
    }

];


/*
What is your engineer’s name?
What is your engineer’s id?
What is your engineer’s email?
What is your engineer’s GitHub username?
*/
const engineerQuestions = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your engineer's id?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "github",
    },
    {
        type: 'list',
        message: "Which type of employee would you like to add?",
        name: "nextAction",
        choices: ["Engineer", "Intern", "none"],
    }

];

/*
What is your intern’s name?
What is your intern’s id?
What is your intern’s email?
What is your intern’s school?
*/
const internQuestions = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your intern's id?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school",
    },
    {
        type: 'list',
        message: "Which type of employee would you like to add?",
        name: "nextAction",
        choices: ["Engineer", "Intern", "none"],
    }

];
var manager;
var engineers = [];  // Empty array of engineers
var interns = [];    // Empty array of interns

function init(role, questions) {
    let nextAction = "none";

    // First ask questions about manager, there is only one manager
    // Use a while loop to keep adding engineers or interns.
    var inquirer = require('inquirer');
    inquirer
        .prompt(questions)
        .then(data => {
            if (role == 'Manager') {
                manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            }
            else if (role == 'Engineer') {
                engineers.push(new Engineer(data.name, data.id, data.email, data.github));
            }
            else if (role == 'Intern') {
                interns.push(new Intern(data.name, data.id, data.email, data.school));
            }
            if (data.nextAction != "none") {
                var quests;
                if (data.nextAction == "Engineer") {
                    quests = engineerQuestions;
                }
                else if (data.nextAction == "Intern") {
                    quests = internQuestions;
                }
                init(data.nextAction, quests)
            }
            else {
                // html creation here
                console.log("********* calling GenIndex ************");
                genTeamPage(manager, engineers, interns);
            }
        })
        .catch(err => {
            if (err.isTtyError) {
                console.log("prompt couldn't be rendered in current environment");
              // Prompt couldn't be rendered in the current environment
            } else {
                console.error(err);
              // Something else went wrong
            }
        });
}


init('Manager', managerQuestions);


