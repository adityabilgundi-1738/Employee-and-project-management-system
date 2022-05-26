const Project = require('../models/project')

const create_proj = async (req,res) => {//incomp
    const proj = new Project(req.body)
    try{
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

const get_proj = async(req,res,id) => {//renders the individual project page
    try{
        const result = await Project.findById(id)
        res.render('Project_details', {Employee: result, title: 'Project Details'})
    }
    catch(e){
        console.log(e)
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
    }
}

module.exports = {
    create_Project,
    create_Project_page,
}