const express = require('express');
const router = express.Router();


router.get("/",(req, res) =>{
    res.render("../views/member/memberMain.ejs");
});

router.get("/list",(req, res) =>{
    res.render("../views/member/memberList.ejs");
});

router.get("/register",(req, res) =>{
    res.render("../views/member/memberRegister.ejs");
});


module.exports = router;