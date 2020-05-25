CREATE DATABASE burgerlist_db;

USE burgerlist_db;

CREATE TABLE burgers
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
);
