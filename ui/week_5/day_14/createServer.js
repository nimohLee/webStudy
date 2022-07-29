const http = require("http"); // server ready

const PORT = 4000;

//req(request), res(result)
const server = http.createServer((req, res) => {

    // localhost:5000/login
    if (req.url === "/login") {

        res.write("<h1>Busan IT Academy</h1>"); // result node write
        res.end(); // result end
    } else {
        res.write("페이지를 찾을 수 없습니다");
        res.end();
    }
});

server.listen(PORT, () => console.log(`서버를 실행합니다. 포트번호는 ${PORT}`));