CREATE DATABASE inventarioDB;

-- ********** MANTENIMIENTO ********** --
CREATE TABLE color (
    id_color INT PRIMARY KEY AUTO_INCREMENT,
    color VARCHAR(500) NOT NULL,
    hexadecimal VARCHAR(500) NOT NULL,
    user_crea VARCHAR(500) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE talla (
    id_talla INT PRIMARY KEY AUTO_INCREMENT,
    talla VARCHAR(500) NOT NULL,
    user_crea VARCHAR(500) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR(500) NOT NULL,
    user_crea VARCHAR(500) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE material (
    id_material INT PRIMARY KEY AUTO_INCREMENT,
    material VARCHAR(500) NOT NULL,
    user_crea VARCHAR(500) NOT NULL,
    fec_crea TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ********** SUCURSAL - ALMACEN ********** --
CREATE TABLE sucursal(
    id_sucursal INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(500) NOT NULL,
    direccion VARCHAR(500) NOT NULL,
    telefono VARCHAR(500) NOT NULL,
    usuario_encargado VARCHAR(500) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,
    estado INT DEFAULT 1
);

CREATE TABLE almacen(
    id_almacen INT PRIMARY KEY AUTO_INCREMENT,
    id_sucursal INT NOT NULL,
    nombre VARCHAR(500) NOT NULL,
    direccion VARCHAR(500) NOT NULL,
    telefono VARCHAR(500) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,
    usuario_encargado VARCHAR(500) NOT NULL,
    estado INT DEFAULT 1
);

-- ********** PRODUCTO ********** --
CREATE TABLE producto(
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    cod_producto VARCHAR(50) NOT NULL,
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

-- ********** STOCK GENERAL - STOCK SUCURSAL ********** --
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

-- ********** CLIENTE ********** --
CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    cliente VARCHAR(500) NOT NULL,
    ci VARCHAR(500) NOT NULL,
    razon VARCHAR(500),
    nit VARCHAR(500),
    celular VARCHAR(500),
    ciudad VARCHAR(500) NOT NULL,
    estado INT DEFAULT 1
);

CREATE TABLE cliente_cuenta(
    id_cliente INT PRIMARY KEY,
    monto DECIMAL(10, 2) DEFAULT 0.00,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(500) NOT NULL
);

CREATE TABLE cliente_cuenta_historial(
    id_historial INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    tipo VARCHAR(500) NOT NULL,
    metodo_cuenta VARCHAR(500) NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(500) NOT NULL
);

-- ********** OPERACION ********** --
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

-- ********** USUARIO ********** --
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