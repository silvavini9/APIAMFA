const express = require("express");
const Router = express.Router();
const carController = require('./controllers/carController');


// Fazer integração com o bd e os controllers
Router.get('/', carController.index );

Router.post('/car/average', carController.store);
Router.get('/car/:placa', carController.list)

module.exports = Router;