/* ===================== INITALISE MODULES AND APP =======================*/
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const app = express(); 

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/* ==================== INITIALISE ROUTES =======================*/
const loginRoutes = require("./routes/login")
const registerRoutes = require("./routes/register")
const orderRoutes = require("./routes/orders")

app.use("/api/v1",loginRoutes)
app.use("/ap1/v1",registerRoutes)
app.use("/api/v1/orders",orderRoutes)

/* =================== MONGOOSE CONNECTION =======================*/
mongoose.connect('mongodb+srv://meghna:11223344@cluster0.wpyvn.mongodb.net/laundryService?retryWrites=true&w=majority')
const PORT = process.env.PORT || 5000

/*===================== START SERVER ==============================*/
app.listen(PORT,()=>{  
    console.log(`example app listening on port ${PORT}`);
})


