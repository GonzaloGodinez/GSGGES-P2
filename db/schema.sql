DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;

-- USE library_db;

-- CREATE TABLE books (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(50) NOT NULL,
--     author VARCHAR(40) NOT NULL,
--     pages INT,
--     genre VARCHAR(30)
-- );

-- CREATE TABLE users (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(60) NOT NULL,
--     last_name VARCHAR(60),
--     email VARCHAR(20) NOT NULL,
--     password VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE user_books (
--     user_id INT NOT NULL,
--     book_id INT NOT NULL,
--     PRIMARY KEY (user_id, book_id),
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (book_id) REFERENCES books(id)
-- );
