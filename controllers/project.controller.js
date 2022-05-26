const Project = require('../models/project')

const get_proj = async(req,res,id) => {//renders the individual project page
    try{
        let result = await Project.findById(id)
        if(!result){
            return res.status(400).json({
                error: "Employee Does not exist"
            })
        }
        req.profile = result
    }
    catch(e){
        console.log(e)
    }
}

const list_proj = async(req,res) => {
    try{
        const result = await Project.find().select('')
        res.json(result)
    }
    catch(err){
        return res.status(400).json({
            error: "Could not list all Projects"
        })
    }
}

const create_proj = async (req,res) => {//incomp
    try{
        const proj = new Project(req.body)
        await proj.save()
        return res.status(200).json({
            message: "Succesfully created a Project"
        })
    }
    catch(e){
        return res.status(400).json({
            error: "Project not created"
        })
    }
}

const update_proj = async(req,res,id) => {
    await Project.findByIdAndUpdate(req.params.id, req.body);
    try{
        res.redirect('/get_project/:id')
    }
    catch(e){
        console.log(e);
    }
}

const delete_proj = async(req,res) => {
    try{
        let result = req.profile
        let deletedProj = await result.remove()
        res.json(deletedProj)
    }
    catch(err){
        return res.status(400).json({
            error: "Project not Deleted"
        })
    }
}

module.exports = {
    create_proj,
    delete_proj,
    update_proj,
    get_proj,
    list_proj
}