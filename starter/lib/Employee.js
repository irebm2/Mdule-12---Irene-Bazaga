// TODO: Write code to define and export the Employee class
// This class defines the blueprint for an employee object.
class Employee {
    /**
     * Creates a new Employee object with the specified name, ID, and email.
     * @param {string} name The employee's name.
     * @param {number} id The employee's unique identifier.
     * @param {string} email The employee's email address.
     */
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
/**
   * Returns the employee's name.
   * @returns {string} The employee's name.
   */
getName() {
    return this.name;
  }

  /**
   * Returns the employee's ID.
   * @returns {number} The employee's unique identifier.
   */
  getId() {
    return this.id;
  }

  /**
   * Returns the employee's email address.
   * @returns {string} The employee's email address.
   */
  getEmail() {
    return this.email;
  }

  /**
   * Returns the employee's role, which is always "Employee" for this base class.
   * @returns {string} The employee's role ("Employee").
   */
  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;  