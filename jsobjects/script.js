

const students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function challenge1(students){
    for (let i=0;  i < students.length; i++){
        console.log("Name:", students[i].name +", "+"Cohort:", students[i].cohort);
    }
}
challenge1(students)
/*
function objects(arr){
    let i=1;
    console.log("EMPLOYEES");
    for (var employee of arr.employees) {
        let slen = employee.first_name.length + employee.last_name.length;
        console.log(i+" - "+employee.first_name+" "+employee.last_name+" - "+slen); 
        ++i;
    }
    console.log("MANAGERS");
    i = 1;
    for (var manager of arr.managers) {
        let slen = manager.first_name.length + manager.last_name.length;
        console.log(i+" - "+manager.first_name+" "+manager.last_name+" - "+slen);
        ++i;
    }
}
objects(users);

 */

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function challenge2(object) {
    for (item in object) {
        console.log(item.toUpperCase());
        for (let i = 0; i < object[item].length; i++) {
            name = object[item][i].first_name + object[item][i].last_name;
            console.log((i+1) + " - " + object[item][i].last_name + ", " + object[item][i].first_name + " - " + name.length)
        }
    }
}

challenge2(users)

 
