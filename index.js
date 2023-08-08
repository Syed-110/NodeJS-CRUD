const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const db= require('./database-config');
const employeeRoutes = require('./controllers/emp-controller');

//Middleware
app.use('/api/employee',employeeRoutes);

db.query("SELECT 1").then(result => {
    app.listen(3000, () => {
        console.log('Listening on port 3000');
    })
})
.catch(err => {
    console.log(err);
})