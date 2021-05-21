-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 21 mai 2021 à 17:14
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `crud_vue`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`) VALUES
(1, 'POTTER Harry', 'h.potter@gmail.com', 12345678),
(3, 'Ron Weasley', 'r.wesley@gmail.com', 455597),
(22, 'Hermione Granger', 'h.granger@gmail.com', 2147483647),
(42, 'Indiana Jones', 'i.jones@gmail.com', 11111),
(46, 'Kratos', 'kratos@gmail.com', 1472365),
(47, 'UBI Soft', 'ubi@gmail.com', 9876564),
(53, 'Voizard Thierry', 'tvoizard', 666204827),
(57, 'James Bond', 'j.bond@gmail.com', 700),
(60, 'michel ange', 'm.ange@gmail.com', 111),
(61, 'Indiana Jones', 'i.jones@gmail.com', 333),
(62, 'master', 'master@gmail.com', 123456789),
(63, 'James Bond', 'j.bond@gmail.com', 100700700),
(64, 'michel ange', 'm.ange@gmail.com', 111111111),
(65, 'James Bond', 'j.bond@gmail.com', 123456789),
(67, 'Elise CHAPUIS', 'e.chapuis@gmail.com', 666204827),
(68, 'Wayne Bruce', 'b.wayne@gmail.com', 123456789),
(69, 'Felicity Smoak', 'f.smoak@gmail.com', 123456789),
(70, 'Wayne Bruce', 'b.wayne@gmail.com', 222222222),
(71, 'Dark Vador', 'd.vador@gmail.com', 202020202),
(72, 'Leia Organa', 'l.organa@gmail.com', 123456789),
(73, 'Luke Skywalker', 'l.skywalker@gmail.com', 111111111);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
