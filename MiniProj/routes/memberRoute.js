const express = require('express');

const db = require('../model/database');
const router = express.Router();


router.get("/",(req, res) =>{
    res.render("../views/member/memberMain.ejs");
});

router.post("/",(req,res)=>{
    const user = {
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        email: req.body.email
    };
    const addUserSql = "INSERT INTO member VALUES(NULL,?,?,?,?,?);";
    
    db.query(addUserSql,[user.name,user.id,user.pw,user.email,new Date()],(err)=>{
        if(err) throw err;
    });
    res.redirect("/member");
});

router.post("/idVaild",(req,res)=>{
    const user = {
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        email: req.body.email
    };

    const selectUserSql = `SELECT count(idx) AS idCount FROM member WHERE id = "${user.id}";`
    db.query(selectUserSql,(err, result)=>{
        if(err) throw err;
        else if(result[0].idCount > 0){
            res.send("No");
        }else
            res.send("Yes");
    })
})


let result;

/* QueryString을 사용해야하는 줄 몰라서 한참을 헤맴 */
router.get("/list/page/:page",(req, res) =>{
    const page = req.params.page;
    const selected = req.query.select;
    const searchTf = req.query.text;
    let sql;
    if(selected === undefined){
        sql = "SELECT * FROM member ORDER BY idx DESC";     
    }else{
        sql = "SELECT * FROM member WHERE "+selected+"= '"+searchTf+"' ORDER BY idx DESC;";
    }

    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.render("../views/member/memberList.ejs",{result : result, page: page, length: result.length-1, page_num:10,pass:true});
    })
    
});

router.get("/list/update",(req,res)=>{
    res.render("../views/member/updatePopup");
})




module.exports = router;