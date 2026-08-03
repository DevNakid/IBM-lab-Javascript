const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000,specialization : "javascript" },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000,specialization : "python" },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000,specialization : "java" },
      //... More employee records can be added here
    ];
function displayEmployees(){
    const totalEmoloye = employees.map(employee => 
        `<p>Employe id : ${employee.id} Name : ${employee.name} Departement : ${employee.department} Salary : ${employee.salary}</p>`).join("");
        document.getElementById("employeesDetails").innerHTML = totalEmoloye;
};
let spec = document.getElementById("specialist").textContent.split(" ");
let word = spec[spec.length-1]
console.log(word);
const filtered = employees.filter(employee => employee.specialization === word);
const empHtml = filtered.map(employee => 
    `<p>Employe id : ${employee.id} Name : ${employee.name} Departement : ${employee.department} Salary : ${employee.salary} specialization : ${employee.specialization}</p>`
  ).join(''); // .join('') turns the array into a single HTML string

  // 3. Render to DOM
  document.getElementById("employeesDetails").innerHTML = empHtml || `<p>No employees found for: ${word}</p>`;