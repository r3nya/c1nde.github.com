---
layout: default
title: СУБД быстростарт
---
Частенько нужно создавать новые базы данных с пользователями и паролями, в общем, чистой воды рутина. Мои снипеты помогут вам решать этот вопрос быстро и решительно. Берем суперпользователя и угараем по консоле.

`my_awesome_db` Имя новой базы

`my_awesome_user` Имя нового пользователя

`my_awesome_password` Пароль для нового пользователя

## MySQL

    create database my_awesome_db character set utf8;
    create user 'my_awesome_user'@'localhost' identified by 'my_awesome_password';
    grant all privileges on my_awesome_db.* to 'my_awesome_user'@'localhost';

## PostgreSQL

    CREATE ROLE my_awesome_user LOGIN ENCRYPTED PASSWORD 'my_awesome_password' NOINHERIT VALID UNTIL 'infinity';
    CREATE DATABASE my_awesome_db WITH ENCODING='UTF8' OWNER=my_awesome_user;

## SQLite3 :)

    $ sqlite my_awesome.db

{{ page.date | date: "%d %B %Y" }}

[link to this post]({% post_url 2013-03-15-databases %})
