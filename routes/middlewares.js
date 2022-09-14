const express = require('express');
const router = express.Router();
const RegisterUser = require('../models/RegisterModel');

// authorize sales page

const authSales = (permissions)=>{
    
        // res.status(401).render('pageAccessDenied')
    return (req, res, next)=>{
        array.push(req.session.user.position) 

        const user = req.session.user;
        const userPosition = user.position;
        console.log(userPosition);
        if(permissions.includes(userPosition)){
            
           
            console.log(array);
            next();
        }
        else if(array.includes(userPosition)){
           next();
        }
        else if(!array.includes(userPosition)){
            res.status(401).render('pageAccessDenied');

        }
      }
}



module.exports = authSales;
// module.exports = authCredit;
// module.exports = authProcurement;