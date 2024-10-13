CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    cliente VARCHAR(500) NOT NULL,
    ci VARCHAR(500) NOT NULL,
    razon VARCHAR(500),
    nit VARCHAR(500),
    celular VARCHAR(500),
    ciudad VARCHAR(500) NOT NULL,
    estado INT DEFAULT 1,
);

CREATE TABLE cliente_cuenta(
    id_cliente INT PRIMARY KEY,
    monto DECIMAL(10, 2) DEFAULT 0.00,
    fec_mod TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_mod VARCHAR(500) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
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