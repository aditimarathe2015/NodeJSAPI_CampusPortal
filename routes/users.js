var express = require('express');
var router = express.Router();

var mongojs = require('mongojs')
var db = mongojs('mongodb://localhost/CampusP',['students'])

//** Get All Students** */
router.get('/users',function (req,res,next)
{
 
    db.students.find(function(error,students)
    {
        if(error){
            res.send(error);
            console.log(error)
        }
        else
        res.json(students);
        
    });

});

//** Get  Students by ID ***/
router.get('/users/:id',function (req,res,next)
{
  var id = req.params.id;

    db.students.findOne({_id:mongojs.ObjectId(id)},function(error,students)
    {
        if(error)
            console.log(error)
        else
        res.json(students);
        
    });

});

//***Save Students***/

router.post('/users',function (req,res,next)
{
 debugger;
   var Student= req.body;
//    if (!Student.title ||(Student.isDone +''))
//    {
//        res.status(400);
//        res.json({
//  "error":"Bad Data"
   

// });
//    }
  // else{
       db.students.save(Student,function(ree,Students){
           
       // if(error){ 
         //   res.send(error);
          //  console.log(error)
       // }

   // else
    res.json(Student);
       });
  // }



});



//** Delete  Students by ID ***/
router.delete('/users/:id',function (req,res,next)
{
  var id = req.params.id;

    db.students.remove({_id:mongojs.ObjectId(id)},function(error,students)
    {
        if(error)
            console.log(error)
        else
        res.json(students);
        
    });

});
//Update Students
router.put('/users/:id',function (req,res,next)
{

    var Student = req.body;
    var updStudents = {};
    var id = req.params.id;
   if (Student.isDone)
   {

    updStudents.isDone=Student.isDone;
      
      
   }
   if  (Student.title){
    updStudents.title=Student.title;

   }
   if  (!updStudents){
    res.status(400);
       res.json({
    "error":"Bad Data"
});
   }
else{
    
    
        db.students.update({_id:mongojs.ObjectId(id)},Student,{} ,function(error,students)
        {
            if(error)
                console.log(error)
            else
            res.json(students);
            
        });
    
    }


   


});


//***Save Date****
//const Student = mongoose.model('Student', { Username: String ,Password: String,UniversityId:Number });

//const Stud = new Student({ Username: 'Malika',Password :'abc123',UniversityId:1},);
//Stud.save().then(() => console.log('meow'));


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
