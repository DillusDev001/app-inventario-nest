CREATE TABLE usuario(
    usuario VARCHAR(500) PRIMARY KEY,
    nombres VARCHAR(500) NOT NULL,
    apellidos VARCHAR(500) NOT NULL,
    password VARCHAR(500) NOT NULL,
    pregunta VARCHAR(500) NOT NULL,
    respuesta VARCHAR(500) NOT NULL,
    celular VARCHAR(500) NOT NULL,
    sexo VARCHAR(500) NOT NULL,
    rol VARCHAR(500) NOT NULL,
    autorizacion INT NOT NULL,
    estado INT DEFAULT 1
);