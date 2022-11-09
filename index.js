
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

//in pug or ejs there is built-in express feature but for handlebars so we use it in another way
// the name you are passing as 1st paramter will the extension of file you gonna create for server-side rendering like shop or errorPage
app.engine('hbs', expressHbs.engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine','hbs');
app.set('views','views');

app.use('/admin',adminRoutes.router); 

app.use(shopRoutes);
app.use((req,res, next)=>{
    res.status(404).render('ErrorPage',{pageTitle:"Page Not Found"});
});


app.listen(3000,()=>{
    console.log("Server running on port 3000");
})






