const express = require('express');
const mongoose = require('mongoose');
const app = express(); 
const dotenv = require("dotenv").config();


//allows to take all the requests which have as content a json and makes the content available on the req
app.use(express.json());

//no params for use with all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;