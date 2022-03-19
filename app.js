const express = require('express');
const app = express(); 

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://meghna:11223344@cluster0.wpyvn.mongodb.net/laundryService?retryWrites=true&w=majority')
const PORT = process.env.PORT || 5000


const jwt = require('jsonwebtoken');
var cors = require('cors');

SECRET = "RESTAPI"


app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(PORT,()=>{  // bind the connections on this port and listen to it
    console.log(`example app listening on port ${PORT}`);
})


