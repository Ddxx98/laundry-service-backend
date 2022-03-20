const express = require('express');
const bodyParser = require('body-parser')
const Order = require('../model/post');
const router = express.Router()

router.use(bodyParser());

/* ======================== FETCH ALL ORDERS ===========================*/
router.get("/orders", async (req, res) => {
    const orders = await Order.find({user: req.user});
    res.status(200).json({
        status: "success",
        orders
    })
})

/* =========================== CANCEL ORDER =============================*/
router.put("/orders/:orderId", async (req, res) => {
    try {
        const order = await Order.updateOne({_id: req.params.id, user: req.user},  {status: "Cancelled"})
        return res.status(200).json({
            status: "Success",
        })
        

    } catch (e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

/* =========================== FETCH ORDER WITH ID ===============================*/
router.get("/orders/:orderId", async (req, res) => {
    try {
        const order = await Order.find({_id: req.params.id, user: req.user})
        return res.status(200).json({
            status: "Success",
        })
        

    } catch (e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

/* =========================== CREATE ORDER ===============================*/



module.exports = router

