/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-05-21 21:34:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `disabled` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否禁用',
  `mobile_phone` varchar(11) COLLATE utf8_unicode_ci NOT NULL COMMENT '手机号码',
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT '邮箱',
  `password` char(32) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户密码',
  `register_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '注册时间',
  `register_ip` varchar(15) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '注册IP',
  `last_login_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最后一次登录时间',
  `last_login_ip` varchar(15) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '最后一次登录IP',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_1483A5E9F85E0677` (`username`),
  UNIQUE KEY `UNIQ_1483A5E9AA92691` (`mobile_phone`),
  UNIQUE KEY `UNIQ_1483A5E9E7927C74` (`email`),
  KEY `disabled` (`disabled`),
  KEY `register_ip` (`register_ip`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('6', 'test0', '0', '15810803000', 'test0@vip.qq.com', 'f6f4061a1bddc1c04d8109b39f581270', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
INSERT INTO `users` VALUES ('7', 'test1', '0', '15810803001', 'test1@vip.qq.com', '5a105e8b9d40e1329780d62ea2265d8a', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
INSERT INTO `users` VALUES ('8', 'test2', '0', '15810803002', 'test2@vip.qq.com', 'ad0234829205b9033196ba818f7a872b', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
INSERT INTO `users` VALUES ('9', 'test3', '0', '15810803003', 'test3@vip.qq.com', '8ad8757baa8564dc136c1e07507f4a98', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
INSERT INTO `users` VALUES ('10', 'test4', '0', '15810803004', 'test4@vip.qq.com', '86985e105f79b95d6bc918fb45ec7727', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
INSERT INTO `users` VALUES ('11', 'test5', '0', '15810803005', 'test5@vip.qq.com', 'e3d704f3542b44a621ebed70dc0efe13', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
INSERT INTO `users` VALUES ('12', 'test6', '0', '15810803006', 'test6@vip.qq.com', '4cfad7076129962ee70c36839a1e3e15', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
INSERT INTO `users` VALUES ('13', 'test7', '0', '15810803007', 'test7@vip.qq.com', 'b04083e53e242626595e2b8ea327e525', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
INSERT INTO `users` VALUES ('14', 'test8', '0', '15810803008', 'test8@vip.qq.com', '5e40d09fa0529781afd1254a42913847', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
INSERT INTO `users` VALUES ('15', 'test9', '0', '15810803009', 'test9@vip.qq.com', '739969b53246b2c727850dbb3490ede6', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
INSERT INTO `users` VALUES ('16', 'test10', '0', '15810803010', 'test10@vip.qq.com', 'c1a8e059bfd1e911cf10b626340c9a54', '1520213901', '127.0.0.1', '1520213901', '127.0.0.1');
