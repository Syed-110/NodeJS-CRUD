const express = require('express');
const router = express.Router();
const empService = require('../services/emp-service');

router.get('/', async(req, res) => {
    const employees = await empService.getAllEmployees();
    res.json(employees);
});
router.get('/:id', async(req, res) => {
    const employee = await empService.getEmployeeById(req.params.id);
    if(employee.length  == 0) {
        return res.status(404).send('No Record Found');
    }
    res.json(employee);
})
router.delete('/:id', async(req, res) => {
    const affectedRows = await empService.deleteEmployee(req.params.id);
    if(affectedRows  == 0) {
        return res.status(404).send('No Record Found');
    }
    res.json("Record Deleted");
})
router.post('/', async(req, res) => {
    try {
        const employee = await empService.insertEmployee(req.body);
        res.json("Record Inserted");
    } catch (error) {
        console.error(error);
        res.status(500).json("Error inserting record");
    }
})
router.put('/:id', async(req, res) => {
    try {
        const employee = await empService.updateEmployee(req.body,req.params.id);
        res.send("Record Updated");
    } catch (error) {
        console.error(error);
        res.status(500).json("Error updating record");
    }
})

module.exports = router;