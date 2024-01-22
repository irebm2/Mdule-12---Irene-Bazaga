# Module-12---Irene-Bazaga - My Team Profile Generator

Generate a dynamic HTML webpage showcasing your team's profiles, all from the command line!

# Key Features

- **Intuitive prompts:** Easily add team members with information specific to their roles (Manager, Engineer, Intern).
- **Dynamic output:** Get a visually appealing webpage built with individual cards for each team member.
- **Customizable:** Apply your brand or preferences to the generated HTML.

# User Story

As a manager, I want a quick and efficient way to create a webpage displaying my team's essential info (email, GitHub profiles) for easy access.

# Technical Requirements

- **Node.js**
- **Inquirer (v6.3.1):** Prompt users for data.
- **Jest:** Run unit tests for code quality.

# Getting Started

1. **Clone the repository:** Use the command above to get started.
2. **Install dependencies:** Run `npm install` to install required libraries.
   ```bash
git clone <repository-url>
cd <repository-folder>
npm install
npm init -y 
npm i inquirer@6.3.1
npm i jest
//Uptade the file package-json line 10 to: "test": "jest"
npm run test
//Create the file: .gitignore
//Write: node_modules
node index.js
```
4. **Run the app:** Execute `node index.js` to launch the interactive prompts.
5. **Add team members:** Follow the prompts and provide details for each member.
6. **Generate HTML:** The app creates `team.html` in the output directory. Open it in your browser to see the magic!

# Usage Guide

- The app guides you through adding team members one by one.
- Enter required information like name, ID, email, and role.
- Each role has specific prompts (e.g., Manager's office number, Engineer's GitHub username).
- After adding all members, the HTML file is automatically generated.

# Tips & Tricks

- Add as many team members as needed!
- Use descriptive names for roles and members for clarity.
- Customize the generated HTML to match your brand or preferences.

# Resources

- **GitHub repository:** [github.com/irebm2/Module-12---Irene-Bazaga](url)
- **Node.js installation:** [https://nodejs.org/en/download](https://nodejs.org/en/download)
- **Inquirer v6.3.1 docs:** [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)
- **Jest documentation:** [https://jestjs.io/](https://jestjs.io/)
- **Mock-up image:** (Include image of desired HTML output)

# Screenshots

(Insert screenshots showcasing the generated HTML page)

# Documentation

- **Inquirer:** [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)
- **Jest:** [https://jestjs.io/](https://jestjs.io/)[

# Get in touch

Have questions or feedback? Reach out! 

Made with ❤️ by Irene Bazaga
