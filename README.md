﻿# dnfweb


自制，仿dnf资料站形式，使用nodejs + express + mysql，在家测试时所用浏览器为Chrome

在工程根目录下输入命令行 node app.js 启动。

所用到的数据表文件在“相关的数据表文件”文件夹内。启动之前请放置在本地的mysql数据库里，同时在mysqlConfig.js文件里配置好对应你本地的mysql配置。

该工程的样式文件使用SASS为预处理器，但使用的是koala软件作为编译工具。

users数据表中有五个已存在的用户:abc,def,HD,woody,ghi。密码与用户名一致，其中HD拥有最高权限可在首页进入用户管理页，abc与woody拥有上传及资料的权限，def和ghi为普通用户。

