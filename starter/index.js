const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// 1. Manager Information
async function gatherManagerInfo() {
    // Prompt for manager's name, ID, email, and office number
    const managerQuestions = [
      {
        type: "input",
        name: "managerName",
        message: "Enter the manager's name:",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter the manager's ID:",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter the manager's email address:",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter the manager's office number:",
      },
    ];
  
    // Use inquirer to prompt for manager information
    const answers = await inquirer.prompt(managerQuestions);
  
    // Create a new Manager object with the gathered information
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
  
    // Add the manager object to the team members array
    teamMembers.push(manager);
  }
  
  // 2. Engineer Information
  async function gatherEngineerInfo() {
    // Prompt for engineer's name, ID, email, and GitHub username
    const engineerQuestions = [
      {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "engineerId",
        message: "Enter the engineer's ID:",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter the engineer's email address:",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Enter the engineer's GitHub username:",
      },
    ];
  
    // Use inquirer to prompt for engineer information
const answers = await inquirer.prompt(engineerQuestions);

// Create a new Engineer object with the gathered information
const engineer = new Engineer(
  answers.engineerName,
  answers.engineerId,
  answers.engineerEmail,
  answers.engineerGithub  
);

// Add the engineer object to the team members array
teamMembers.push(engineer);
  }
  
  // 3. Intern Information
  async function gatherInternInfo() {
    // Prompt for intern's name, ID, email, and school
    const internQuestions = [
      {
        type: "input",
        name: "internName",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "internId",
        message: "Enter the intern's ID:",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter the intern's email address:",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter the intern's school name:",
      },
      async function gatherInternInfo() {
        // Prompt for intern's name, ID, email, and school
        const internQuestions = [
          {
            type: "input",
            name: "internName",
            message: "Enter the intern's name:",
          },
          {
            type: "input",
            name: "internId",
            message: "Enter the intern's ID:",
          },
          {
            type: "input",
            name: "internEmail",
            message: "Enter the intern's email address:",
          },
          {
            type: "input",
            name: "internSchool",
            message: "Enter the intern's school name:",
          },
        ];
      
        // Use inquirer to prompt for intern information
        const answers = await inquirer.prompt(internQuestions);
      
        // Create a new Intern object with the gathered information
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
      
        // Add the intern object to the team members array
        teamMembers.push(intern);
      }
    ];
  
  
  
    async function main() {
        // Gather information for each team member
        await gatherManagerInfo();
        await gatherEngineerInfo();
        await gatherInternInfo();
      
        // Render the HTML file
        const htmlContent = render(teamMembers);
      
        fs.writeFile(outputPath, htmlContent, (err) => {
          if (err) {
            console.error("Error writing HTML file:", err);
          } else {
            console.log("Team profile generated successfully!");
          }
        });
      }
      
      main();}