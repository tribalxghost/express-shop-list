const express = require("express");
const router = new express.Router();
const items = require("./fakedb")

const app = express();



app.get('/items', function (req, res, next){
    res.send(items)
})
app.post('/items', function(req,res, next){
    let newItem = {
        name:req.query.name,
        price:req.query.price
    }
    items.push(newItem)

    res.send(items)

})

app.get('/items/:name', function(req,res,next){
    items.forEach(element => {
        if(element.name === req.params.name){

            res.send(element)
        }
       
        
    });
})
app.patch('/items/:name', function(req,res,next){
    items.forEach(element => {
        if(element.name === req.params.name || element.price === req.params.name){
            element.name = req.query.name
            element.price = req.query.price
            res.send(element)
        }
       

    });
})
app.patch('/items/:price', function(req,res,next){
    items.forEach(element => {
        if(element.price === req.params.price){
            element.price = req.query.price
            res.send(element)
        }  
    });
})




app.listen(3000, function () {
    console.log('App on port 3000');
  })
