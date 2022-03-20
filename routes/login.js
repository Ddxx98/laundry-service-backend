const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
SECRET = "RESTAPI"

const { body, param, validationResult, oneOf } = require("express-validator")

const router = express.Router()

router.use(bodyParser());

/* =========================== LOGIN ===============================*/

router.post("/login",oneOf([body("email"),body("phone")]), body("password"), async (req, res) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        let user
        console.log(req.body)
        if(req.body.phone){
            var {phone,password} = req.body
            user = await User.findOne({ phone })
        }else if(req.body.email){
            var {email,password} = req.body
            user = await User.findOne({ email })
        }
        if (!user) {
            return res.status(401).json({
                status: "failed",
                message: "invalid user"
            })
        } 
        bcrypt.compare(password,user.password).then(function(result){
            if (result){
                var token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60*60),
                    data: user._id
                },SECRET)
                
                return res.status(200).json({
                    status:"success",
                    token
                })
            }else{
                return res.status(401).json({
                    status: "failed",
                    message:"not authenticated"
                })
            }
        })

    } catch (e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})




module.exports = router