// const fs = require('fs');
// const http = require('http');

// const server = http.createServer((req, res)=>{
    
//     if(req.url === '/'){    
//         res.write('<html>')
//         res.write('<head><title>MyPage</title></head>')
//         res.write('<body>')
//         res.write('<form action ="/message" method="POST"><input type="text" name="message"><button type="submit">Enter</buttom></form>')
//         res.write('</body>')
//         res.write('</html>')
//         return res.end()
//     }
//     if(req.url==='/message' && req.method ==="POST"){
//         const body = [];
//         req.on('data',(chunk)=>{
//             console.log(chunk);
//             body.push(chunk)
//         });
//         return req.on('end',()=>{
//             const parseBody = Buffer.concat(body).toString();
//             // fs.writeFileSync('message.txt','Hello, '+parseBody.split('=')[1]);
//             //for async behavior we use
//             fs.writeFile('message.txt','Hello, '+parseBody.split('=')[1], err=>{
//                 res.statusCode=302;
//                 return res.end();
//             });
//         })
              
        
//     }

// });

// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// })

// ==============the above whole messy code was before express.js now after it introduced====================


//const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
// app.use((req,res, next)=>{
//     console.log("In a middleware");
//     next();
// })

// app.use((req,res, next)=>{
//     console.log("In another middleware");
//    //---will send response here

// })

//=========here this first / endpoint will always runs whatever the url is

// app.use('/',(req,res, next)=>{
//     console.log("In a middleware");
//     next();
// })

// app.use('/addItem',(req,res, next)=>{
//     console.log("In another middleware");
//    //---will send response here

// })

// always keep the endpoint from top to bottom where / means the first endpoint comes in last.
// In this way there is no need of next methd as well.


const bodyParser = require('body-parser');

//it will always come before the endpoints 
app.use(bodyParser.urlencoded({extended:false}));

//here we have installed the template engines like pug, ejs and express-handlebars for server side rendring nd will set here
app.set('view engine','pug');
//let express now where the .pug files are 
app.set('views','views');

//let set the static css files
app.use(express.static(path.join(__dirname,'public')));

// app.use('/addItem',(req,res, next)=>{
//     console.log("In another middleware");
//     res.send('<form action ="/item" method="POST"><input type="text" name="message"><button type="submit">Enter</buttom></form>');
//    //---will send response here

// })
// app.use('/item',(req, res)=>{
//     console.log(req.body);
//     res.redirect('/');
// })
// app.use('/',(req,res, next)=>{
//     console.log("In a main middleware");
//     res.send('<h1>I am in Main</h2>')

// })

//instead of using use with app we can also use get/post/patch/delete 
// they will trigger only with the respective request take place. like
// app.get('/item',(req, res)=>{
//     console.log(req.body);
//     res.redirect('/');
// })

// app.post('/item',(req, res)=>{
//     console.log(req.body);
//     res.redirect('/');
// })

// now we can also use routes in express js so lets start with this
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use(adminRoutes);
// app.use(shopRoutes);
//if you want to append any word before each url to access routes you can use. it will append /admin in each route
app.use('/admin',adminRoutes); // request should be send on /admin/addItem
app.use(shopRoutes);

//if app donot found any of the routes above it will show the last one which is error page
app.use((req,res, next)=>{
    //res.status(404).send('<h1>Page not found!</h1>');
    res.status(404).sendFile(path.join(__dirname,'views', 'ErrorPage.html'));
});


// const server = http.createServer(app);
// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// })

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})






