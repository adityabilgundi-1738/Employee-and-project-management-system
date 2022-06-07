const Employee = require('../models/employee')

const allEmployee = async (req, res) => {
    Employee.find({}, function(err,employee){
        if(err){
            res.json({success: false})
        }
        employee = employee.map(function(item){
            const it = item;
            return it;
        })
        res.json({success: true, employee:employee})
    })
}

const oneEmployee = async(req,res) => {//done
    const {id} = req.body;
    Employee.findOne({_id: id}, function(err,employee){
        if(err){
            res.json({success:false})
        }
        employee = employee;
        res.json({success: true, employee: employee})
    })
}

const newEmployee = async (req,res) => {//done
    const {name,password,email,level} = req.body

    const emp = new Employee({name: name, email: email, password: password, level: level}, function(err,emp){
        if(err){
            res.json({success: false})
        }
    })
    emp.save();
    res.json({success: true, emp: emp})
}

const updateEmployee = async(req,res) => {//done
    const {id,name,email,password,level} = req.body;
    Employee.find({_id: id}).then((emp) => {
        if(emp.length == 1){
            const query = {_id: emp[0]._id};
            const newvalues = {$set: {name: name, email: email, password: password, level: level}};
            Employee.updateOne(query,newvalues, function(err){
                if(err){
                    res.json({success:false})
                }
                res.json({success:true, employee: emp})
            })
        }
        else{
            res.json({success: false})
        }
    })
}

const deleteEmployee = async (req,res) =>{//done
    const {id} = req.body
    Employee.find({_id: id}).then((emp) => {
        if(emp.length == 1){
            const query = {_id: emp[0]._id}
            Employee.deleteOne(query, function(err){
                if(err){
                    res.json({success:false})
                }
                res.json({success:true, project: emp})
            })
        }
        else{
            res.json({success:false})
        }
    })
}

module.exports = {
    newEmployee,
    updateEmployee,
    allEmployee,
    deleteEmployee,
    oneEmployee
}