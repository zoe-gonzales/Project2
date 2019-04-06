DROP DATABASE IF EXISTS destressordb;
CREATE DATABASE destressordb;

CREATE TABLE images
(
	id int NOT NULL AUTO_INCREMENT,
	imageurl VARCHAR(400) NOT NULL,
	category VARCHAR NOT NULL
);


CREATE TABLE quotes
(
	id int NOT NULL AUTO_INCREMENT,
	quote VARCHAR(400) NOT NULL,
	category VARCHAR NOT NULL
);