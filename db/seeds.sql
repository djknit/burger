DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT(4) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Royal With Cheese", false),
("Big Kahuna Burger", false),
("Black bean burger", false);