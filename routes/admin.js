const express = require('express');
const router  = express.Router();

const products = [];
router.get('/add-Item',(req,res, next)=>{
    res.render('add-Items',{pageTitle:"Add Products",path:"/admin/add-Item"});
})
router.post('/add-Item',(req, res)=>{
    products.push({title: req.body.title})
    res.redirect('/');
})

module.exports = {
    router,
    products
};