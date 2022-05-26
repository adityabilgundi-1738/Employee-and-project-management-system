const Employee = require('../models/employee')

const create_emp = async (req,res) => {//incomp
    const emp = new Employee(req.body);
    await emp.save();

    try{
        res.redirect('/employee/:id');
    }
    catch(e){
        console.log(e);
    }
}

const list_emp = async (req, res) => {
    try {
        let users = await Employee.find().select('Name Email Projects Level')
        res.json(users)
    } 
    catch(err){
        return res.status(400).json({
            error: "Could not list Employee"
        })
    }
}

const get_emp = async(req,res,next,id) => {//renders the individual employee page
    try{
        let result = await Employee.findById(id)
        if(!result){
            return res.status(400).json({
                error: "Employee does not exist"
            })
        }
        req.profile = result;
        next()
    }
    catch(e){
        return res.status(400).json({
            error: "Could not find Employee"
        })
    }
}

const update_emp = async(req,res) => {
    try{
        let result = req.profile
        result = extend(result,res.body)
        result.updated = Date.now()
        await result.save()
        res.json(result)
    }
    catch(err){
        return res.status(400).json({
            error: "Could not update Employee details"
        })
    }
}

const remove_emp = async (req,res) =>{
    try{
        let result = req.profile
        let deletedEmployee = await result.remove()
        res.json(deletedEmployee)
    }
    catch(err){
        return res.status(400).json({
            error: "Employee not deleted"
        })
    }
}

module.exports = {
    create_emp,
    update_emp,
    list_emp,
    remove_emp,
    get_emp
}