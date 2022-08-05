# <p style="text-align : center; font-size:1.5em">JSON</p>

## 1. Web

- Server : 서비스 제공자

- URI : domain, localhost
- PORT : 통로 ex) port:5000 = 통로 이름이 5000

  - Clinet가 정보를 요청(request, req), 요청한 정보를 Server가 처리(response, result, res)

- Client : 서비스 사용자

1. Web

   - Server : 서비스 제공자

     - URI : domain, localhost
     - PORT : 통로 ex) port:5000 = 통로 이름이 5000
     - Clinet가 정보를 요청(request, req), 요청한 정보를 Server가 처리(response, result, res)

   - Client : 서비스 사용자

## 2. URL 주소

- localhost, domain, c:\, d:\ -> 절대경로
- / -> 상대경로

## 3. json(Javascript Object Notation)

- {} : 객체 하나
- {"key":value}

  - "별명":값
  - "변수":값

    - ex) const user = {
      "username" : "홍길동",
      "age" : 15,
      "isActive" : false,
      "introduce" : null
      };

    - [{},{},{}] : 객체 여러 개
      ex) const users = [
      {
      "userid" : "busanit",
      "age" : 22
      } ,
      {
      "userid" : "seoulit",
      "age" : 30
      }
      {
      "userid" : "daeguit",
      "age" : 20
      }
      ];

## 4. json 사용하는 이유 : 인터넷으로 데이터를 주고받을 때 사용

- 통신할 때 규칙(not programming)

- 사용자 -> 데이터 전송 -> json 변환 -> 서버

  - Header값에 json을 설정해서 보냄
    - (Content-Type:application/json)
  - 'JSON.stringify()'으로 변환
    - 사용자 <- 데이터 전송 <- json 변환 <- 서버
      - JSON.parse();

- Node.js : Server Javascript
  - 사용자가 javascript로 프로그래밍 -> json 변환 -> 서버로 전송

## 5. 연결 정보 : html(웹페이지)는 기본적으로 페이지가 바뀌면 기존 정보가 사라짐

- session : 연결정보가 Server 저장
  - 보안을 요하는 정보
  - 속도가 느릴 수 있음
- cookie : 연결정보가 내 컴퓨터에 저장
  - 아이디 저장, 오늘 하루 이 창 띄우지 않음
  - 보안 취약
  - 속도가 session보다 빠름
