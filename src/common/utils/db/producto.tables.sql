CREATE TABLE producto(
    cod_producto VARCHAR(500) PRIMARY KEY,
    cod_hash VARCHAR(500) NOT NULL,
    codigo VARCHAR(500) NOT NULL,
    tipo VARCHAR(500) NOT NULL,
    categoria VARCHAR(500) NOT NULL,
    talla VARCHAR(500) NOT NULL,
    color VARCHAR(500) NOT NULL,
    material VARCHAR(500) NOT NULL,
    sexo VARCHAR(500) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,
    precio_unitario DOUBLE(10, 2) NOT NULL,
    precio_mayor DOUBLE(10, 2) NOT NULL,
    estado INT DEFAULT 1
);