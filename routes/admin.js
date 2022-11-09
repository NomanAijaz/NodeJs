const express = require('express');
const router  = express.Router();
const controller = require('../controller/product');



router.get('/add-Item', controller.getAddProduct);
router.post('/add-Item',controller.postProduct);

module.exports = router;