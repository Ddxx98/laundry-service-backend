const express = require('express');
const bodyParser = require('body-parser');
const User = require('../model/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
SECRET = "RESTAPI"

const { body, param, validationResult } = require("express-validator")

const router = express.Router()

router.use(bodyParser());

module.exports = router