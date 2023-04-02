const mongoose = require('mongoose');

var mongoURL = 'mongodb://localhost:27017/Concresco'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log("MongoDB Connected");
})

db.on('error', ()=>{
    console.log("MongoDB Connection Failed");
})

module.exports = mongoose