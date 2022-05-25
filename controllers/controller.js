const Employee = require('../models/employee')
const Project = require('../models/project')

const index = async(req,res) => {
    await res.render('index');
}

const create_employee_page = async (req,res) => {
    await res.render('create_employee')
}

const create_employee = async (req,res) => {
    const emp = new Employee(req.body);
    await emp.save();

    try{
        res.redirect('');
    }
    catch(e){
        console.log(e);
    }

}

const create_Project_page = async (req,res) => {
    await res.render('create_project')
}

const create_Project = async (req,res) => {
    const proj = new Project(req.body)
    await proj.save()

    try{
       res.redirect('');
    }
    catch(e){
        console.log(e);
    }
}

const get_employee = async(req,res) => {//renders the individual employee page
    result = await Employee.findById(req.params.id)
    
    try{
        res.render('Employee_details',{Employee: result, title: 'Employee Details'})
    }
    catch(e){
        console.log(e)
    }
}

const get_project = async(req,res) => {//renders the individual project page
    result = await Project.findById(req.params.id)
    
    try{
        res.render('Project_details', {Employee: result, title: 'Project Details'})
    }
    catch(e){
        console.log(e)
    }
}

const get_update_emp_page = async(req,res) => {
    res.render('Update_emp')
}

const update_employee_details = async(req,res) => {//
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    try{
        res.redirect('/get_employee/:id')
    }
    catch(e){
        console.log(e);
    }
}

const get_update_proj_page = async(req,res) => {
    res.render('Update_proj')
}


const update_project_details = async(req,res) => {
    await Project.findByIdAndUpdate(req.params.id, req.body);
    try{
        res.redirect('/get_project/:id')
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    index,
    create_Project,
    create_Project_page,
    create_employee,
    create_employee_page,
    get_update_emp_page,
    update_employee_details,
    get_update_proj_page,
    update_project_details,
    get_employee,
    get_project
}