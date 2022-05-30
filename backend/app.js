const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const routes = require('./routers/routes')

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))

mongoose
    .connect('mongodb+srv://admin:PCF5a823Xk0KKrZs@cluster0.pdwd6gk.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    
    .then(result => {
        app.listen('7000')
        console.log('Connected to DB')
    })
    .catch(err => console.log(err))

app.use('/hello', (req,res) => {
    res.status(200).send('Hey! There Lattech Here')
})

app.use('/', routes)

app.use('*',(req,res) => {//default route
    res.status(400).send('Page Not found! br0')
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