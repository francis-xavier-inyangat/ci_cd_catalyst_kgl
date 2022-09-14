const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const RegisterUser = require('../models/RegisterModel');

//register route
router.get('/', (req, res) => {
    req.session.user = req.user
    let user = req.session.user;
    res.locals.user = user;
    if(req.user.position == "director"){
    res.render('signUp');
    }else{
        res.render('pageAccessDenied');
    }
  });

//   post user to database
router.post('/', async(req, res) => {
    const newuser = new RegisterUser(req.body);

await RegisterUser.register(newuser,req.body.regPass)
    res.redirect('/login')

//  
})





module.exports = router;





