const Product = require('../model/product');

const getAddProduct = (req,res, next)=>{
    res.render('admin/add-Items',{
        pageTitle:"Add Products",
        path:"/admin/add-Item",
        formCss:true,
        productCss:true,
        activeAddProduct:true,
    });
};

const postProduct = (req, res)=>{
    console.log(req.body);
    const {title,imageUrl,price, description} = req.body; 
    const products = new Product(title,imageUrl,description,price);
    products.save();
   // products.push({title: req.body.title})
    res.redirect('/');
};

const editProduct = (req, res)=>{
    console.log("I am in edit product");
    res.render('admin/edit-product',{
        pageTitle: "Edit Product", 
    });
}

const getAdminProducts = (req, res)=>{
    Product.fetchAll((products)=>{
        res.render('admin/products',{
            prods:products,
            pageTitle:"Admin products",
        });
    });
}

module.exports = {
    getAddProduct,
    postProduct,
    editProduct,
    getAdminProducts,
}
