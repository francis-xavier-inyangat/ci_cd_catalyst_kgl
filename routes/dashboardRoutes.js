const express = require('express');

const router = express.Router();


// route for cash sales
router.get('/',  (req, res) => {
  req.session.user = req.user
  if(req.user.position === "director"){
  res.render('dashboard');
  }else{
    // res.status(401).send('You don\'t have permission to access!');
    res.render('pageAccessDenied');
  }
});

module.exports = router;