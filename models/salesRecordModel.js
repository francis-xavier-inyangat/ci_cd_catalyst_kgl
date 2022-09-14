const express = require("express");
const mongoose = require('mongoose')

const CashSalesSchema = new mongoose.Schema({
    prodName:{
        type: String,
        trim: true
    }, 
    prodType:{
        type: String,
        trim: true
    },
    tonnage:{
        type: Number,
        trim: true
    },
    buyerName:{
        type: String,
        trim: true
    },
    amountPaid:{
        type: Number,
        trim: true
    },
    buyerContact:{
        type: String,
        trim: true
    },
    date:{
        type: String,
        trim: true
    },
    salesAgent:{
        type: String,
        trim: true
    },
  
});
module.exports = mongoose.model('CashSale', CashSalesSchema)