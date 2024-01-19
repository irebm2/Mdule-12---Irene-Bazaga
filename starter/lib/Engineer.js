// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// This class extends the Employee class and adds properties and methods specific to engineers.
const Employee = require("./Employee");
class Engineer extends Employee {
    /**
     * Creates a new Engineer object with the specified name, ID, email, and GitHub username.
     * @param {string} name The engineer's name.
     * @param {number} id The engineer's unique identifier.
     * @param {string} email The engineer's email address.
     * @param {string} github The engineer's GitHub username.
     */
    constructor(name, id, email, github) {
      super(name, id, email); // Call the parent constructor
      this.github = github;
    }
  
    /**
     * Returns the engineer's GitHub username.
     * @returns {string} The engineer's GitHub username.
     */
    getGithub() {
      return this.github;
    }
  
    /**
     * Overrides the getRole method from the parent class to return "Engineer".
     * @returns {string} The engineer's role ("Engineer").
     */
    getRole() {
      return 'Engineer';
    }
  }
  
  module.exports = Engineer;