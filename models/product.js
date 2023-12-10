const fs=require('fs')

const path=require('path');

const rootDir = require('../util/path');
  
const p=path.join(rootDir,'data','product.json');
const productsfromfile=(cb)=>{
               
    fs.readFile(p,(err,filecontent)=>{
        if(err){
            cb([]);
        }
         cb(JSON.parse(filecontent));
    })


}




module.exports=class Product{
    constructor(title){
        this.title=title;
    }
    save(){
       productsfromfile((products)=>{
         products.push(this);
         fs.writeFile(p,JSON.stringify(products),err=>{
            console.log(err);
         })    
     })     
    }
    static fetchAll(cb){
       
        productsfromfile(cb);
       
    }
}