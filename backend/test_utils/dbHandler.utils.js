const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongoServer = new MongoMemoryServer();

async function dbConnect (){
    
    await mongoServer.start();
    const mongoUri = mongoServer.getUri();

    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    await mongoose.connect(mongoUri, mongooseOpts);
};
exports.dbConnect = dbConnect;

async function dbDisconnect() {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
};
exports.dbDisconnect = dbDisconnect;