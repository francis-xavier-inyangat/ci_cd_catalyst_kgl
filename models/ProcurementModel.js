const express = require("express");
const mongoose = require('mongoose')

const ProcurementSchema = new mongoose.Schema({
    consignment:{
        type: String,
        trim: true
    }, 
    typeofProduce:{
        type: String,
        trim: true
    },
    dispatchDate:{
        type: String,
        trim: true
    },
    unitCost:{
        type: String,
        trim: true
    },
    no_kgs:{
        type: Number,
        trim: true
    },
    pay:{
        type: Number,
        trim: true
    },
    payTerms:{
        type: String,
        trim: true
    },
    receiptNum:{
        type: String,
        trim: true
    },
    dueDate:{
        type: String,
        trim: true
    },
    otherPay:{
        type: String,
        trim: true
    },
    supplierName:{
        type: String,
        trim: true
    },
});
module.exports = mongoose.model('Procurement', ProcurementSchema)