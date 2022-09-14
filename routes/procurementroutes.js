const express = require('express');

const router = express.Router();

const Procurement = require('../models/ProcurementModel');




router.get('/', (req, res) => {
  req.session.user = req.user
  let user = req.session.user;
  res.locals.user = user;
  if(req.user.position == "director" || req.user.position == "manager"){
    res.render('procurement');
  }else{
    res.status(401).send('You don\'t have permission to access!');
  }
});

router.post('/', async(req,res)=>{
 
    try{
  const newPurchase = new Procurement(req.body);
  await newPurchase.save();
  res.redirect('/procurement');
  console.log(res.body);
    }
    catch(err){
  res.status(400).send('Failed to save Record!');
    }
  
})


// retrieve procurement records
router.get('/procurementlist', async(req,res)=>{
  req.session.user = req.user
 
  if(req.user.position == "director"){

  try{
      const procurementDetails = await Procurement.find();
      const totalStock = await Procurement.aggregate([
        {
          "$group":{_id:"$all",
          totalWeight: {$sum:"$no_kgs"},
          totalAmount: {$sum:"$pay"}
        }
        }
      ]);
      res.render('procurementRecords', {purchases:procurementDetails,title: "Procurement Records", total:totalStock[0] } );
  }
  catch(err){
      console.log(err)
      res.send('Oooops! Failed to retrive Procurement records');
  }
}else{
  res.status(401).send('You don\'t have permission to access!');
}
});
// delete stock
router.post('/delete', async(req, res) => {
  try {
     await Procurement.deleteOne({ _id: req.body.id })
     res.redirect('back')
 } catch (err) {
      console.log(err);
     res.status(400).send("Unable to delete item in the database");
 }

});
//  get the updte form
router.get('/updatestock/:id', async(req, res) => {
  req.session.user = req.user
  let user = req.session.user;
  res.locals.user = user;
try{
 
  const item = await Procurement.findOne({_id:req.params.id});

  // user is what the pug file uses for identifying id
  res.render('updateStock',{purchase:item});
}
catch(error){
  res.send("Product not found in DB");
}
});
//  update sales infotmation
router.post('/updatestock/', async(req, res) => {
  try{
    
    await Procurement.findOneAndUpdate({_id:req.query.id},req.body);
    
    res.redirect('/procurement/procurementlist');
  }
  catch(error){
    res.send("Failed to update product");
    console.log(error);
  }
 });


module.exports = router;