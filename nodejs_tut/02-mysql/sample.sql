CREATE login(
    id int not null AUTO_INCREMENT PRIMARY KEY,
    userid  VARCHAR(30),
    passwd VARCHAR(20),
    regdate DATETIME
);

IF EXISTS TABLE login