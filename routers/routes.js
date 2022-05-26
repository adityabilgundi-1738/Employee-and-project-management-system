const express = require('express')
const router = express.Router()

const employeeCtrl = require('../controllers/employee.controller')
const projCtrl =require('../controllers/project.controller')

router.get('/employee/:id',employeeCtrl.get_emp)

router.get('/employee',employeeCtrl.list_emp)

router.put('/newEmployee',employeeCtrl.create_emp)

router.delete('/employee/:id',employeeCtrl.delete_emp)

router.put('/employee/:id',employeeCtrl.update_emp)

router.get('/project/:id',projCtrl.get_proj)

router.get('/project',projCtrl.list_proj)

router.post('/newProject',projCtrl.create_proj)

router.put('/project/:id',projCtrl.update_proj)

router.delete('/project/:id',projCtrl.delete_proj)

module.exports = router;