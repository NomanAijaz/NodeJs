const express = require('express');
const router  = express.Router();
const path = require('path');
router.get('/add-Item',(req,res, next)=>{
    console.log("In another middleware");
    //res.send('<form action ="/item" method="POST"><input type="text" name="message"><button type="submit">Enter</buttom></form>');
   // res.send('<form action ="/admin/add-Item" method="POST"><input type="text" name="message"><button type="submit">Enter</buttom></form>');
   res.sendFile(path.join(__dirname,'../','views','add-Items.html'));

   //---will send response here

})
router.post('/add-Item',(req, res)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;