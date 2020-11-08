DROP DATABASE IF EXISTS s12moo2txe7gr34j;

CREATE DATABASE s12moo2txe7gr34j;

USE s12moo2txe7gr34j;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(250),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);