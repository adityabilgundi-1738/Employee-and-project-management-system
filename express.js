const express = require('express')
const path = require('path')
const bodyParser = require('bodyParser')
const routes = require('./routers/routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use('/', routes)

app.use('*',(req,res) => {//default route
    res.send('Page Not found!')
})

app.use((err,req,res,next) => {
    if(err.name === 'UnauthorisedError'){
        res.status(401).json({"error" : err.name + ": " + err.message})
    }
    else if(err){
        res.status(400).json({"error" : err.name + ": " + err.message})
        console.log(err)
    }
})

export default app