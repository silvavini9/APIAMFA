const express = require("express");
const mongoose = require("mongoose");

const Routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:oEKaDViFHOX4Y9zD@api-pwpof.mongodb.net/admin?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});

server.use(express.json())
server.use(Routes);

// GET, POST, PUT, DELETE

server.listen(3333);