const express = require("express");
const mongoose = require("mongoose");

const Router = require('./routes');

const server = express();

() => {
        () => { 
            return mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pwpof.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true
            })
    }
}

server.use(express.json())
server.use(routes);

// GET, POST, PUT, DELETE

server.listen(3333);