-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: productshop
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addtocart`
--

DROP TABLE IF EXISTS `addtocart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addtocart` (
  `email` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `pid` int NOT NULL,
  `pname` varchar(40) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `url` varchar(10000) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addtocart`
--

LOCK TABLES `addtocart` WRITE;
/*!40000 ALTER TABLE `addtocart` DISABLE KEYS */;
/*!40000 ALTER TABLE `addtocart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('admin@a.com','','admin',''),('admin@a.com','a','admin',''),('admin','admin@a.com','admin','9151604860'),('admi','admin@a.comw','admin','9151604860'),('admin','admin@as.com','x2z@dG1','9151604869'),('admin','admin@gmail.com','adm4T@q','9151604860'),('mobs','m@m.com','x2z@dG1','9080706056');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon`
--

DROP TABLE IF EXISTS `coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon` (
  `id` int NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `description` varchar(400) DEFAULT NULL,
  `value` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon`
--

LOCK TABLES `coupon` WRITE;
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
INSERT INTO `coupon` VALUES (12,'Mobsmau','New User',1002),(1321,'BEST50','all users',50);
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `OrderID` int NOT NULL,
  `ProductID` int NOT NULL,
  `Quantity` int NOT NULL,
  `Date` datetime DEFAULT CURRENT_TIMESTAMP,
  `Email` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`OrderID`),
  KEY `Email` (`Email`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `users` (`email`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (12,34,2,'2022-05-28 20:40:24','u@u.com');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` int NOT NULL,
  `pname` varchar(40) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `url` varchar(10000) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (20,'Miss & Chief Beemer 12 V Battery',3456,'https://rukminim1.flixcart.com/image/612/612/ktuewsw0/electric-ride-on/u/q/2/ero-4209-miss-chief-original-imag73juwdqxatgh.jpeg?q=70',40,'Toys'),(21,'Oppo K10',14990,'https://rukminim1.flixcart.com/image/312/312/l2jcccw0/mobile/h/x/3/-original-imagduwqakhhkrse.jpeg?q=70',21,'Mobiles'),(22,'Printed Saree',1899,'https://rukminim1.flixcart.com/image/452/542/kxm5qq80/lehenga-choli/s/d/m/free-na-silk-lahenga-choli-prihal-art-original-imagafycnf3ugbvf.jpeg?q=50',22,'Fashion'),(23,'Asus Core I3',35999,'https://rukminim1.flixcart.com/image/312/312/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70',6,'Electronics'),(24,'Easy Garlic Pack',299,'https://rukminim1.flixcart.com/image/612/612/ksqeky80/fmcg-combo/t/t/r/garlic-sprinkles-250g-540-easy-life-original-imag68h3kbh5tm2j.jpeg?q=70',5,'Grocery'),(34,'Redmi Note 10',16000,'https://rukminim1.flixcart.com/image/312/312/l0h1g280/mobile/w/h/y/-original-imagc9cqufrrkbtn.jpeg?q=70',23,'Mobiles'),(123,'Realme C11',7499,'https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70',20,'Mobiles'),(124,'Motorola E40',9999,'https://rukminim1.flixcart.com/image/312/312/l1l1rww0/mobile/v/7/n/-original-imagd48zkjwujxzz.jpeg?q=70',20,'Mobiles'),(125,'Poco C31',8499,'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/b/o/m/c31-mzb0a0min-poco-original-imag7bzqxekkpkrv.jpeg?q=70',20,'Mobiles'),(126,'Motorola G60',8499,'https://rukminim1.flixcart.com/image/312/312/l0o6nbk0/mobile/y/s/e/-original-imagceu559m75mks.jpeg?q=70',20,'Mobiles'),(127,'Boat Stone 350',2499,'https://rukminim1.flixcart.com/image/612/612/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70',20,'Electronics'),(128,'JBL Flip',5999,'https://rukminim1.flixcart.com/image/612/612/k4x2du80/speaker/mobile-tablet-speaker/c/z/f/jbl-flip-essential-original-imafnpuhahqwvwhw.jpeg?q=70',26,'Electronics'),(129,'Acer Aspire Core I5',52990,'https://rukminim1.flixcart.com/image/312/312/knhsgi80/computer/u/y/4/na-thin-and-light-laptop-acer-original-imag25zfahpqmyjm.jpeg?q=70',5,'Electronics'),(130,'Lenovo Ideapad',34990,'https://rukminim1.flixcart.com/image/312/312/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70',5,'Electronics'),(131,'T-Shirts Blive',199,'https://rukminim1.flixcart.com/image/452/542/kzu6efk0/t-shirt/c/g/f/l-bylrn-z31-blive-original-imagbr9hjdfszjwz.jpeg?q=50',50,'Fashion'),(132,'T-Shirts Tripr',399,'https://rukminim1.flixcart.com/image/452/542/l16rde80/t-shirt/i/a/h/xs-tbgrrn-d45-tripr-original-imagcty5fca3jh64.jpeg?q=50',50,'Fashion'),(133,'T-Shirts Provogage',799,'https://rukminim1.flixcart.com/image/452/542/kkfrjww0/t-shirt/o/5/f/m-praw20cn023c-provogue-original-imafzshka4rgvweh.jpeg?q=50',65,'Fashion'),(134,'T-Shirts Eyebogler',899,'https://rukminim1.flixcart.com/image/452/542/kgqvlow0-0/t-shirt/h/a/o/l-t322-blwh-seven-rocks-original-imafwwq4nusfvfw9.jpeg?q=50',87,'Fashion'),(135,'Green Supergreens ',699,'https://rukminim1.flixcart.com/image/612/612/kjym9ow0/fmcg-combo/d/h/0/supergreens-fruits-and-citrus-vitamin-c-combo-pack-bgreen-original-imafzffhvkuxwn7p.jpeg?q=70',87,'Grocery'),(137,'Yuvraj Food Product Sweets ',133,'https://rukminim1.flixcart.com/image/612/612/l0fm07k0/fmcg-combo/0/r/o/sweets-or-holi-colours-festival-combo-soan-papadi-400-gm-gulal-original-imagc7wdjhhdcegz.jpeg?q=70',89,'Grocery'),(138,'Let\'s GoNuts Whole',588,'https://rukminim1.flixcart.com/image/612/612/k98tdow0/fmcg-combo/x/p/x/whole-cashew-nuts-kaju-pistachios-roasted-lightly-salted-pista-original-imafr2zskuzezfag.jpeg?q=70',67,'Grocery'),(139,'Einstein Box Science Experiment Kit',457,'https://rukminim1.flixcart.com/image/612/612/ktketu80/learning-toy/2/y/w/science-experiment-kit-chemistry-kit-toys-for-boys-and-girls-original-imag6vsncwn8aggd.jpeg?q=70',40,'Toys'),(141,'Rubic Cube',145,'https://rukminim1.flixcart.com/image/612/612/kikluvk0-0/puzzle/y/k/x/1-3x3x3-speed-cube-high-staybility-sticker-less-smooth-swing-for-original-imafybxtmp9c2zth.jpeg?q=70',40,'Toys'),(1356,'SurpriseForU Chocolate Gift',188,'https://rukminim1.flixcart.com/image/612/612/kw5ag7k0/festive-gift-box/v/b/g/3-small-chocolate-surprise-gift-box-christmas-chocolate-gift-original-imag8w46hedytxfb.jpeg?q=70',67,'Grocery');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Mobsmau','mobs@gmail.com','mobs','9151604860'),('user','u@u.com',' x2z@dG1','9080786563');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'productshop'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-31 19:12:17
