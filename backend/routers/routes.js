const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')
const Project = require('../models/project')

const employeeCtrl = require('../controllers/employee.controller')
const projCtrl =require('../controllers/project.controller')

//Employee routes... here all routes are working and verified
router.post('/allEmployee',employeeCtrl.allEmployee)

router.post('/oneEmployee',employeeCtrl.oneEmployee)

router.post('/updateEmployee',employeeCtrl.updateEmployee)

router.post('/newEmployee',employeeCtrl.newEmployee)

router.post('/deleteEmployee',employeeCtrl.deleteEmployee)

//project routes... here all routes are working and verified
router.post('/allProjects',projCtrl.allProjects)

router.post('/oneProject',projCtrl.oneProject)

router.post('/newProject',projCtrl.newProject)

router.post('/updateProject',projCtrl.updateProject)

router.post('/deleteProject',projCtrl.deleteProject)

module.exports = router;