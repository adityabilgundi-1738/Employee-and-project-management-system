const Project = require('../models/project')

const allProjects = async(req,res) => {//done
    Project.find({} , function(err,project){
        if(err){
            res.json({success: false})
        }
        project = project.map(function(item){
            const it = item
            return it;
        });
        res.json({success: true, project: project})
    })
}

const oneProject = async(req,res) => {//done
    const {id} = req.body;
    Project.findOne({_id: id}, function(err,project){
        if(err){
            res.json({success: false})
        }
        project = project;
        res.json({success: true, project: project})
    })
}

const newProject = async (req,res) => {//done
    const {title, description, status} = req.body 

    const proj = new Project({title: title, description: description, status: status}, function(err,proj){
        if(err){
            res.json({success: false})
        }
    });
    proj.save();
    res.json({success:true, proj: proj});
}

const updateProject = async(req,res) => {//done
    const {id,title,description} = req.body;
    Project.find({_id: id}).then((proj) => {
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
        else{
            res.json({success: false})
        }
    })
}

const deleteProject = async(req,res) => {//done
    const {id} = req.body
    Project.find({_id: id}).then((proj) => {
        if(proj.length == 1){
            const query = {_id: proj[0]._id}
            Project.deleteOne(query, function(err){
                if(err){
                    res.json({success:false})
                }
                res.json({success:true, project: proj})
            })
        }
        else{
            res.json({success:false})
        }
    })
}

module.exports = {
    newProject,
    deleteProject,
    updateProject,
    oneProject,
    allProjects
}