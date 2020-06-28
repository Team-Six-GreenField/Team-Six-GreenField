var path=require("path")
//install express
var express = require('express');
//app is instance from our express
var app = express();
// npm install body-parser
// middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({	extended:true}));
app.use(bodyParser.json())
var items = require('../database-mongo');

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

var router=express.Router();


// app.post('/',function (req, res) {
// 	console.log(req.body)
// items.insertIntoAutho(req.body)
// })



// app.get('/', function (req, res) {
//   // items.selectAllfromTeacher(function(err, data) {
//   //   if(err) {
//   //     res.sendStatus(500);
//   //   } else {
//   //     console.log(data)
//   //   }
//   // });

//  // console.log(items.selectAllfromTeacher())
// });

//get allof items in my data
// app.get('/items',(req,res)=>{
//    res.json(items)

// })


//router.post("/login",function(req,res){
router.post("/",function(req,res){
var email=req.body.email
var password=req.body.password
items.findOne({email:email,password:password},function(err,items){
   if (err){
      console.log(err)
      return res.status(500).send()
   }
if (!items){
   return res.status(404).send()
}

return res.status(200).send()


})



})


























app.listen(3110, function() {
  console.log('listening on port 3100!');
});








