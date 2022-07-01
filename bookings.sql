-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Gegenereerd op: 01 jul 2022 om 21:50
-- Serverversie: 10.4.20-MariaDB
-- PHP-versie: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookings`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `players` int(11) NOT NULL,
  `private` tinyint(1) NOT NULL,
  `room` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `bookings`
--

INSERT INTO `bookings` (`id`, `created_at`, `updated_at`, `name`, `email`, `company`, `date`, `players`, `private`, `room`) VALUES
(24, '2022-06-30 15:55:52', '2022-06-30 20:37:12', 'kilian', 'odisee@deceuster.com', 'theparl', '2022-06-29 00:00:00', 8, 0, 1),
(40, '2022-06-30 21:21:36', '2022-06-30 21:21:36', 'Luther Koch Sr.', 'darrell99@robel.info', 'Haag-Spencer', '2022-06-22 05:41:34', 5, 1, 2),
(41, '2022-06-30 21:21:36', '2022-06-30 21:21:36', 'Stuart Turcotte IV', 'rokon@jacobson.com', 'Leuschke-Steuber', '2022-06-23 22:03:31', 5, 1, 1),
(48, '2022-06-30 21:21:36', '2022-06-30 21:23:16', 'updated', 'updated@deceuster.com', 'thepark', '2022-06-30 00:00:00', 8, 0, 1),
(67, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Jerald Leuschke', 'johann87@boyle.com', 'Hane-Bahringer', '2022-06-28 18:08:27', 5, 1, 1),
(68, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Dr. Andre Prosacco', 'bernier.leonor@yahoo.com', 'Dickinson-Lehner', '2022-06-19 19:09:26', 7, 1, 1),
(69, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Prof. Americo Blanda', 'ahahn@gmail.com', 'Raynor-Batz', '2022-06-09 02:14:57', 2, 1, 1),
(70, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Prof. Ardith Powlowski Sr.', 'oswift@hotmail.com', 'Sporer, Smith and Bednar', '2022-06-18 00:56:28', 8, 1, 2),
(71, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Soledad Kuhlman MD', 'nmarvin@yahoo.com', 'Nikolaus-Grimes', '2022-06-14 08:49:52', 3, 1, 1),
(72, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Prof. Deanna Morissette III', 'metz.elinore@mitchell.com', 'Purdy-Feeney', '2022-06-29 00:19:03', 8, 1, 1),
(73, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Bria Legros', 'ned73@volkman.com', 'Kuhlman PLC', '2022-06-23 02:31:02', 6, 1, 1),
(74, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Georgette Emard', 'hegmann.clementina@hotmail.com', 'Nolan-Schaefer', '2022-06-04 12:55:43', 7, 1, 2),
(75, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Rosa Leannon', 'anais99@fadel.com', 'Rosenbaum-Swaniawski', '2022-06-19 07:36:45', 6, 1, 1),
(76, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Oda Lang', 'estell.strosin@hotmail.com', 'Grimes PLC', '2022-06-09 05:02:53', 1, 1, 1),
(77, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Dr. Gaetano Corwin', 'mohamed83@tillman.com', 'Schultz-Moore', '2022-06-29 03:39:56', 7, 1, 2),
(78, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Dr. Jett Upton DDS', 'terrance.nienow@gmail.com', 'Jacobson, Collier and Predovic', '2022-06-13 06:38:43', 3, 1, 2),
(79, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Ms. Roberta Stark Sr.', 'ted35@hotmail.com', 'Dickinson LLC', '2022-06-06 09:06:56', 1, 1, 1),
(80, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Alyce Stracke', 'fgerhold@hotmail.com', 'Walsh LLC', '2022-06-26 18:39:09', 3, 1, 2),
(81, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Holly Fadel', 'melisa62@yahoo.com', 'Moore LLC', '2022-06-17 00:03:49', 4, 1, 2),
(82, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Sonny Runolfsson', 'berenice91@hotmail.com', 'Hyatt Inc', '2022-06-11 02:39:02', 5, 1, 2),
(83, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Darlene Aufderhar', 'layne.boyer@dickens.com', 'Romaguera, McLaughlin and Schuppe', '2022-06-04 21:29:11', 3, 1, 2),
(84, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Abdul Gutmann', 'andres60@kerluke.org', 'Haag, Howe and Purdy', '2022-06-24 16:52:30', 1, 1, 2),
(85, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Orie Lakin', 'morissette.xzavier@watsica.net', 'Gaylord-Wuckert', '2022-06-07 21:40:57', 8, 1, 2),
(86, '2022-07-01 17:24:45', '2022-07-01 17:24:45', 'Ms. Bethel Hilpert', 'maggio.angelita@hotmail.com', 'Haag-Nienow', '2022-06-24 11:41:25', 7, 1, 1),
(87, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Dr. Edwardo Quitzon III', 'champlin.juwan@ankunding.com', 'Wiegand-McLaughlin', '2022-07-19 04:50:39', 7, 1, 1),
(88, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Emerald Kshlerin', 'alverta.ebert@kilback.com', 'Smitham Group', '2022-07-07 17:48:37', 6, 1, 2),
(89, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Mr. Carroll Mraz', 'rahsaan.rowe@bashirian.com', 'Cartwright, Bergstrom and Hills', '2022-07-27 03:33:36', 1, 1, 2),
(90, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Prudence Herzog', 'jennings.gutkowski@renner.net', 'Spinka-Kovacek', '2022-07-28 16:23:31', 1, 1, 2),
(91, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Elwyn Moen', 'herzog.quentin@gmail.com', 'Dietrich LLC', '2022-06-29 18:34:00', 7, 1, 1),
(92, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Mr. Isaias Emmerich', 'aleen48@hotmail.com', 'Padberg, Cronin and Bradtke', '2022-06-06 07:06:40', 7, 1, 2),
(93, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Jena Fahey', 'ashleigh.pfeffer@hotmail.com', 'Cassin, Bernier and Tremblay', '2022-06-21 19:21:45', 5, 1, 2),
(94, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Shyann Blanda I', 'lehner.hermann@gibson.info', 'McCullough, Schmidt and Beier', '2022-07-03 05:49:00', 1, 1, 2),
(95, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Mrs. Chyna Flatley', 'renner.kristin@gmail.com', 'Walsh, VonRueden and Bradtke', '2022-07-28 04:45:37', 3, 1, 2),
(96, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Freddy Hyatt', 'ara.jones@pollich.com', 'Schoen Group', '2022-07-03 02:36:14', 2, 1, 2),
(97, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Prof. Francesca Senger II', 'alva.mills@hotmail.com', 'Gislason-Abernathy', '2022-07-11 07:08:26', 6, 1, 2),
(98, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Aron Leffler', 'major.cremin@gmail.com', 'Sporer, Macejkovic and Becker', '2022-07-22 21:43:26', 3, 1, 2),
(99, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Sidney Bernhard', 'maryse.simonis@gmail.com', 'Kunze-Nader', '2022-07-20 11:08:41', 8, 1, 2),
(100, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Prof. Derrick Harber DVM', 'clay.terry@funk.com', 'Gottlieb-Howe', '2022-06-06 08:50:51', 1, 1, 2),
(101, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Tracey Sanford', 'beahan.leonie@hotmail.com', 'Friesen-Dicki', '2022-07-10 10:38:42', 5, 1, 1),
(102, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Camden Hayes', 'heathcote.jason@yahoo.com', 'O\'Kon Inc', '2022-07-21 16:13:12', 4, 1, 1),
(103, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Dr. Josh Ledner', 'fmueller@yahoo.com', 'Spinka-Baumbach', '2022-06-28 18:30:44', 8, 1, 1),
(104, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Koby Lehner', 'jaylen.bogisich@hotmail.com', 'Haag and Sons', '2022-07-03 14:14:35', 7, 1, 1),
(105, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Dr. Saul Windler', 'turner.rhiannon@sanford.org', 'Ondricka-Stokes', '2022-07-05 02:46:58', 8, 1, 1),
(106, '2022-07-01 17:27:56', '2022-07-01 17:27:56', 'Prof. Candace Davis Sr.', 'kale39@hotmail.com', 'Emmerich, Bednar and Walsh', '2022-07-10 04:51:08', 7, 1, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(21, '2014_10_12_000000_create_users_table', 1),
(22, '2014_10_12_100000_create_password_resets_table', 1),
(23, '2019_08_19_000000_create_failed_jobs_table', 1),
(24, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(25, '2022_06_29_163713_create_bookings_table', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexen voor tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexen voor tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexen voor tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT voor een tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT voor een tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
