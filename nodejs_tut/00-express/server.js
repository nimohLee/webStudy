const express = require('express');
const app = express();
const path =  require('path');

/* app.listen(port,callback) */
app.listen(3000,(error)=>{
    if(error)
        throw error;
    else
        console.log("Server Running port 3000...");
});