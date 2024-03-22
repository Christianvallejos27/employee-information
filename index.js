const inquirer = require("inquirer");
const mysql = require("mysql2");
const logo = require("asciiart-logo");
require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employees_db",
  },
  console.log(`Connected to employees_db database.`)
);
function startapp(){
    const logoText = logo({ name: "employee information \n :p" }).render();
    console.log(logoText);
    inquirer
      .prompt([
        {
          type: "list",
          name: "openingMessage",
          message: "What would you like to do?",
          choices: [
            "viewAllEmployees",
            "viewAllDepartments",
            "viewAllRoles",
            "addADepartment",
            "addARole",
            "addAEmployee",
            "updateEmployee",          
            "quit",
          ],
        },
      ]).then((inquirerResponse) => {
        console.log("user selected:    " + inquirerResponse.openingMessage);
        let choices = inquirerResponse.openingMessage;
        switch (choices) {
          case "viewAllEmployees":
            viewAllEmployees();
            break;
          case "viewAllDepartments":
            viewAllDepartments();
            break;
          case "viewAllRoles":
            viewAllRoles();
            break;
          case "addADepartment":
            addADepartment();
            break;
          case "addARole":
            addARole();
            break;
          case "addAEmployee":
            addAEmployee();
            break;
          case "updateEmployee":
            updateEmployee();
            break;       
          case "quit":
            quit();
            break;
          default:
            console.log("somethings wrong with you");
            break;
        }
      });


}
function viewAllDepartments(){
    console.log("view department logic")
    db.query("SELECT id AS department_id, dept_name AS department_name FROM department_list; ", function (err, results) {
        err ? console.log(err) : console.table(results), startapp()
    })
}
startapp ()


function viewAllEmployees(){
  console.log("view department logic")
  db.query("SELECT id AS employee_list_id, first_name AS first_name FROM employee_list; ", function (err, results) {
      err ? console.log(err) : console.table(results), startapp()
  })
}
startapp ()

function viewAllRoles(){
  console.log("view department logic")
  db.query("SELECT id AS role_list_id, role_name AS role_name FROM role_list; ", function (err, results) {
      err ? console.log(err) : console.table(results), startapp()
  })
}
startapp ()

function addADepartment(){
  console.log("view department logic")
  db.query("SELECT id AS department_id, dept_name AS department_name FROM department_list; ", function (err, results) {
      err ? console.log(err) : console.table(results), startapp()
  })
}
startapp ()

function addARole(){
  console.log("view department logic")
  db.query("SELECT id AS role_list, role_name AS role_name FROM role_list; ", function (err, results) {
      err ? console.log(err) : console.table(results), startapp()
  })
}
startapp ()

function addAEmployee(){
  console.log("view department logic")
  db.query("SELECT id AS employee_list_id, first_name AS first_name FROM employee_list; ", function (err, results) {
      err ? console.log(err) : console.table(results), startapp()
  })
}
startapp ()

function updateEmployee(){
  console.log("view department logic")
  db.query("SELECT id AS employee_list_id, first_name AS first_name FROM employee_list; ", function (err, results) {
      err ? console.log(err) : console.table(results), startapp()
  })
}
startapp ()

function quit(){
  console.log("view department logic")
  db.query("process.exit(); ", function (err, results) {
      err ? console.log(err) : console.table(results), startapp()
  })
}
startapp ()