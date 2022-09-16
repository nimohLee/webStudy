/* 
1. 필요한 모듈 설치 : npmjs.com -> 모듈 검색 -> 명령어로 설치(npm i express)
2. Server
    - protocol : http:// (80번 포트), https://(443번 포트)
    - domain : 도메인 구입 후 설정 = 그냥 사용하면 localhost(127.0.0.1)
    
    // port number, url -> node에서 설정 후 작업
    - port number : 나만이 유일하게 사용할 수 있는 통로(nodejs : 3000, reactjs : 5000, spring : 8080)
        -  동일한 URL이라도 포트번호가 다르면 다르게 접속
        - ex) localhost:80하면 http로 접속, localhost:443하면 https로 접속, localhost: 3000하면 노드js, localhost: 5000하면 리액트js ...
    - url : get(주소로 접근), post(숨겨서 전송해야 하는 것..?)-> 간단하게 get은 가져오는 거 post는 보내는 거(ex 블로그 포스팅(posting))
        
*/
    /* express 사용법 (npmjs.com 에서 express 검색하면 사용법 나옴) */
// const express = require('express');
// url 설정(주소 설정)
// port 설정
