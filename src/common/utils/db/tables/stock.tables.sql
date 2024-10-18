CREATE TABLE stock_general(
    cod_producto VARCHAR(50) PRIMARY KEY,
    cantidad VARCHAR(500) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE stock_sucursal(
    cod_producto VARCHAR(50),
    id_sucursal INT NOT NULL,
    id_almacen INT NOT NULL,
    cantidad INT NOT NULL, 
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (cod_producto, id_sucursal, id_almacen)
);