const express = require("express");
const Router = express.Router();
const AverageController = require('./controllers/average');


// Fazer integração com o bd e os controllers
Router.get('/', AverageController.store);

Router.post('/car/average', AverageController.store);

module.exports = Router;