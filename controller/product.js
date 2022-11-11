const Product = require('../model/product');

const getAddProduct = (req,res, next)=>{
    res.render('add-Items',{
        pageTitle:"Add Products",
        path:"/admin/add-Item",
        formCss:true,
        productCss:true,
        activeAddProduct:true,
    });
}

const getProducts = (req,res, next)=>{
    Product.fetchAll((products)=>{
        res.render('shop',{
            prods:products,
            pageTitle:"Shop",
            path:'/',
            hasProducts:products.length>0,
            activeShop:true,
            productCss:true,
        });
    });
    
}

const postProduct = (req, res)=>{
    const products = new Product(req.body.title);
    products.save();
   // products.push({title: req.body.title})
    res.redirect('/');
};

const errorPage = (req,res, next)=>{
    res.status(404).render('ErrorPage',{pageTitle:"Page Not Found"});
};

module.exports = {
    getAddProduct,
    getProducts,
    postProduct,
    errorPage,
}