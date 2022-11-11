
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const Routes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const controller  = require('./controller/product');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.set('view engine','ejs');
app.set('views','views');

app.use('/admin',Routes); 

app.use(shopRoutes);

app.use(controller.errorPage);


app.listen(3000,()=>{
    console.log("Server running on port 3000");
})






