CREATE database bootcamp;
use bootcamp;
show databases;
create table student(id int primary key, name varchar(250),subject varchar(250),marks double);
insert into student values(3,'akash','maths',95),
(2,'sagar','kannada',80);
select * from student;