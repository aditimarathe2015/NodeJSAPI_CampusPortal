var express = require('express');
var router = express.Router();



//Conncet Mongo DBnode

var mongojs = require('mongojs')
var db = mongojs('mongodb://localhost/BookStore',['books'])

 
router.get('/books',function (req,res,next)
{
 
    db.books.find(function(error,books)
    {
        if(error)
        
            console.log(error)
        else
        res.json(books);
        console.log(books);
    });

});


module.exports = router;
