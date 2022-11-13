const Product = require('../model/product');


const gethomeScreen = (req, res)=>{
    res.render('shop/index', {
        pageTitle:"Home Page"
    });
}

const getProducts = (req,res, next)=>{
    Product.fetchAll((products)=>{
        res.render('shop/product-list',{
            prods:products,
            pageTitle:"Shop",
            path:'/',
            hasProducts:products.length>0,
            activeShop:true,
            productCss:true,
        });
    });
    
}

const getUserCart = (req, res)=>{
    res.render('shop/cart',{
        pageTitle:"User Cart"
    });
}

const getUserCheckout = (req, res)=>{
    res.render('shop/checkout', {
        pageTitle:"User Checkout"
    });
}

const getProductDetails = (req, res)=>{
    res.render('shop/product-details',{
        pageTitle:"Product Details"
    });
}

const getOrders = (req, res)=>{
    res.render('shop/order',{
        pageTitle:"Your Order"
    });
}


const errorPage = (req,res, next)=>{
    res.status(404).render('ErrorPage',{pageTitle:"Page Not Found"});
};

module.exports = {
    gethomeScreen,
    getProducts,
    errorPage,
    getUserCart,
    getUserCheckout,
    getProductDetails,
    getOrders,
}