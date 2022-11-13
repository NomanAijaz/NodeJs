const express = require('express');
const router  = express.Router();
const adminController = require('../controller/admin');



router.get('/add-Item', adminController.getAddProduct);
router.post('/add-Item',adminController.postProduct);
router.post('/edit-product',adminController.editProduct);
//router.get('/edit-product',adminController.editProduct);
router.get('/products', adminController.getAdminProducts);

module.exports = router;