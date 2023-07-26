CREATE database bootcamp;
use bootcamp;
show databases;
create table student(id int primary key, name varchar(250),subject varchar(250),marks double);
insert into student values(3,'akash','maths',95),
(2,'sagar','kannada',80);
select * from student;

sq

CREATE DATABASE my_database;
USE: Switches to a specific database to perform operations on it.
sql

USE my_database;
CREATE TABLE: Creates a new table within the database.

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INT
);
INSERT INTO: Adds new records into a table.

INSERT INTO users (username, email, age) VALUES
    ('JohnDoe', 'john.doe@example.com', 30),
    ('JaneSmith', 'jane.smith@example.com', 25);
SELECT: Retrieves data from a table.

SELECT * FROM users;
UPDATE: Modifies existing records in a table.
sql

UPDATE users
SET age = 31
WHERE username = 'JohnDoe';
DELETE: Removes records from a table.
sql

DELETE FROM users
WHERE age > 30;
DROP TABLE: Deletes an existing table from the database.

DROP TABLE users;
ALTER TABLE: Modifies the structure of an existing table.
sql
Copy code
ALTER TABLE users
ADD COLUMN city VARCHAR(50);
JOIN: Combines rows from two or more tables based on a related column.
sql
Copy code
SELECT users.username, orders.order_date
FROM users
JOIN orders ON users.id = orders.user_id;
GROUP BY: Groups rows based on the values of a column and applies aggregate functions.
sql
Copy code
SELECT country, COUNT(*) as total_users
FROM users
GROUP BY country;
ORDER BY: Sorts the result set based on a specified column.
sql
Copy code
SELECT * FROM products
ORDER BY price DESC;
CREATE INDEX: Creates an index on a table column to improve query performance.
sql
Copy code
CREATE INDEX idx_username ON users (username);
DROP INDEX: Removes an existing index from a table.
sql
Copy code
DROP INDEX idx_username ON users;
These are just a few examples o