const express = require('express');
const passport = require('passport');
const router = express.Router();

const mongoose = require('mongoose');
const RegisterUser = require('../models/RegisterModel');

// login route
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', passport.authenticate('local',{failureRedirect:'/login'}), 
(req,res)=>{
    console.log(req.body);
    req.session.user = req.user
    // take user to dashborad on successful login
    if(req.session.user.position === "attendant"){
      res.redirect('/sales');
    }
    if(req.session.user.position === "manager"){
      res.redirect('/procurement');
    }if(req.session.user.position === "director"){
      res.redirect('/dashboard');
    }

});


// log out
router.get('/logout', (req, res)=>{
  // if(req.session){
    req.session.destroy()
  //     if(err){
  //       res.send("Unble to logout")
  //     }else
      return res.redirect('/')
     
  // });
  });
 

// page not found
router.get('/pageNotFound', (req, res)=>{
  req.session.destroy(()=>{
      res.render('pageNotFound');
  });
});


// router.get('/accessDenied', (req, res)=>{
//   req.session.destroy(()=>{
//       res.render('pageAccessDenied');
//   });
// });


module.exports = router;





