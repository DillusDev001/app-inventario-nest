CREATE TABLE sucursal(
    id_sucursal INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(500) NOT NULL,
    direccion VARCHAR(500) NOT NULL,
    telefono VARCHAR(500) NOT NULL,
    usuario_encargado VARCHAR(500) NOT NULL,
    estado INT DEFAULT 1
);

CREATE TABLE almacen(
    id_almacen INT PRIMARY KEY AUTO_INCREMENT,
    id_sucursal INT NOT NULL,
    direccion VARCHAR(500) NOT NULL,
    user_encargado VARCHAR(500) NOT NULL,
    estado INT DEFAULT 1,
    FOREIGN KEY (id_sucursal) REFERENCES sucursal(id_sucursal) ON UPDATE CASCADE ON DELETE CASCADE
);