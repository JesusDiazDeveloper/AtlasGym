create database if not exists atlas_gym;

use Atlas_Gym;

CREATE TABLE Category (
id_category INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL
);

CREATE TABLE Product (
id_product INT AUTO_INCREMENT PRIMARY KEY,
img VARCHAR(255),
name VARCHAR(100) NOT NULL,
price DOUBLE NOT NULL,
stock INT NOT NULL,
id_category INT,
FOREIGN KEY (id_category) REFERENCES Category(id_category)
);

CREATE TABLE Student (
id_student INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
DNI INT NOT NULL UNIQUE,
phone INT
);

CREATE TABLE Instructor (
id_instructor INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
phone INT
);
CREATE TABLE Class (
id_class INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
id_instructor INT,
description TEXT,
FOREIGN KEY (id_instructor) REFERENCES Instructor(id_instructor)
);

CREATE TABLE Student_Class (
id_student INT,
id_class INT,
PRIMARY KEY (id_student, id_class),
FOREIGN KEY (id_student) REFERENCES Student(id_student),
FOREIGN KEY (id_class) REFERENCES Class(id_class)
);

INSERT INTO Student (name, last_name, DNI, phone) VALUES
('Laura', 'Gómez', 121111111, 666111222),
('Javier', 'Rodríguez', 22222222, 777222333),
('María', 'Martín', 33333333, 888333444),
('David', 'Hernández', 44444444, 999444555),
('Ana', 'Pérez', 55555555, 111555666),
('Carlos', 'Gutiérrez', 66666666, 222666777),
('Sofía', 'Dominguez', 77777777, 333777888),
('Manuel', 'Vargas', 88888888, 444888999),
('Elena', 'Morales', 99999999, 555999000),
('Pablo', 'Romero', 12345678, 666000111);


INSERT INTO Category (name) VALUES ('Cardio'), ('Pesas'), ('Yoga');

INSERT INTO Product (img, name, price, stock, id_category) VALUES
('img1.jpg', 'Smartphone', 699.99, 50, 1),
('img2.jpg', 'Laptop', 999.99, 30, 1),
('img3.jpg', 'E-book', 9.99, 200, 2),
('img4.jpg', 'T-shirt', 19.99, 150, 3),
('img5.jpg', 'Action Figure', 14.99, 100, 1),
('img6.jpg', 'Basketball', 29.99, 80, 1),
('img7.jpg', 'Shampoo', 7.99, 120, 2),
('img8.jpg', 'Car Tire', 89.99, 40, 2),
('img9.jpg', 'Sofa', 499.99, 20, 3),
('img10.jpg', 'Guitar', 199.99, 3 , 1 );

INSERT INTO Instructor (name, last_name, phone) VALUES ('Juan', 'García', 123456789), ('María', 'López', 987654321), ('Carlos', 'Martínez', 555444333);

INSERT INTO Class (name, id_instructor, description)
VALUES ('Zumba', 1, 'Clase de baile con ritmos latinos.'),
('Body Pump', 2, 'Entrenamiento con pesas para tonificar y fortalecer.'),
('Yoga Matinal', 3, 'Clase de yoga para comenzar el día relajado.'),
('CrossFit Intenso', 1, 'Entrenamiento funcional de alta intensidad.'),
('AquaGym', 2, 'Ejercicios en el agua para mejorar resistencia.'),
('Pilates Avanzado', 3, 'Ejercicios de control y fuerza para todos los niveles.'),
('Spinning Extremo',1, 'Clase de ciclismo indoor para quemar calorías.'),
('Kickboxing',2, 'Entrenamiento de defensa personal y cardio.'),
('Entrenamiento Funcional', 3, 'Clase variada de ejercicios funcionales.'),
('Tai Chi', 1, 'Técnica de meditación en movimiento para equilibrio.');


INSERT INTO Student_Class (id_student, id_class) VALUES (1, 1);
