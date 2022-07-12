-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2022 at 11:28 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogverse`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `body` text NOT NULL,
  `cat` text NOT NULL,
  `post_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `share` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `user_id`, `title`, `body`, `cat`, `post_time`, `share`) VALUES
(14, 6, 'My first post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'dummy', '2022-07-12 20:33:31', 0),
(15, 6, 'A dummy post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'dummy', '2022-07-12 20:34:18', 1),
(16, 7, 'Title of Dummy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt. Viverra vitae congue eu consequat ac. Fames ac turpis egestas integer eget aliquet nibh. Fermentum dui faucibus in ornare quam viverra. Vitae congue mauris rhoncus aenean vel. Sit amet justo donec enim diam vulputate ut. Erat velit scelerisque in dictum non consectetur. Interdum consectetur libero id faucibus nisl tincidunt eget. Metus aliquam eleifend mi in. Aliquet enim tortor at auctor urna nunc id cursus metus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Risus ultricies tristique nulla aliquet enim tortor at. Et pharetra pharetra massa massa ultricies mi quis hendrerit. In arcu cursus euismod quis viverra nibh cras pulvinar. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.\n\nInteger malesuada nunc vel risus commodo viverra maecenas accumsan. Consectetur libero id faucibus nisl tincidunt eget nullam non. Nec sagittis aliquam malesuada bibendum. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Nulla pharetra diam sit amet nisl. Et tortor consequat id porta nibh venenatis. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Sed euismod nisi porta lorem. Non blandit massa enim nec dui nunc. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Dignissim sodales ut eu sem integer vitae. Sed augue lacus viverra vitae congue eu. Sit amet dictum sit amet justo donec. Ultricies lacus sed turpis tincidunt. Amet tellus cras adipiscing enim.\n\nCommodo nulla facilisi nullam vehicula ipsum. Nunc sed blandit libero volutpat sed cras ornare arcu. Nunc sed velit dignissim sodales ut eu sem. Velit laoreet id donec ultrices tincidunt arcu. Proin sed libero enim sed faucibus turpis in eu mi. Fermentum dui faucibus in ornare quam viverra orci. At imperdiet dui accumsan sit amet. Vitae congue eu consequat ac felis donec et. In ante metus dictum at tempor. Sit amet mauris commodo quis.\n\nNunc sed blandit libero volutpat sed cras ornare arcu. Amet nisl suscipit adipiscing bibendum est ultricies. Id ornare arcu odio ut sem nulla. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Ut tellus elementum sagittis vitae et. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Vitae tortor condimentum lacinia quis vel. Tortor aliquam nulla facilisi cras. Augue mauris augue neque gravida in fermentum et sollicitudin. Sit amet venenatis urna cursus eget nunc scelerisque. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Sit amet risus nullam eget. Sed odio morbi quis commodo odio. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Ullamcorper sit amet risus nullam eget felis eget nunc. Elit pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Suspendisse interdum consectetur libero id faucibus. Nam at lectus urna duis convallis convallis tellus id interdum.\n\nFermentum et sollicitudin ac orci. Massa sed elementum tempus egestas. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Pharetra convallis posuere morbi leo urna molestie at. Metus aliquam eleifend mi in nulla. Integer feugiat scelerisque varius morbi enim nunc. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Quam id leo in vitae turpis massa. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Consectetur purus ut faucibus pulvinar elementum. Porttitor leo a diam sollicitudin. Ullamcorper a lacus vestibulum sed. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Lectus quam id leo in vitae turpis. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Ultrices sagittis orci a scelerisque. Sit amet est placerat in egestas erat.', 'gaming', '2022-07-12 21:14:35', 1),
(17, 7, 'My second blog', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt. Viverra vitae congue eu consequat ac. Fames ac turpis egestas integer eget aliquet nibh. Fermentum dui faucibus in ornare quam viverra. Vitae congue mauris rhoncus aenean vel. Sit amet justo donec enim diam vulputate ut. Erat velit scelerisque in dictum non consectetur. Interdum consectetur libero id faucibus nisl tincidunt eget. Metus aliquam eleifend mi in. Aliquet enim tortor at auctor urna nunc id cursus metus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Risus ultricies tristique nulla aliquet enim tortor at. Et pharetra pharetra massa massa ultricies mi quis hendrerit. In arcu cursus euismod quis viverra nibh cras pulvinar. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.\n\nInteger malesuada nunc vel risus commodo viverra maecenas accumsan. Consectetur libero id faucibus nisl tincidunt eget nullam non. Nec sagittis aliquam malesuada bibendum. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Nulla pharetra diam sit amet nisl. Et tortor consequat id porta nibh venenatis. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Sed euismod nisi porta lorem. Non blandit massa enim nec dui nunc. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Dignissim sodales ut eu sem integer vitae. Sed augue lacus viverra vitae congue eu. Sit amet dictum sit amet justo donec. Ultricies lacus sed turpis tincidunt. Amet tellus cras adipiscing enim.\n\nCommodo nulla facilisi nullam vehicula ipsum. Nunc sed blandit libero volutpat sed cras ornare arcu. Nunc sed velit dignissim sodales ut eu sem. Velit laoreet id donec ultrices tincidunt arcu. Proin sed libero enim sed faucibus turpis in eu mi. Fermentum dui faucibus in ornare quam viverra orci. At imperdiet dui accumsan sit amet. Vitae congue eu consequat ac felis donec et. In ante metus dictum at tempor. Sit amet mauris commodo quis.\n\nNunc sed blandit libero volutpat sed cras ornare arcu. Amet nisl suscipit adipiscing bibendum est ultricies. Id ornare arcu odio ut sem nulla. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Ut tellus elementum sagittis vitae et. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Vitae tortor condimentum lacinia quis vel. Tortor aliquam nulla facilisi cras. Augue mauris augue neque gravida in fermentum et sollicitudin. Sit amet venenatis urna cursus eget nunc scelerisque. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Sit amet risus nullam eget. Sed odio morbi quis commodo odio. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Ullamcorper sit amet risus nullam eget felis eget nunc. Elit pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Suspendisse interdum consectetur libero id faucibus. Nam at lectus urna duis convallis convallis tellus id interdum.\nplacerat in egestas erat.', 'music', '2022-07-12 21:15:30', 0);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `blog_id` int(11) NOT NULL,
  `body` text NOT NULL,
  `post_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `blog_id`, `body`, `post_time`) VALUES
(16, 7, 15, 'wow nice post!!!', '2022-07-12 21:26:40');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(57) NOT NULL,
  `email` varchar(57) NOT NULL,
  `pass` text NOT NULL,
  `verified` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `pass`, `verified`) VALUES
(6, 'dummy1', 'dummy1@dummy.com', '1234', 1),
(7, 'dummy2', 'dummy2@dummy.com', '1234', 1),
(8, 'dummy3', 'dummy3@dummy.com', '1234', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
