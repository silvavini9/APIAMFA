const express = require("express");
const Router = express.Router();
const carController = require('./controllers/carController');

Router.post('/car/average', carController.store);

module.exports = Router;