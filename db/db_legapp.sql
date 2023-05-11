-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20230127.4260efdc58
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-05-2023 a las 05:29:42
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_legapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `legalizacion`
--

CREATE TABLE `legalizacion` (
  `idLegalizacion` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idRol` int(11) NOT NULL,
  `idTipoGasto` int(11) NOT NULL,
  `idProveedor` int(11) NOT NULL,
  `fechaCreacion` date NOT NULL DEFAULT current_timestamp(),
  `descripcionGasto` varchar(255) DEFAULT NULL,
  `valorGasto` varchar(45) NOT NULL,
  `evidenciaGasto` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `legalizacion`
--

INSERT INTO `legalizacion` (`idLegalizacion`, `idUsuario`, `idRol`, `idTipoGasto`, `idProveedor`, `fechaCreacion`, `descripcionGasto`, `valorGasto`, `evidenciaGasto`) VALUES
(2, 4, 1, 5, 10, '2023-05-10', 'prueba test', '345555', ''),
(3, 4, 1, 5, 10, '2023-05-10', 'prueba test', '345555', ''),
(4, 4, 1, 5, 10, '2023-05-10', 'prueba test', '345555', ''),
(5, 4, 1, 5, 10, '2023-05-10', 'prueba test', '345555', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `idProveedor` int(11) NOT NULL,
  `NIT` varchar(150) NOT NULL,
  `nombreProveedor` varchar(45) NOT NULL,
  `telefonoProveedor` varchar(12) NOT NULL,
  `direccion` varchar(150) NOT NULL,
  `nombreContactoProveedor` varchar(150) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`idProveedor`, `NIT`, `nombreProveedor`, `telefonoProveedor`, `direccion`, `nombreContactoProveedor`, `estado`) VALUES
(2, '31341231', 'test update', '455664', 'cra 5 78', 'test', 0),
(3, '3311132', 'PROVEEDOR', '1111111', 'DIRECCION', 'Gerardo ', 1),
(4, '2231341', 'testProvider', '3453321', 'Siloe', 'Martha', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `idRol` int(11) NOT NULL,
  `nombreRol` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idRol`, `nombreRol`) VALUES
(1, 'legalizador'),
(2, 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipogasto`
--

CREATE TABLE `tipogasto` (
  `idTipoGasto` int(11) NOT NULL,
  `nombreGasto` varchar(45) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipogasto`
--

INSERT INTO `tipogasto` (`idTipoGasto`, `nombreGasto`, `estado`) VALUES
(1, 'updatedGastico', 1),
(2, 'gasto prueba 2', 0),
(3, 'gasto prueba 2', 0),
(4, 'PRUEBA 5', 0),
(5, 'dfgdsf', 0),
(6, 'POSTOBON', 1),
(7, 'Yu Gi Oh', 1),
(8, 'pase de batalla fortnite', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `idRol` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `idRol`, `nombre`, `email`, `password`, `estado`) VALUES
(5, 2, 'prueba2', 'otro@email.com', 'bcbe3365e6ac95ea2c0343a2395834dd', 1),
(6, 1, 'legalUser', 'legal@email.com', 'bcbe3365e6ac95ea2c0343a2395834dd', 1),
(7, 2, 'no-legal', 'no-l@email', 'a6b18fa1351a9904031355730ae9eb7b', 1),
(8, 2, 'actualizarPorParams', 'pruebaActualizarParams@email', '45014338dcfecc562addacbf4faddef8', 0),
(9, 1, 'legal2', 'testlegal2@email.com', '250cf8b51c773f3f8dc8b4be867a9a02', 0),
(10, 2, 'testAdmin', 'testA@email.com', 'b09c600fddc573f117449b3723f23d64', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `legalizacion`
--
ALTER TABLE `legalizacion`
  ADD PRIMARY KEY (`idLegalizacion`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`idProveedor`);

--
-- Indices de la tabla `tipogasto`
--
ALTER TABLE `tipogasto`
  ADD PRIMARY KEY (`idTipoGasto`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `legalizacion`
--
ALTER TABLE `legalizacion`
  MODIFY `idLegalizacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `idProveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipogasto`
--
ALTER TABLE `tipogasto`
  MODIFY `idTipoGasto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
