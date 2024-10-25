-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 26-10-2024 a las 00:25:22
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventarioDB`
--
CREATE DATABASE IF NOT EXISTS `inventarioDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `inventarioDB`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `almacen`
--

CREATE TABLE `almacen` (
  `id_almacen` int(11) NOT NULL,
  `id_sucursal` int(11) NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `direccion` varchar(500) NOT NULL,
  `telefono` varchar(500) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `usuario_encargado` varchar(500) NOT NULL,
  `estado` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `categoria` varchar(500) NOT NULL,
  `user_crea` varchar(500) NOT NULL,
  `fec_crea` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `categoria`, `user_crea`, `fec_crea`) VALUES
(1, 'Pantalón', 'dillus-admin@gmail.com', '2024-07-24 06:14:29'),
(2, 'Camisa', 'dillus-admin@gmail.com', '2024-07-24 06:14:39'),
(3, 'Chamarra', 'dillus-admin@gmail.com', '2024-07-24 07:51:41'),
(4, 'Blazer', 'dillus-admin@gmail.com', '2024-07-24 07:52:45'),
(5, 'Gorra', 'dillus-admin@gmail.com', '2024-07-24 07:54:04'),
(6, 'Chompa', 'dillus-admin@gmail.com', '2024-08-11 04:34:43'),
(7, 'Parka', 'dillus-admin@gmail.com', '2024-09-03 04:55:56'),
(8, 'Polera', 'dillus-admin@gmail.com', '2024-09-03 04:56:24'),
(9, 'Corbata', 'dillus-admin@gmail.com', '2024-09-03 04:56:41'),
(10, 'Suspensores', 'dillus-admin@gmail.com', '2024-09-03 04:57:06'),
(11, 'Chaleco', 'dillus-admin@gmail.com', '2024-09-03 04:57:24'),
(12, 'Saco', 'dillus-admin@gmail.com', '2024-09-03 05:01:13'),
(13, 'Sobre Saco', 'dillus-admin@gmail.com', '2024-09-03 05:01:27'),
(14, 'Chaleco con Capucha', 'dillus-admin@gmail.com', '2024-09-05 06:32:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `cliente` varchar(500) NOT NULL,
  `ci` varchar(500) NOT NULL,
  `razon` varchar(500) DEFAULT NULL,
  `nit` varchar(500) DEFAULT NULL,
  `celular` varchar(500) DEFAULT NULL,
  `ciudad` varchar(500) NOT NULL,
  `estado` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente_cuenta`
--

CREATE TABLE `cliente_cuenta` (
  `id_cliente` int(11) NOT NULL,
  `monto` decimal(10,2) DEFAULT 0.00,
  `fec_mod` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_mod` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente_cuenta_historial`
--

CREATE TABLE `cliente_cuenta_historial` (
  `id_historial` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `tipo` varchar(500) NOT NULL,
  `metodo_cuenta` varchar(500) NOT NULL,
  `monto` decimal(10,2) NOT NULL,
  `fec_mod` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_mod` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color`
--

CREATE TABLE `color` (
  `id_color` int(11) NOT NULL,
  `color` varchar(500) NOT NULL,
  `hexadecimal` varchar(500) NOT NULL,
  `user_crea` varchar(500) NOT NULL,
  `fec_crea` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `color`
--

INSERT INTO `color` (`id_color`, `color`, `hexadecimal`, `user_crea`, `fec_crea`) VALUES
(1, 'Rojo', '#FF0000', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(2, 'Rojo Claro', '#FF6347', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(3, 'Rojo Oscuro', '#8B0000', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(4, 'Rojo Tomate', '#FF4500', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(5, 'Rojo Carmín', '#A40000', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(6, 'Rojo Vino', '#900C3F', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(7, 'Verde', '#008000', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(8, 'Verde Claro', '#90EE90', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(9, 'Verde Oscuro', '#006400', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(10, 'Verde Lima', '#32CD32', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(11, 'Verde Esmeralda', '#50C878', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(12, 'Verde Oliva', '#808000', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(13, 'Azul', '#0000FF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(14, 'Azul Claro', '#ADD8E6', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(15, 'Azul Oscuro', '#00008B', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(16, 'Azul Marino', '#003DA5', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(17, 'Azul Turquesa', '#40E0D0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(18, 'Azul Cielo', '#87CEEB', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(19, 'Amarillo', '#FFFF00', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(20, 'Amarillo Claro', '#FFFFE0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(21, 'Amarillo Mostaza', '#FFD700', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(22, 'Naranja', '#FFA500', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(23, 'Naranja Claro', '#FFCC00', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(24, 'Naranja Oscuro', '#FF8C00', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(25, 'Naranja Mandarina', '#FF6F20', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(26, 'Morado', '#800080', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(27, 'Morado Claro', '#E6E6FA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(28, 'Morado Oscuro', '#4B0082', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(29, 'Violeta', '#EE82EE', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(30, 'Violeta Claro', '#DDA0DD', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(31, 'Rosado', '#FFC0CB', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(32, 'Rosa Fuerte', '#FF1493', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(33, 'Rosa Pálido', '#FFB6C1', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(34, 'Cian', '#00FFFF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(35, 'Cian Claro', '#E0FFFF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(36, 'Cian Oscuro', '#008B8B', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(37, 'Magenta', '#FF00FF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(38, 'Magenta Claro', '#FF77FF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(39, 'Gris', '#808080', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(40, 'Gris Claro', '#D3D3D3', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(41, 'Gris Oscuro', '#A9A9A9', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(42, 'Negro', '#000000', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(43, 'Blanco', '#FFFFFF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(44, 'Marrón', '#8B4513', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(45, 'Marrón Claro', '#D2B48C', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(46, 'Marrón Oscuro', '#654321', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(47, 'Beige', '#F5F5DC', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(48, 'Lila', '#C8A2C8', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(49, 'Lavanda', '#E6E6FA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(50, 'Turquesa', '#40E0D0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(51, 'Turquesa Oscuro', '#008B8B', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(52, 'Coral', '#FF7F50', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(53, 'Coral Claro', '#FFB3B3', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(54, 'Salmon', '#FA8072', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(55, 'Salmon Claro', '#FFA07A', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(56, 'Grana', '#7D2B2B', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(57, 'Oro', '#FFD700', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(58, 'Oro Claro', '#FAFAD2', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(59, 'Plata', '#C0C0C0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(60, 'Cobre', '#B87333', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(61, 'Amarillo Canario', '#F6EB61', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(62, 'Café', '#4B3D29', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(63, 'Almendra', '#FFDEAD', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(64, 'Púrpura', '#800080', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(65, 'Lavanda Pálido', '#E6E6FA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(66, 'Blanco Humo', '#F5F5F5', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(67, 'Gris Pardo', '#C4BCA5', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(68, 'Verde Pastel', '#77DD77', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(69, 'Perla', '#EAE0D5', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(70, 'Gris Rato', '#A49A8D', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(71, 'Azul Acero', '#4682B4', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(72, 'Azul Zafiro', '#0F52BA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(73, 'Azul Turquesa', '#48D1CC', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(74, 'Cian Turquesa', '#00BFFF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(75, 'Verde Menta', '#98FF98', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(76, 'Verde Bosque', '#228B22', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(77, 'Verde Agua', '#00BFFF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(78, 'Verde Brillante', '#00FF00', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(79, 'Amarillo Pastel', '#FFFF99', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(80, 'Fucsia', '#FF00FF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(81, 'Verde Pastel Claro', '#D8E8D6', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(82, 'Menta', '#F5FFFA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(83, 'Salmón Rosado', '#FF8C69', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(84, 'Beige Claro', '#F5F5DC', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(85, 'Rosa Salmón', '#FA8072', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(86, 'Ocre', '#C5B358', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(87, 'Rosa Chicle', '#FF6F61', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(88, 'Rosa Viejo', '#C0549A', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(89, 'Cielo', '#87CEFA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(90, 'Marfil', '#FFFFF0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(91, 'Marino', '#004F7C', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(92, 'Ámbar', '#FFBF00', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(93, 'Aguamarina', '#7FFFD4', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(94, 'Albahaca', '#4D9F58', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(95, 'Ámbar Claro', '#FFD700', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(96, 'Azul Cerúleo', '#007BA7', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(97, 'Azul Índigo', '#4B0082', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(98, 'Azul Pálido', '#A1C6EA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(99, 'Beige Rosado', '#F5E7A0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(100, 'Berenjena', '#6F2C91', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(101, 'Biscuit', '#FFE4C4', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(102, 'Borgoña', '#800020', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(103, 'Cafés', '#4E3B31', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(104, 'Celeste Pálido', '#B0E0E6', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(105, 'Champán', '#F7E7CE', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(106, 'Cielo Nublado', '#B0C4DE', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(107, 'Cobre Brillante', '#CC6600', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(108, 'Coral Claro', '#F08080', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(109, 'Crema', '#FFFDD0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(110, 'Fondo de Oro', '#E8C68A', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(111, 'Frambuesa', '#E30B5D', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(112, 'Garnet', '#733B3E', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(113, 'Granito', '#7C7B7A', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(114, 'Incienso', '#E1C6D5', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(115, 'Lavanda Oscura', '#967BB6', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(116, 'Limón', '#D4E600', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(117, 'Magenta Oscuro', '#8B008B', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(118, 'Marfil Claro', '#FAF0E6', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(119, 'Menta Pálido', '#98FB98', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(120, 'Morado Clásico', '#6A5ACD', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(121, 'Naranja Neón', '#FF5F00', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(122, 'Naranja Pastel', '#FF9F20', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(123, 'Naranja Tierno', '#F69C38', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(124, 'Periwinkle', '#CCCCFF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(125, 'Pizarra', '#708090', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(126, 'Pizarra Claro', '#778899', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(127, 'Rosa Chicle', '#D1006B', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(128, 'Rosa Coral', '#FF6F61', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(129, 'Rosa Húmedo', '#F8BBD0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(130, 'Rosa Pálido', '#FFE4E1', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(131, 'Rosa Pequeño', '#F2A0C3', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(132, 'Rosa Viejo', '#C0C0D7', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(133, 'Rubio', '#F8E08D', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(134, 'Salmón Suave', '#FF9AA2', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(135, 'Siena', '#A0522D', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(136, 'Sombra', '#EEDC82', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(137, 'Terracota', '#D36D55', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(138, 'Turquesa Claro', '#AFD3E2', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(139, 'Uva', '#5E3A86', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(140, 'Verde Brillante Claro', '#00FF7F', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(141, 'Verde Manzana', '#A8E2A1', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(142, 'Verde Seco', '#B2C98D', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(143, 'Verde Mar', '#3CB371', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(144, 'Verde Oliva Claro', '#C4D600', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(145, 'Verde Suave', '#5B8C66', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(146, 'Vino Rosado', '#EAB8CC', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(147, 'Violeta Pálido', '#EAB8E4', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(148, 'Yema', '#F3EA59', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(149, 'Acero', '#B0C4DE', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(150, 'Aguamarina Claro', '#7FFFD4', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(151, 'Almendra Claro', '#FFD3B4', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(152, 'Ámbar Oscuro', '#BF8B30', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(153, 'Azul Claro', '#ADD8E6', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(154, 'Azul Claro Profundo', '#005DAA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(155, 'Azul Eléctrico', '#7DF9FF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(156, 'Azul Hielo', '#D6EAF8', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(157, 'Azul Pastel', '#AEC6CF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(158, 'Beige oscuro', '#D9C9B7', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(159, 'Beige pálido', '#F5F5DC', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(160, 'Berenjena Claro', '#A45D90', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(161, 'Biscuit Claro', '#F2E4C8', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(162, 'Blanco Fantasma', '#F8F8FF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(163, 'Blanco Marfil', '#FFFFF0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(164, 'Blanco Nieve', '#FFFAFA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(165, 'Borgoña Claro', '#9B2335', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(166, 'Café Con Leche', '#B0A58F', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(167, 'Café Claro', '#C69C6D', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(168, 'Café Oscuro', '#3B2A2A', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(169, 'Cielo Brillante', '#A3C1DA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(170, 'Cielo Suave', '#B8D3E9', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(171, 'Coral Oscuro', '#CD5B45', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(172, 'Crema Claro', '#FFFDD0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(173, 'Dorado', '#FFD700', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(174, 'Dorado Claro', '#FFF8DC', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(175, 'Durazno', '#FFDAB9', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(176, 'Fucsia Claro', '#FF77FF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(177, 'Fucsia Oscuro', '#B2006C', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(178, 'Granate Claro', '#A40000', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(179, 'Granito Claro', '#C1C1C1', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(180, 'Indigo Claro', '#6F00FF', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(181, 'Lavanda Claro', '#E6E6FA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(182, 'Lavanda Nebulosa', '#C8A2C8', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(183, 'Limón Amarillo', '#E7F9D9', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(184, 'Mandarina', '#FF8800', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(185, 'Malva', '#E6A3B7', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(186, 'Marrón Claro', '#CD853F', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(187, 'Marrón Marfil', '#E7D9C1', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(188, 'Menta Fresca', '#98FB98', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(189, 'Naranja Suave', '#F5B7B1', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(190, 'Naranja Cálido', '#FF8C00', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(191, 'Naranja Ácido', '#FFA07A', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(192, 'Negro Azabache', '#1C1C1C', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(193, 'Ocre Claro', '#D6B16C', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(194, 'Ocre Oscuro', '#BF903C', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(195, 'Oliva Oscuro', '#556B2F', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(196, 'Papel De Lija', '#C9A78D', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(197, 'Perla Claro', '#F0E5E5', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(198, 'Púrpura Clásico', '#A020F0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(199, 'Púrpura Frío', '#B5A3C8', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(200, 'Rosa Brillante', '#FF1493', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(201, 'Rosa Fucsia', '#FF2F6D', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(202, 'Rosa Pastel Claro', '#FFB3C6', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(203, 'Rubí', '#9B111E', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(204, 'Rugoso', '#ADAD85', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(205, 'Salmón Oscuro', '#C74438', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(206, 'Salmón Pastel', '#FFA07A', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(207, 'Siena Claro', '#E4B580', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(208, 'Sol', '#FFCC00', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(209, 'Sol Fuego', '#FF3300', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(210, 'Sombra Dorada', '#BF9B30', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(211, 'Terracota Claro', '#D5752A', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(212, 'Turquesa Oscuro', '#007C92', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(213, 'Turquesa Neón', '#00FFCC', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(214, 'Vermellón', '#E04E39', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(215, 'Verde Claro Pastel', '#7FFFD4', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(216, 'Verde Pastel Suave', '#C6EAB6', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(217, 'Verde Pantano', '#3B6325', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(218, 'Verde Pálido', '#D0EBA0', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(219, 'Verde Selva', '#2E8B57', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(220, 'Verde Suave Claro', '#B2FF9E', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(221, 'Vino Claro', '#7C1C2A', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(222, 'Zafiro', '#0F52BA', 'dillus-admin@gmail.com', '2024-10-19 00:44:12'),
(223, 'Zinco', '#6A6A6A', 'dillus-admin@gmail.com', '2024-10-19 00:44:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `material`
--

CREATE TABLE `material` (
  `id_material` int(11) NOT NULL,
  `material` varchar(500) NOT NULL,
  `user_crea` varchar(500) NOT NULL,
  `fec_crea` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `material`
--

INSERT INTO `material` (`id_material`, `material`, `user_crea`, `fec_crea`) VALUES
(1, 'Algodón', 'dillus-admin@gmail.com', '2024-07-24 06:15:23'),
(2, 'Poliester', 'dillus-admin@gmail.com', '2024-07-25 01:25:03'),
(3, 'Paño', 'dillus-admin@gmail.com', '2024-07-25 01:25:16'),
(4, 'Tela Engomada', 'dillus-admin@gmail.com', '2024-09-03 05:02:11'),
(5, 'Tela Licra', 'dillus-admin@gmail.com', '2024-09-03 05:02:16'),
(6, 'Jean', 'dillus-admin@gmail.com', '2024-09-03 05:02:22'),
(7, 'Borrego', 'dillus-admin@gmail.com', '2024-09-03 05:02:30'),
(8, 'Drill', 'dillus-admin@gmail.com', '2024-09-03 05:02:37'),
(9, 'Tela Rayada', 'dillus-admin@gmail.com', '2024-09-03 05:02:48'),
(10, 'Engomada Brillosa', 'dillus-admin@gmail.com', '2024-09-03 05:03:07'),
(11, 'Cuero', 'dillus-admin@gmail.com', '2024-09-03 05:03:31'),
(12, 'Cuero Revuelto', 'dillus-admin@gmail.com', '2024-09-03 05:03:42'),
(13, 'Gamuza', 'dillus-admin@gmail.com', '2024-09-03 05:03:51'),
(14, 'Piel de Durazno', 'dillus-admin@gmail.com', '2024-09-03 05:04:00'),
(15, 'Algodón Licrado', 'dillus-admin@gmail.com', '2024-09-03 05:04:20'),
(16, 'Impermeable', 'dillus-admin@gmail.com', '2024-09-03 05:04:50'),
(17, 'Cuero Ecológico', 'dillus-admin@gmail.com', '2024-09-03 05:05:10'),
(18, 'Tela', 'dillus-admin@gmail.com', '2024-09-03 05:14:22'),
(19, 'Engomado Mate ', 'dillus-admin@gmail.com', '2024-10-19 00:46:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operacion`
--

CREATE TABLE `operacion` (
  `cod_operacion` varchar(50) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `user_vendedor` varchar(500) NOT NULL,
  `fec_operacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `nro_factura` varchar(500) DEFAULT '',
  `observacion` varchar(500) DEFAULT '',
  `ciudad_envio` varchar(500) DEFAULT '',
  `precio_total` double(10,2) NOT NULL,
  `descuento` double(10,2) NOT NULL,
  `precio_pagar` double(10,2) NOT NULL,
  `estado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operacion_detalle`
--

CREATE TABLE `operacion_detalle` (
  `cod_operacion` varchar(50) NOT NULL,
  `cod_producto` varchar(50) NOT NULL,
  `sec` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` double(10,2) NOT NULL,
  `sub_total` double(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operacion_pago`
--

CREATE TABLE `operacion_pago` (
  `cod_operacion` varchar(50) NOT NULL,
  `sec_pago` int(11) NOT NULL,
  `metodo_pago` varchar(500) NOT NULL,
  `monto` double(10,2) NOT NULL,
  `url_imagen` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operacion_saldo`
--

CREATE TABLE `operacion_saldo` (
  `cod_operacion` varchar(50) NOT NULL,
  `monto` double(10,2) NOT NULL,
  `fec_mod` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_mod` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operacion_saldo_historial`
--

CREATE TABLE `operacion_saldo_historial` (
  `id_historial` int(11) NOT NULL,
  `cod_operacion` varchar(50) NOT NULL,
  `persona` varchar(500) NOT NULL,
  `monto` double(10,2) NOT NULL,
  `fec_pago` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_mod` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `cod_producto` varchar(50) NOT NULL,
  `cod_hash` varchar(500) NOT NULL,
  `codigo` varchar(500) NOT NULL,
  `tipo` varchar(500) NOT NULL,
  `categoria` varchar(500) NOT NULL,
  `talla` varchar(500) NOT NULL,
  `color` varchar(500) NOT NULL,
  `material` varchar(500) NOT NULL,
  `sexo` varchar(500) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `precio_unitario` double(10,2) NOT NULL,
  `precio_mayor` double(10,2) NOT NULL,
  `estado` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock_general`
--

CREATE TABLE `stock_general` (
  `cod_producto` varchar(50) NOT NULL,
  `cantidad` varchar(500) NOT NULL,
  `fec_mod` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock_sucursal`
--

CREATE TABLE `stock_sucursal` (
  `cod_producto` varchar(50) NOT NULL,
  `id_sucursal` int(11) NOT NULL,
  `id_almacen` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fec_mod` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE `sucursal` (
  `id_sucursal` int(11) NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `direccion` varchar(500) NOT NULL,
  `telefono` varchar(500) NOT NULL,
  `usuario_encargado` varchar(500) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `estado` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `talla`
--

CREATE TABLE `talla` (
  `id_talla` int(11) NOT NULL,
  `talla` varchar(500) NOT NULL,
  `user_crea` varchar(500) NOT NULL,
  `fec_crea` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `talla`
--

INSERT INTO `talla` (`id_talla`, `talla`, `user_crea`, `fec_crea`) VALUES
(1, 'S', 'dillus-admin@gmail.com', '2024-07-24 06:12:59'),
(2, 'M', 'dillus-admin@gmail.com', '2024-07-24 06:13:17'),
(3, 'L', 'dillus-admin@gmail.com', '2024-07-25 01:18:21'),
(4, 'XL', 'dillus-admin@gmail.com', '2024-07-25 01:18:26'),
(5, '2XL', 'dillus-admin@gmail.com', '2024-07-25 01:18:31'),
(6, '3XL', 'dillus-admin@gmail.com', '2024-07-25 01:18:35'),
(7, '4XL', 'dillus-admin@gmail.com', '2024-07-25 01:18:40'),
(8, '5XL', 'dillus-admin@gmail.com', '2024-09-03 05:12:15'),
(9, '6XL', 'dillus-admin@gmail.com', '2024-09-03 05:12:19'),
(10, '7XL', 'dillus-admin@gmail.com', '2024-09-03 05:12:24'),
(11, '31', 'dillus-admin@gmail.com', '2024-09-03 05:12:31'),
(12, '32', 'dillus-admin@gmail.com', '2024-09-03 05:12:33'),
(13, '33', 'dillus-admin@gmail.com', '2024-09-03 05:12:35'),
(14, '34', 'dillus-admin@gmail.com', '2024-09-03 05:12:38'),
(15, '35', 'dillus-admin@gmail.com', '2024-09-03 05:12:45'),
(16, '36', 'dillus-admin@gmail.com', '2024-09-03 05:12:47'),
(17, '37', 'dillus-admin@gmail.com', '2024-09-03 05:13:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario` varchar(500) NOT NULL,
  `nombres` varchar(500) NOT NULL,
  `apellidos` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `pregunta` varchar(500) NOT NULL,
  `respuesta` varchar(500) NOT NULL,
  `celular` varchar(500) NOT NULL,
  `sexo` varchar(500) NOT NULL,
  `rol` varchar(500) NOT NULL,
  `autorizacion` int(11) NOT NULL,
  `estado` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usuario`, `nombres`, `apellidos`, `password`, `pregunta`, `respuesta`, `celular`, `sexo`, `rol`, `autorizacion`, `estado`) VALUES
('dillus-developer@inmer.com.bo', 'Diego Junior', 'Llusco Chui', '$2b$10$RJRtbqdF3eYaMw9MtkAjBeV9qL2cosBhcakuoyccJAUxv2tPjv7Xe', '$2b$10$FPgBggmBkiVnTYrWt6T3MuIz4GwMhJAf4hcSSbZfdTkSyKwx7i4ly', '$2b$10$DFfNhs5AGP5y6GoIuT259.xyqOedDZFb0oPTc04E.70Dbh0JAVSF.', '77255776', 'M', 'Developer', 0, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `almacen`
--
ALTER TABLE `almacen`
  ADD PRIMARY KEY (`id_almacen`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `cliente_cuenta`
--
ALTER TABLE `cliente_cuenta`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `cliente_cuenta_historial`
--
ALTER TABLE `cliente_cuenta_historial`
  ADD PRIMARY KEY (`id_historial`);

--
-- Indices de la tabla `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id_color`);

--
-- Indices de la tabla `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id_material`);

--
-- Indices de la tabla `operacion`
--
ALTER TABLE `operacion`
  ADD PRIMARY KEY (`cod_operacion`);

--
-- Indices de la tabla `operacion_detalle`
--
ALTER TABLE `operacion_detalle`
  ADD PRIMARY KEY (`cod_operacion`,`cod_producto`);

--
-- Indices de la tabla `operacion_pago`
--
ALTER TABLE `operacion_pago`
  ADD PRIMARY KEY (`cod_operacion`,`sec_pago`);

--
-- Indices de la tabla `operacion_saldo`
--
ALTER TABLE `operacion_saldo`
  ADD PRIMARY KEY (`cod_operacion`);

--
-- Indices de la tabla `operacion_saldo_historial`
--
ALTER TABLE `operacion_saldo_historial`
  ADD PRIMARY KEY (`id_historial`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `stock_general`
--
ALTER TABLE `stock_general`
  ADD PRIMARY KEY (`cod_producto`);

--
-- Indices de la tabla `stock_sucursal`
--
ALTER TABLE `stock_sucursal`
  ADD PRIMARY KEY (`cod_producto`,`id_sucursal`,`id_almacen`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`id_sucursal`);

--
-- Indices de la tabla `talla`
--
ALTER TABLE `talla`
  ADD PRIMARY KEY (`id_talla`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `almacen`
--
ALTER TABLE `almacen`
  MODIFY `id_almacen` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cliente_cuenta_historial`
--
ALTER TABLE `cliente_cuenta_historial`
  MODIFY `id_historial` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `color`
--
ALTER TABLE `color`
  MODIFY `id_color` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=224;

--
-- AUTO_INCREMENT de la tabla `material`
--
ALTER TABLE `material`
  MODIFY `id_material` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `operacion_saldo_historial`
--
ALTER TABLE `operacion_saldo_historial`
  MODIFY `id_historial` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  MODIFY `id_sucursal` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `talla`
--
ALTER TABLE `talla`
  MODIFY `id_talla` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
