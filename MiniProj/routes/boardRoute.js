const express = require('express');
const router = express.Router();




router.get("/",(req, res) =>{
    res.render("../views/board/boardList.ejs");
});

router.get("/write",(req, res) =>{
    res.render("../views/board/boardWrite.ejs");
});

router.get("/detail/:id",(req, res) =>{
    res.render("../views/board/boardDetail.ejs",{id});
});

module.exports = router;