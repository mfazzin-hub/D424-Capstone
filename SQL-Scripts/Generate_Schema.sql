DROP SCHEMA IF EXISTS gunpla_db;
CREATE SCHEMA gunpla_db;
USE gunpla_db;

DROP USER IF EXISTS 'gunpla_db'@'localhost';
CREATE USER 'gunpla_db'@'localhost' IDENTIFIED BY 'gunpla_db';
GRANT ALL PRIVILEGES ON gunpla_db.* TO 'gunpla_db'@'localhost';

CREATE TABLE gundam (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL,
    release_year INTEGER NOT NULL,
    grade TEXT NOT NULL,
    series TEXT NOT NULL,
    box_art TEXT
);