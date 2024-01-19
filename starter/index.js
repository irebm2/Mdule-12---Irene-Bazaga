console.log("Starting execution");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// 1. Manager Information
async function gatherManagerInfo() {
  const managerQuestions = [
    { type: "input", name: "managerName", message: "Enter the manager's name:" },
    { type: "input", name: "managerId", message: "Enter the manager's ID:" },
    { type: "input", name: "managerEmail", message: "Enter the manager's email address:" },
    { type: "input", name: "managerOfficeNumber", message: "Enter the manager's office number:" },
  ];

  const answers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    answers.managerName,
    answers.managerId,
    answers.managerEmail,
    answers.managerOfficeNumber
  );

  teamMembers.push(manager);
}

// 2. Engineer Information
async function gatherEngineerInfo() {
  const engineerQuestions = [
    { type: "input", name: "engineerName", message: "Enter the engineer's name:" },
    { type: "input", name: "engineerId", message: "Enter the engineer's ID:" },
    { type: "input", name: "engineerEmail", message: "Enter the engineer's email address:" },
    { type: "input", name: "engineerGithub", message: "Enter the engineer's GitHub username:" },
  ];

  const answers = await inquirer.prompt(engineerQuestions);

  const engineer = new Engineer(
    answers.engineerName,
    answers.engineerId,
    answers.engineerEmail,
    answers.engineerGithub
  );

  teamMembers.push(engineer);
}

// 3. Intern Information
async function gatherInternInfo() {
  const internQuestions = [
    { type: "input", name: "internName", message: "Enter the intern's name:" },
    { type: "input", name: "internId", message: "Enter the intern's ID:" },
    { type: "input", name: "internEmail", message: "Enter the intern's email address:" },
    { type: "input", name: "internSchool", message: "Enter the intern's school name:" },
  ];

  const answers = await inquirer.prompt(internQuestions);

  const intern = new Intern(
    answers.internName,
    answers.internId,
    answers.internEmail,
    answers.internSchool
  );

  teamMembers.push(intern);
}
async function main() {
    // Gather manager information (always required)
    await gatherManagerInfo();
  
    // Loop for adding engineers or interns
    while (true) {
      const addMemberChoice = await inquirer.prompt([
        {
          type: "list",
          name: "addMember",
          message: "Do you want to add an engineer, intern, or finish adding team members?",
          choices: ["Engineer", "Intern", "Finish adding"],
        },
      ]);
  
      if (addMemberChoice.addMember === "Engineer") {
        await gatherEngineerInfo();
      } else if (addMemberChoice.addMember === "Intern") {
        await gatherInternInfo();
      } else {
        // User chose to finish adding members
        break;
      }
    }
  
    const htmlContent = render(teamMembers);
  
    // Create the output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
  
    fs.writeFile(outputPath, htmlContent, (err) => {
      if (err) {
        console.error("Error writing HTML file:", err);
      } else {
        console.log("Team profile generated successfully!");
      }
    });
  }
  
  (async () => {
    try {
      await main();
    } catch (error) {
      console.error("Error:", error);
    }
  })();