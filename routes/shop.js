const express = require('express');
const router = express.Router();
const shopController = require('../controller/shop');

router.get('/', shopController.gethomeScreen);
router.get('/products',shopController.getProducts);
router.get('/cart', shopController.getUserCart);
router.get('/check-out', shopController.getUserCheckout);
router.get('/order', shopController.getOrders);
router.get('/product-details', shopController.getProductDetails)



module.exports = router;