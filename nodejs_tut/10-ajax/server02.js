const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'login',
    password : '1234',
    database : 'login'
  });
  

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'views')));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/',(req,res)=>{
    res.render('ajax02');
});

app.get('/getSi',(req,res)=>{
    let getSiSQL = 'SELECT si FROM si ORDER BY id ASC;';
    db.query(getSiSQL,(err,result)=>{
        if(err) throw err;
        else{
            res.send(JSON.stringify(result));
        }
    });
});

app.post('/getGu',(req,res)=>{
    console.log(req.body.si);
    let getGuSQL = 'SELECT gu FROM gu WHERE si = ? ORDER BY id ASC;';
    db.query(getGuSQL,[req.body.si],(err,result)=>{
        if(err) throw err;
        else{
            res.send(JSON.stringify(result));
        }
    });
})


app.listen(PORT,()=>console.log(`http://localhost:${PORT} is Opened`));