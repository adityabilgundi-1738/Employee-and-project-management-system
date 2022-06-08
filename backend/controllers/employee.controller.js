const Employee = require('../models/employee')

const allEmployee = async (req, res) => {
    try{
        let employee = await Employee.find({})
        employee = employee.map(function(item){
            const it = item;
            return it;
        })
        res.json({success: true, employee:employee})
    }
    catch(e){
        res.json({success: false})
    }
}

const oneEmployee = async(req,res) => {//done  
    try{
        const {id} = req.body;
        let employee = await Employee.findOne({_id: id})
        employee = employee;
        res.json({success: true, employee: employee})
    }
    catch(e){
        res.json({success:false})
    }
}

const newEmployee = async (req,res) => {//done
    try{
        const {name,password,email,level} = req.body
        const emp = new Employee({name: name, email: email, password: password, level: level})
        await emp.save();
        res.json({success: true, emp: emp})
    }
    catch(e){
        res.json({success: false})
    }    
}

const updateEmployee = async(req,res) => {//done
    try{
        const {id,name,email,password,level} = req.body;
        let emp = await Employee.find({_id: id})
        const query = {_id: emp[0]._id};
        const newvalues = {$set: {name: name, email: email, password: password, level: level}};
        await Employee.updateOne(query,newvalues);
        res.json({success:true, employee: emp})
    }
    catch(e){
        res.json({success: false})
    }
}

const deleteEmployee = async (req,res) =>{//done
    try{
        const {id} = req.body
        let emp = await Employee.find({_id: id});
        if(emp.length == 1){
            const query = {_id: emp[0]._id}
            Employee.deleteOne(query, function(err){
                if(err){
                    res.json({success:false})
                }
                res.json({success:true, project: emp})
            })
        }
    }
    catch(e){
        res.json({success:false})
    }
}

module.exports = {
    newEmployee,
    updateEmployee,
    allEmployee,
    deleteEmployee,
    oneEmployee
}