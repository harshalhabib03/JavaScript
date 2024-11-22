//here the createEmployee variable should execute first & then other variables
//if we execute getEmployees variable first then adding in the createEmployee at last it will not display
let employees = [
    { id: 101, name: "Rahul", sal: 45000 },
    { id: 102, name: "Sonia", sal: 55000 }
];

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let db_flag = true;
            db_flag == true ? resolve("Data Inserted") : reject("Failed");
            employees.push(emp);
        }, 1000);
    })
}

let getEmployees = () => {
    setTimeout(() => {
        let rows = '';
        for (emp of employees) {
            rows = rows + ` <tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>
                            </tr>`
        }
        document.getElementById('abc').innerHTML = rows;
    }, 2000);
}
createEmployee({ id: 103, name: "Priyanka", sal: 65000})
    .then((msg) => {
        console.log(msg)
        getEmployees();
    })
    .catch((err) => {
        console.log(err)
        getEmployees();
    })

