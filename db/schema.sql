### Schema

CREATE DATABASE burgerlist_db;
USE burgerlist_db;

CREATE TABLE burgerlist
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
