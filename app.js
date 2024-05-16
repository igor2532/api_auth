const express = require('express')
const cors=require("cors");
// const store = require('./store.json')
const mysql = require("mysql2");
const bodyParser = require('body-parser');
// const fs = require('fs')

const corsOptions ={
   origin:'*', 
   credentials:false,          
   optionSuccessStatus:200,
}


const pool = mysql.createPool({
  connectionLimit: 5,
  host: "sql.freedb.tech",

  user: "freedb_igor_s",
  database: "freedb_sivgdpot",
  password: "z#Rf9m6ne!UufkP"
});
 
// добавление объекта
// const sql = "INSERT INTO users (name, age) VALUES(?, ?) ";
// const data = ["Bill", 25];
// pool.query(sql, data, function(err, results) {
//   if(err) console.log(err);
//   console.log(results);
// });
 
// получение объектов



const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});


const app = express()
app.use(cors())
app.use(express.json());


app.post("/insert", urlencodedParser,function(req, res){
  pool.query("INSERT INTO `users` (`login`, `password`) VALUES ('"+req.body.valueLogin+"', '"+req.body.valuePassword1+"');", function(err, results) {
    if(err) console.log(err);
     console.log(req.body.obj)
    });
  })
   

// app.get("/index/",(request,response)=>{
// pool.query("SELECT * FROM `tickets` ORDER BY `dateOrder` DESC", function(err, results) {
//   if(err) console.log(err);
//   response.send(results)
// });
// })





// app.listen(process.env.PORT)
app.listen(3001)