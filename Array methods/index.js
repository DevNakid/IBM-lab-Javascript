const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];
function displayEmployees(){
    const totalEmoloye = employees.map(employee => 
        `<p>Employe id : ${employee.id} Name : ${employee.name} Departement : ${employee.department} Salary : ${employee.salary}</p>`).join("");
        document.getElementById("employeesDetails").innerHTML = totalEmoloye;
};
