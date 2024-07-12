require('dotenv').config({path: '.env'});
const http = require('http');
const {app} = require('./app');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const Mongo_Url = process.env.MongoUrl || "mongodb://localhost:27017/Micasa";
const Server = http.createServer(app);


async function startServer(){

    mongoose.connection.once('open', ()=>{
        console.log("Mongo Connection is ready!")
    })

    mongoose.connection.on('error',(err)=>{
        console.error(err);
    })

   await mongoose.connect(Mongo_Url);    
    // Listening
    Server.listen(port,()=>{
        console.log(`Port is running on ${port}`)
    });
}
startServer();