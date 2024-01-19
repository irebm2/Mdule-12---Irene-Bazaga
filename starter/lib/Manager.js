// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// This class extends the Employee class and adds properties and methods specific to managers.
const Employee = require("./Employee");
class Manager extends Employee {
    /**
     * Creates a new Manager object with the specified name, ID, email, and office number.
     * @param {string} name The manager's name.
     * @param {number} id The manager's unique identifier.
     * @param {string} email The manager's email address.
     * @param {number} officeNumber The manager's office number.
     */
    constructor(name, id, email, officeNumber) {
      super(name, id, email); // Call the parent constructor
      this.officeNumber = officeNumber;
    }
  
    /**
     * Returns the manager's office number.
     * @returns {number}
   
  The manager's office number.
     */
  
    
  getOfficeNumber() {
    // Indent this line correctly
    return this.officeNumber;
  }
  
    /**
     * Overrides the getRole method from the parent class to return "Manager".
     * @returns {string} The manager's role ("Manager").
     */
    getRole() {
      return 'Manager';
    }
  }
  
  module.exports = Manager;