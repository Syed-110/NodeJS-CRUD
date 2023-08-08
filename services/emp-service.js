const db = require('../database-config');

module.exports.getAllEmployees = async () => {
    const [records] = await db.query('SELECT * FROM employees')
    .catch(err => {
        console.log(err);
    })
    return records;
}
module.exports.getEmployeeById = async (id) => {
    const [record] = await db.query('SELECT * FROM employees WHERE id = ?', [id])
    .catch(err => {
        console.log(err);
    })
    return record;
}
module.exports.deleteEmployee = async (id) => {
    // const [record] = await db.query('DELETE FROM employees WHERE id = ?', [id])
    const [{affectedRows}] = await db.query('DELETE FROM employees WHERE id = ?', [id])
    .catch(err => {
        console.log(err);
    })
    // return record.affectedRows;
    return affectedRows;
}
module.exports.insertEmployee = async (employeeData) => {
    try {
        const { name, employee_code, salary } = employeeData;
        const [record] = await db.query('INSERT INTO employees (name, employee_code, salary) VALUES (?, ?, ?)', [name, employee_code, salary]);
        return record;
    } catch (error) {
        throw error;
    }
}
module.exports.updateEmployee = async (employeeData,id) => {
    try {
        const { name, employee_code, salary } = employeeData;
        const [record] = await db.query('UPDATE employees SET name=?, employee_code=?, salary=? WHERE id=?', [name, employee_code, salary, id]);
        return record;
    } catch (error) {
        throw error;
    }
}