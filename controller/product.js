
const products = [];
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
    res.render('shop',{
        prods:products,
        pageTitle:"Shop",
        path:'/',
        hasProducts:products.length>0,
        activeShop:true,
        productCss:true,
    });
}

const postProduct = (req, res)=>{
    products.push({title: req.body.title})
    res.redirect('/');
};

module.exports = {
    getAddProduct,
    getProducts,
    postProduct
}