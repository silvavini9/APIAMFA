const express = require("express");
const mongoose = require("mongoose");

const Routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://APIAMFA:PAYxJkZvcRufD3HF@api-pwpof.mongodb.net/Cars?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});

server.use(express.json())
server.use(Routes);

// GET, POST, PUT, DELETE

server.listen(3333);