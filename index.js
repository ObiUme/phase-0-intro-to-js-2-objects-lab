const employee = {
    name: 'Obi',
    streetAddress: "523 SW 3rd PL"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
const newEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam');
newEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee['name'] = 'Sam';
    employee['streetAddress'] = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObjectEmployee = {...employee}
    delete newObjectEmployee.name;
    return newObjectEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}
