// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const emptyArray = [];
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  addEmployee();

  function addEmployee() {
    function addFirstName() {
      const firstName = prompt("Please enter employee first name.");
      return firstName;
    }

    function addLastName() {
      const lastName = prompt("please enter employee last name");
      return lastName;
    }

    function addSalary() {
      let salary = prompt("please enter employee salary");
      if (isNaN(salary) === false) {
        return salary;
      } else {
        salary = 0;
      }
    }

    const firstName = addFirstName();

    const lastName = addLastName();

    const salary = addSalary();

    const newEmployee = {
      firstName,
      lastName,
      salary,
    };

    emptyArray.push(newEmployee);

    let addNew = confirm("Add another employee?");

    if (addNew === true) {
      addEmployee();
    } else if (addNew === false) {
      return emptyArray;
    }
  }
  return emptyArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const addTotal = addSalaries();

  const actualLength = emptyArray.length / 3;

  addSalaries();

  function addSalaries() {
    let arraySum = 0;
    for (let i = 0; i < emptyArray.length; i++) {
      arraySum += emptyArray[i].salary;
      return arraySum;
    }
  }

  const averageTotal = averageSaleries();

  averageSaleries();

  function averageSaleries() {
    const finalAverage = addTotal / actualLength;
    return finalAverage;
  }

  console.log(averageTotal);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
