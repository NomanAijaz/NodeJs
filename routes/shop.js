const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/',(req,res, next)=>{
    console.log("In a main middleware");
    //res.send('<h1>I am in Main</h2>')
   // res.sendFile(path.join(__dirname,'../','views','shop.html'));
   res.render('shop');
})

module.exports = router;