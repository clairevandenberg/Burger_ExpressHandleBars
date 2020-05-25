-- write insert queries to populate the burgers table with at least three entries.
USE burgerlist_db;
INSERT INTO burgers (name) VALUES ('Double Beef Burger');
INSERT INTO burgers (name) VALUES ('Spicey Crispy Chicken Burger');
INSERT INTO burgers (name, devoured) VALUES ('Shroom Burger');
SELECT * FROM burgers;