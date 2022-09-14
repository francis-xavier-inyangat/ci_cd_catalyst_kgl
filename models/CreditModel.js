const express = require("express");
const mongoose = require('mongoose')

const CreditSchema = new mongoose.Schema({
    selectProdName:{
        type: String,
        trim: true
    }, 
    proType:{
        type: String,
        trim: true
    },
    tonesQty:{
        type: Number,
        trim: true
    },
    dispatchDate:{
        type: String,
        trim: true
    },
    amountDue:{
        type: Number,
        trim: true
    },
    dueDate:{
        type: String,
        trim: true
    },
    debtor:{
        type: String,
        trim: true
    },
    buyerLocation:{
        type: String,
        trim: true
    },
    buyerID:{
        type: String,
        trim: true
    },
    buyerTel:{
        type: String,
        trim: true
    },
    salesAtten:{
        type: String,
        trim: true
    },
   
  
});
module.exports = mongoose.model('CreditSale', CreditSchema)