const express =require('express');
const router = express.Router();
const mongoose = require('mongoose');
const RegisterUser = require('../models/RegisterModel');



// retrieve system users
router.get('/', async(req,res)=>{
  req.session.user = req.user;
  if(req.session.user.position == "director"){

    try{
        const userDetails = await RegisterUser.find();
        res.render('all_users',{users:userDetails,title: "Registered Users Details" } );
    }
    catch(err){
        console.log(err)
        res.send('Oooops! Failed to retrive registered users');
    }
  }else{
    res.render("pageAccessDenied")
  }
});

// delete a system user
router.post('/delete', async(req, res) => {
    try {
       await RegisterUser.deleteOne({ _id: req.body.id })
       res.redirect('back')
   } catch (err) {
        console.log(err);
       res.send("Unable to delete item in the database");
   }
 
 });
//  get the updte form
 router.get('/updateuser/:id', async(req, res) => {
  try{
   
    const item = await RegisterUser.findOne({_id:req.params.id});

    // user is what the pug file uses for identifying id
    res.render('updateUser',{user:item});
  }
  catch(error){
    res.send("Product not found in DB");
  }
 });
//  update user infotmation
router.post('/updateuser/', async(req, res) => {
    try{
      
      await RegisterUser.findOneAndUpdate({_id:req.query.id},req.body);
      
      res.redirect('/users');
    }
    catch(error){
      res.send("Failed to update product");
      console.log(error);
    }
   });



module.exports = router;