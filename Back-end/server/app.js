const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const studentRoutes = require('../routes/routes.js');
const cors = require('cors');

//MIDDLEWARES 
    //JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
    //Routes
app.use('/api', studentRoutes);

//Module creation
module.exports = app;