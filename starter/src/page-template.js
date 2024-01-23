// creates the team
const generateTeam = team => {

  // creates the manager html
  const generateManager = manager => {
    return `
    <div class="card employee-card manager-card">
    <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
    `;
  };

  // creates the html for engineers
  const generateEngineer = engineer => {
    return `
    <div class="card employee-card engineer-card">
  <div class="card-header">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
    </ul>
  </div>
</div>
    `;
  };

  // creates the html for interns
  const generateIntern = intern => {
    return `
     
    <div class="card employee-card intern-card">
  <div class="card-header">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
</div>
    `;
  };

  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  );
  html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
  );
  html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
  );

  return html.join("");

}

// exports function to generate entire page
module.exports = team => {

  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 jumbotron mb-3 team-heading">
        <h1 class="text-center">My Team</h1>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="team-area col-12 d-flex justify-content-center">
        ${generateTeam(team)}
      </div>
    </div>
  </div>
</body>
</html>
  `;
};) and this is the index.js file (console.log("Starting execution");

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
