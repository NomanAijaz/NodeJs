const express = require('express');
const router  = express.Router();
const path = require('path');

const products = [];
router.get('/add-Item',(req,res, next)=>{
    console.log("In Add Item Controller");
   res.sendFile(path.join(__dirname,'../','views','add-Items.html'));
})
router.post('/add-Item',(req, res)=>{
    console.log(req.body.title);
    products.push({title: req.body.title})
    res.redirect('/');
})

module.exports = {
    router,
    products
};