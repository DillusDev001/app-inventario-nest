CREATE TABLE operacion (
    cod_operacion VARCHAR(50) PRIMARY KEY,
    id_cliente INT NOT NULL,
    user_vendedor VARCHAR(500) NOT NULL,
    fec_operacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    nro_factura VARCHAR(500) DEFAULT '',
    observacion VARCHAR(500) DEFAULT '',
    ciudad_envio VARCHAR(500) DEFAULT '',
    precio_total DOUBLE(10, 2) NOT NULL,
    descuento DOUBLE(10, 2) NOT NULL,
    precio_pagar DOUBLE(10, 2) NOT NULL,
    estado VARCHAR(10) NOT NULL
);

CREATE TABLE operacion_detalle (
    cod_operacion VARCHAR(50) NOT NULL,
    cod_producto VARCHAR(50) NOT NULL,
    sec INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DOUBLE(10, 2) NOT NULL,
    sub_total DOUBLE(10, 2) NOT NULL,
    PRIMARY KEY (cod_operacion, cod_producto)
);

CREATE TABLE operacion_pago (
    cod_operacion VARCHAR(50) NOT NULL,
    sec_pago INT NOT NULL,
    metodo_pago VARCHAR(500) NOT NULL,
    monto DOUBLE(10, 2) NOT NULL,
    url_imagen VARCHAR(5000) NOT NULL,
    PRIMARY KEY (cod_operacion, sec_pago)
);

CREATE TABLE operacion_saldo (
    cod_operacion VARCHAR(50) PRIMARY KEY,
    monto DOUBLE(10, 2) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(500) NOT NULL
);

CREATE TABLE operacion_saldo_historial (
    id_historial INT PRIMARY KEY AUTO_INCREMENT,
    cod_operacion VARCHAR(50) NOT NULL,
    persona VARCHAR(500) NOT NULL,
    monto DOUBLE(10, 2) NOT NULL,
    fec_pago TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(500) NOT NULL
);