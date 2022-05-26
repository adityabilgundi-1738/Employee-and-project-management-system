import config from './config/config'
import app from './express'
import mongoose from 'mongoose'

mongoose.promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connnection.on('error', () => {
    throw new Error(`unable to connect to ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
    if(err){
        console.log(err)
    }
    console.log(`Server started on port ${config.port}`);
})