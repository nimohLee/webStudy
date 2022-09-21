const express = require('express');
const router = express.Router();

//items : 전체보기, 상세보기, 입력, 수정, 삭제, 검색

router.get("/",(req, res) =>{
    res.send("상품 전체 목록 보기");
});

router.get("/update/3",(req, res) =>{
    res.send("3번 상품 수정하기");
});

router.get("/delete/3",(req, res) =>{
    res.send("3번 상품 삭제하기");
});
router.get("/search/3",(req, res) =>{
    res.send("3번 상품 검색하기");
});

module.exports = router;