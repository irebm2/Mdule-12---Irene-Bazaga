// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// This class extends the Employee class and adds properties and methods specific to interns.
const Employee = require("./Employee");
class Intern extends Employee {
    /**
     * Creates a new Intern object with the specified name, ID, email, and school.
     * @param {string} name The intern's name.
     * @param {number} id The intern's unique identifier.
     * @param {string} email The intern's email address.
     * @param {string} school The intern's school name.
     */
    constructor(name, id, email, school) {
      super(name, id, email); // Call the parent constructor
      this.school = school;
    }
  
    /**
     * Returns the intern's school name.
     * @returns {string} The intern's school name.
     */
    getSchool() {
      return this.school;
    }
  
    /**
     * Overrides the getRole method from the parent class to return "Intern".
     * @returns {string} The intern's role ("Intern").
     */
    getRole() {
      return 'Intern';
    }
  }
  
  module.exports = Intern;