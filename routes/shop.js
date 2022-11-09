const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/',(req,res, next)=>{
    res.render('shop',{
        prods:adminData.products,
        pageTitle:"Shop",
        path:'/',
        hasProducts:adminData.products.length>0,
        activeShop:true,
        productCss:true,
    });
})

module.exports = router;