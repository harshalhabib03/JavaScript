//write code snippet to display employee data in the html table

let emps=
[
{"id":1,"name":"Brand","gender":"Male"},
{"id":2,"name":"Buddie","gender":"Male"},
{"id":3,"name":"Alano","gender":"Male"},
{"id":4,"name":"Dillie","gender":"Polygender"},
{"id":5,"name":"Laverna","gender":"Female"},
{"id":6,"name":"Elizabeth","gender":"Female"},
{"id":7,"name":"Judye","gender":"Female"},
{"id":8,"name":"Ade","gender":"Genderqueer"},
{"id":9,"name":"Twila","gender":"Female"},
{"id":10,"name":"Dan","gender":"Male"},
{"id":11,"name":"Licha","gender":"Female"},
{"id":12,"name":"Eliza","gender":"Female"},
{"id":13,"name":"Roze","gender":"Female"},
{"id":14,"name":"Denys","gender":"Male"},
{"id":15,"name":"Edita","gender":"Female"}
]
/* getEmp() */
function getEmp(){

    let rows="";
    let i=0;
    
    /* while(i<=emps.length-1){
        rows = rows + ` <tr>
                        <td>${emps[i].id}</td>
                        <td>${emps[i].name}</td>
                        <td>${emps[i].gender}</td>
                        </tr>`
        i++;
    } */
    
    /* do{
        rows = rows + ` <tr>
                        <td>${emps[i].id}</td>
                        <td>${emps[i].name}</td>
                        <td>${emps[i].gender}</td>
                        </tr>`
    i++;
    }
    while(i<=emps.length-1) */

    /* for(emp of emps){
        rows = rows + ` <tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.gender}</td>
                        </tr>`
    } */

    /* for(let i=0; i<=emps.length; i++){
        rows = rows + ` <tr>
                        <td>${emp[i].id}</td>
                        <td>${emp[i].name}</td>
                        <td>${emp[i].gender}</td>
                        </tr>`
    } */
    document.getElementsByTagName('tbody')[0].innerHTML=rows
}

/* document.getElementsByTagName('tbody')[0].innerHTML=rows */
    /* document.getElementsByTagName('tbody')[0].innerHTML="GM" */