CREATE table si(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
si VARCHAR(50) NOT NULL
);

INSERT INTO si VALUES(NULL, "서울특별시");
INSERT INTO si VALUES(NULL, "부산광역시");
INSERT INTO si VALUES(NULL, "대구광역시");
INSERT INTO si VALUES(NULL, "대전광역시");
INSERT INTO si VALUES(NULL, "인천광역시");
INSERT INTO si VALUES(NULL, "광주광역시");
INSERT INTO si VALUES(NULL, "울산광역시");


CREATE TABLE gu(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    gu VARCHAR(50),
    si VARCHAR(50)
);

INSERT INTO gu VALUES(NULL,"강남구","서울특별시");
INSERT INTO gu VALUES(NULL,"종로구","서울특별시");
INSERT INTO gu VALUES(NULL,"강서구","서울특별시");
INSERT INTO gu VALUES(NULL,"구로구","서울특별시");

INSERT INTO gu VALUES(NULL,"부산진구","부산광역시");
INSERT INTO gu VALUES(NULL,"사상구","부산광역시");
INSERT INTO gu VALUES(NULL,"수영구","부산광역시");

INSERT INTO gu VALUES(NULL,"수성구","대구광역시");
INSERT INTO gu VALUES(NULL,"중구","대구광역시");
INSERT INTO gu VALUES(NULL,"동구","대구광역시");

INSERT INTO gu VALUES(NULL,"서구","대전광역시");
INSERT INTO gu VALUES(NULL,"유성구","대전광역시");

INSERT INTO gu VALUES(NULL,"동구","광주광역시");
INSERT INTO gu VALUES(NULL,"광산구","광주광역시");

INSERT INTO gu VALUES(NULL,"부평구","인천광역시");
INSERT INTO gu VALUES(NULL,"서구","인천광역시");

CREATE TABLE members(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userid VARCHAR(20) NOT NULL,
    passwd VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL,
    post char(5),
    addr VARCHAR(255),
    hp char(15),
    grade VARCHAR(10), -- 관리자, 사원, 일반
    regdate date
);