const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/',(req, res) => {
    res.sendFile(__dirname+'/views/index.html');
})

app.get("/getUser/5", (req,res)=>{
    const user = {
        "id" : 5,
        "userid": "busanit",
        "passwd": "12345"
    };
    res.json(user);
});//localhost:3000/getUser/5

app.listen(PORT,()=>{`Server Running : http://localhost:${PORT}`});