use login;
CREATE TABLE register(
    regID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(10) NOT NULL,
    passwd VARCHAR(20) NOT NULL,
    regDate date
);