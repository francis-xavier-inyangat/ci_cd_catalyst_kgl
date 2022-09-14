const express = require('express');

const router = express.Router();

const CashSale = require('../models/salesRecordModel');


// const authSales = require("./middlewares");

// route for cash sales
router.get('/',  (req, res) => {
  req.session.user = req.user
  let user = req.session.user;
  res.locals.user = user;
  res.render('salesRecord');
});

// post product to the database
router.post('/', async(req,res)=>{
 try{
  const newsale = CashSale(req.body);
  await newsale.save();
  res.redirect('/sales');
 
 }
 catch(err){
  res.status(400).render('index');
 }
});

// retrieve sales recordss

router.get('/cashsaleslist', async(req,res)=>{
  req.session.user = req.user
  if(req.user.position == "director"){
    try{
        const salesDetails = await CashSale.find()

        // aggreation
        const totalStock = await CashSale.aggregate([
          {
            "$group":{_id:"$all",
            totalWeight: {$sum:"$tonnage"},
            totalAmount: {$sum:"$amountPaid"}
          }
          }
        ]);
        res.render('cashRecords',{cashsales:salesDetails,title: "Registered Users Details",total:totalStock[0] } );
    }
    catch(err){
        console.log(err)
        res.send('Oooops! Failed to retrive registered users');
  }
}else{
  // res.status(401).send('You don\'t have permission to access!');
  res.render('pageAccessDenied');
}
});

// delete a system user
router.post('/delete', async(req, res) => {
  try {
     await CashSale.deleteOne({ _id: req.body.id })
     res.redirect('back')
 } catch (err) {
      console.log(err);
     res.status(400).send("Unable to delete item in the database");
 }

});
//  get the updte form
router.get('/updatecashsale/:id', async(req, res) => {
  req.session.user = req.user
  let user = req.session.user;
  res.locals.user = user;
try{
 
  const item = await CashSale.findOne({_id:req.params.id});

  // user is what the pug file uses for identifying id
  res.render('updatecashsale',{cashsale:item});
}
catch(error){
  res.send("Product not found in DB");
}
});
//  update sales infotmation
router.post('/updatecashsale/', async(req, res) => {
  try{
    
    await CashSale.findOneAndUpdate({_id:req.query.id},req.body);
    
    res.redirect('/sales/cashsaleslist');
  }
  catch(error){
    res.send("Failed to update product");
    console.log(error);
  }
 });








module.exports = router;