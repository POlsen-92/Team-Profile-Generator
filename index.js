const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const Manager = require("./Develop/lib/Manager");
const generateHTML = require("./Develop/util/generateHtml");

const empArr = [];
const manArr = [];
const engArr = [];
const intArr = [];


function addManager() {
    inquirer.prompt([
        {
        message:"What is the Team Manager's Name?",
        type: "input",
        name:"manName",
        },{
        message:"What is the Team Manager's Employee ID?",
        type: "input",
        name:"manId"
        },{
        message:"What is the Team Manager's E-Mail?",
        type: "input",
        name:"manEmail"
        },{
        message:"What is the Team Manager's Office Number?",
        type: "input",
        name:"manOffice"
        }
    ]).then(manAnswers => {
        const myManager = new Manager(manAnswers.manName, manAnswers.manId, manAnswers.manEmail, manAnswers.manOffice);
        empArr.push(myManager);
        manArr.push(myManager);
        askEngInt();
    })
}

function askEngInt() {
    inquirer.prompt(
        {
        message:"Add Engineer or Intern?",
        type: "list",
        name:"teamChoice",
        choices:["Add an Engineer","Add an Intern", "Team is Finished!"]
        })
        .then(answers => {
        switch (answers.teamChoice) {
            case "Add an Engineer":
                console.log("Adding an Engineer!")
                addEngineer();
                break;
            case "Add an Intern":
                console.log("Adding an Intern!")
                addIntern();
                break;
            default:
                console.log('What a Great Team!');
                fs.writeFile(`MyTeam.html`, generateHTML(empArr), (err) =>
                err ? console.error(err) : console.log('HTML Created!')
                );
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
        message:"What is the Engineer's Name?",
        type: "input",
        name:"engName",
        },{
        message:"What is the Engineer's Employee ID?",
        type: "input",
        name:"engId"
        },{
        message:"What is the Engineer's E-Mail?",
        type: "input",
        name:"engEmail"
        },{
        message:"What is the Engineer's GitHub Username?",
        type: "input",
        name:"engGitHub"
        }
    ]).then(engAnswers => {
        const myEngineer = new Engineer(engAnswers.engName, engAnswers.engId, engAnswers.engEmail, engAnswers.engGitHub);
        empArr.push(myEngineer);
        engArr.push(myEngineer);
        askEngInt();
    })

}

function addIntern() {
    inquirer.prompt([
        {
        message:"What is the Intern's Name?",
        type: "input",
        name:"intName",
        },{
        message:"What is the Intern's Employee ID?",
        type: "input",
        name:"intId"
        },{
        message:"What is the Intern's E-Mail?",
        type: "input",
        name:"intEmail"
        },{
        message:"What is the Intern's School?",
        type: "input",
        name:"intSchool"
        }
    ]).then(intAnswers => {
        const myIntern = new Intern(intAnswers.intName, intAnswers.intId, intAnswers.intEmail, intAnswers.intSchool);
        empArr.push(myIntern);
        intArr.push(myIntern);
        askEngInt();
    })
}

addManager();

