const express = require("express");

const Cake = require('./models/cakeModel');

const db = require("./db")

const app = express();

app.use(express.json());

const cakesRoute = require('./routes/cakesRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/cakes/',cakesRoute)
app.use('api/users/',userRoute)

app.get("/", (req, res) => {
    res.send("Server working "+port);
});

app.get("/getcakes", (req, res) => {
    
    Cake.find({}, (err, docs)=>{

        if(err){
            console.log(err)
        }
        else{
            res.send(docs)
        }
    })

});

const port = process.env.PORT || 8000;

app.listen(port, () => 'Server running on port');