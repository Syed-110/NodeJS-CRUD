const mysql = require('mysql2/promise');

const mysqlConfig = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'syed'
});

//We are using create createPool because it does not require a connection to be closed.
module.exports = mysqlConfig