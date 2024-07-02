create database if not exists atlas_gym;

-- USE Atlas_Gym;

CREATE TABLE IF NOT EXISTS Category (
    id_category INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS Product (
id_product INT AUTO_INCREMENT PRIMARY KEY,
img VARCHAR(255),
name VARCHAR(100) NOT NULL,
price DOUBLE NOT NULL,
stock INT NOT NULL,
id_category INT,
FOREIGN KEY (id_category) REFERENCES Category(id_category)
);

CREATE TABLE IF NOT EXISTS Student (
id_student INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
DNI INT NOT NULL UNIQUE,
phone INT
);

CREATE TABLE IF NOT EXISTS Instructor (
id_instructor INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
phone INT
);
CREATE TABLE IF NOT EXISTS Class (
id_class INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
id_instructor INT,
description TEXT,
FOREIGN KEY (id_instructor) REFERENCES Instructor(id_instructor)
);

CREATE TABLE IF NOT EXISTS Student_Class (
id_student INT,
id_class INT,
PRIMARY KEY (id_student, id_class),
FOREIGN KEY (id_student) REFERENCES Student(id_student),
FOREIGN KEY (id_class) REFERENCES Class(id_class)
);

