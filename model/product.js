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
        this.id=Math.random().toString();
        getResults(products=>{   
        products.push(this);
        fs.writeFile(p, JSON.stringify(products),(err)=>console.log('Got error',err));
        })
    }

    static fetchAll(cb)  {
        getResults(cb);        
    }
    static findById(id,cb)  {
        getResults(products=>{
            const product= products.find(p=>p.id===id);
            cb(product)
        });        
    }
}

module.exports =Product;