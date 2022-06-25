const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors');

const routes = require('./routers/routes')

const dburl = 'mongodb+srv://admin:PCF5a823Xk0KKrZs@cluster0.pdwd6gk.mongodb.net/?retryWrites=true&w=majority';
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors());

mongoose
    .connect(dburl, {useNewUrlParser: true, useUnifiedTopology: true})
    
    .then(result => {
        app.listen('7000')
        console.log('Connected to DB')
    })
    .catch(err => console.log(err))

app.use('/', routes)

app.use('*',(req,res) => {//default route   
    res.status(400).send('Page Not found!')
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