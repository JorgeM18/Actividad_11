//Colors plugin
const colors = require('colors');
//Express JS 
const express = require('express');
const app = require('./app');
//Database connection
const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/eduBIT';
const port = 3000;

mongoose.connect(URI, (err, res)=>{
    if (err){ console.log(`El error es ${err}`);}
    else {
        console.log(colors.green("We're successfully connected!"));
        app.listen(port, ()=> console.log(colors.yellow(`listening at http://localhost:${port}`)));
    }
});