const Project = require('../models/project')

const allProjects = async(req,res) => {//done
    try{
        let project = Project.find({});
        project = project.map(function(item){
            const it = item
            return it;
        });
        res.json({success: true, project: project})
    }
    catch(e){
        res.json({success: false})
    }
}

const oneProject = async(req,res) => {//done
    try{
        const {id} = req.body;
        let project = Project.findOne({_id: id})
        project = project;
        res.json({success: true, project: project})
    }
    catch(e){
        res.json({success: false})
    }
}

const newProject = async (req,res) => {//done
    try{
        const {title, description, status} = req.body
        const proj = new Project({title: title, description: description, status: status})
        proj.save();
        res.json({success:true, proj: proj});
    }
    catch(e){
        res.json({success: false})
    }    
}

const updateProject = async(req,res) => {//done
    try{
        const {id,title,description} = req.body;
        let proj = Project.find({_id: id})
        if(proj.length == 1){
            const query = {_id: proj[0]._id};
            const newvalues = {$set: {title: title, description: description}};
            Project.updateOne(query,newvalues, function(err){
                if(err){
                    res.json({success:false})
                }
                res.json({success:true, project: proj})
            })
        }
    }
    catch(e){
        res.json({success: false})
    }
}

const deleteProject = async(req,res) => {//done
    try{
        const {id} = req.body
        let proj = Project.find({_id: id})
        if(proj.length == 1){
            const query = {_id: proj[0]._id}
            Project.deleteOne(query, function(err){
                if(err){
                    res.json({success:false})
                }
                res.json({success:true, project: proj})
            })
        }
    }
    catch(e){
        res.json({success:false})
    }
}

module.exports = {
    newProject,
    deleteProject,
    updateProject,
    oneProject,
    allProjects
}