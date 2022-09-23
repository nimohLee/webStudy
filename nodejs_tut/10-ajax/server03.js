const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'login',
    password : '1234',
    database : 'login',
    dateStrings: 'date'
  });
  

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'views')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/',(req, res) =>{
    let sql = 'SELECT * FROM members ORDER BY id DESC;';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        else {
            res.render('list',{result});
        }
    })
});

app.get('/addUser',(req, res) =>{
    res.render('addUser');
});

app.post('/addUser',(req, res) =>{
    const users = {
        id: req.body.userid,
        passwd: req.body.passwd,
        name: req.body.username,
        post: req.body.post,
        addr: req.body.addr,
        hp: req.body.userid
    };

    let addUserSql = "INSERT INTO members VALUES(NULL,?,?,?,?,?,?,'일반',now());";
    db.query(addUserSql,[users.id,users.passwd,users.name,users.post,users.addr,users.hp],(err)=>{if(err) throw err;});
});

app.post('/modifyGrade/:id',(req,res)=>{
    console.log(req.body)
    let sql = "UPDATE members SET grade = ? WHERE id = ?;";

    db.query(sql,[req.body.value,req.params.id],(err)=>{
        if(err)
            throw err;
        
      
    })
})


app.listen(PORT,()=>console.log(`http://localhost:${PORT} is Opened`));