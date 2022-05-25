const Employee = require('../models/employee')
const Project = require('../models/project')

const Emp_create_employee = async (req,res) => {
    const emp = new Employee(req.body);
    await emp.save();
    try{
        res.redirect('');
    }
    catch(e){
        console.log(e);
    }

}

const create_Project = async (req,res) => {
    
}