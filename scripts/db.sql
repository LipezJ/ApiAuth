CREATE DATABASE usersdb;
use usersdb;

drop table users;

CREATE TABLE users(
    correo varchar(30) not null,
    password varchar(15) not null,
    nombre varchar(15) not null,
    apellido varchar(15) not null,
    documento int(10) not null,
    cargo varchar(15) not null,
    carrera varchar(30),
    primary key (correo)
);

select * from users;