const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getResults= (cb)=>{
    fs.readFile(p, (err, fileData) => {
        if (!err) {
          cb(JSON.parse(fileData));
        }
        cb([]);
    })

}
class Product{
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    
     save()  {
        getResults(products=>{   
        products.push(this);
        fs.writeFile(p, JSON.stringify(products),(err)=>console.log('Got error',err));
        })
    }

    static fetchAll(cb)  {
        getResults(cb);        
    }
}

module.exports =Product;