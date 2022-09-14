const express = require('express');

const router = express.Router();

const CreditSale = require('../models/CreditModel');
// const CreditMatSale = require('../models/CreditMatuggaModel')


// route for credit sales
router.get('/', (req, res) => {
  req.session.user = req.user
  let user = req.session.user;
  res.locals.user = user;
    res.render('creditSales');
  });

// Post credit sales to db
router.post('/', async(req,res)=>{
  try{
    const newcredit = new CreditSale(req.body);
    await newcredit.save();
    res.redirect('/credit');
    console.log(req.body);
  }
  catch(err){
    res.status(400).render('creditSales')
  }

})

// // mattuga creditss
// router.post('/', async(req,res)=>{
//   req.session.user = req.user;
//   if(req.session.user.branch == "matuga"){
//     try{
//       const newMatCredit = new CreditMatSale(req.body);
//       await newMatCredit.save();
//       res.redirect('/credit');
//       console.log(req.body);
//     }
//     catch(err){
//       res.render('creditSales')
//     }
//   }else if(req.session.user.branch == "maganjo"){
//     try{
//       const newcredit = new CreditSale(req.body);
//       await newcredit.save();
//       res.redirect('/credit');
//       console.log(req.body);
//     }
//     catch(err){
//       res.render('creditSales')
//     }
//   }else{
//     res.send('Can not post sale!')
//   }
  
// })



// retrieve credit salesa 
router.get('/creditlist', async(req,res)=>{
  req.session.user = req.user
  if(req.session.user.position == "director"){
  try{
      const creditDetails = await CreditSale.find();

      // aggreation
      const totalStock = await CreditSale.aggregate([
        {
          "$group":{_id:"$all",
          totalWeight: {$sum:"$tonesQty"},
          totalAmount: {$sum:"$amountDue"}
        }
        }
      ]);
      res.render('creditRecords',{creditsales:creditDetails,title: "Credit Sales Records", total:totalStock[0]} );
  }
  catch(err){
      console.log(err)
      res.send('Oooops! Failed to retrive registered users');
  }
}else{
  // res.status(401).send('You don\'t have permission to access!');
  res.status(401).render('pageAccessDenied');
}
});


// delete a system user
router.post('/delete', async(req, res) => {
  try {
     await CreditSale.deleteOne({ _id: req.body.id })
     res.redirect('back')
 } catch (err) {
      console.log(err);
     res.status(400).send("Unable to delete item in the database");
 }

});
//  get the updte form
router.get('/updatedebtors/:id', async(req, res) => {
  req.session.user = req.user
  let user = req.session.user;
  res.locals.user = user;
try{
 
  const item = await CreditSale.findOne({_id:req.params.id});

  // user is what the pug file uses for identifying id
  res.render('updateCredits',{creditsale:item});
}
catch(error){
  res.send("Product not found in DB");
}
});
//  update sales infotmation
router.post('/updatedebtors/', async(req, res) => {
  try{
    
    await CreditSale.findOneAndUpdate({_id:req.query.id},req.body);
    
    res.redirect('/credit/creditlist');
  }
  catch(error){
    res.send("Failed to update product");
    console.log(error);
  }
 });



module.exports = router;