CREATE DATABASE agenda;

USE agenda;

CREATE TABLE personas(
    id_agenda INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    telefono VARCHAR(100),
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE personas;

INSERT INTO personas(nombre, correo, telefono) VALUES('David Guevara', 'd.josue@hotmail.es', '87428004');
INSERT INTO personas(nombre, correo, telefono) VALUES('Ricardo Jiménez', 'ric01cr26@gmail,com', '89873642');

SELECT * FROM agenda;
