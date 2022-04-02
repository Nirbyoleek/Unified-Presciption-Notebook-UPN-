const mongoose = require("mongoose");

const uri = "mongodb+srv://User:User@cluster0.xgg1s.mongodb.net/upn?retryWrites=true&w=majority"

mongoose.connect(uri, {useUnifiedTopology : true, useNewUrlParser: true});

var connection = mongoose.connection;

connection.on('error', ()=>{
    console.log("Database Connected Failed ");
})

connection.on('connected', ()=>{
    console.log("Database Connected Successfully");
})

module.exports = mongoose
