const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'views')));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get('/addUser',(req, res)=>{
    res.render('ajax01');
});

app.post('/checkID', (req, res) => {
    // console.log(req.body.userid);
    const users = {
        userid : "busanit",
        passwd: "12345",
        username: "busan"
    };
    
    let msg ="";
    if(users.userid == req.body.uid){
        msg = "No";
    }

    res.send(msg);
});
 
app.listen(PORT,()=>console.log(`http://localhost:${PORT} is Opened`));