"use strict";(self.webpackChunkOERTemplate=self.webpackChunkOERTemplate||[]).push([[811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),k=p(a),d=i,c=k["".concat(s,".").concat(d)]||k[d]||u[d]||o;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(3117),i=(a(7294),a(3905));const o={id:"assignment2",title:"Assignment 2",sidebar_position:2,description:"OSL745 Assignment 2"},l="Assignment 2: Installing WordPress in AWS (PaaS)",r={unversionedId:"Assignments/assignment2",id:"Assignments/assignment2",title:"Assignment 2",description:"OSL745 Assignment 2",source:"@site/docs/Assignments/assignment2.md",sourceDirName:"Assignments",slug:"/Assignments/assignment2",permalink:"/OSL745/Assignments/assignment2",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OERTemplate/tree/main/docs/Assignments/assignment2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"assignment2",title:"Assignment 2",sidebar_position:2,description:"OSL745 Assignment 2"},sidebar:"courseNotesSidebar",previous:{title:"Assignment 1",permalink:"/OSL745/Assignments/assignment1"}},s={},p=[{value:"Objectives of Assignment 2",id:"objectives-of-assignment-2",level:2},{value:"Task 1: Networking",id:"task-1-networking",level:2},{value:"Virtual Private Cloud",id:"virtual-private-cloud",level:3},{value:"Subnets",id:"subnets",level:3},{value:"Internet Gateway",id:"internet-gateway",level:3},{value:"Route Tables",id:"route-tables",level:3},{value:"Security Groups",id:"security-groups",level:3},{value:"Screenshots for submission",id:"screenshots-for-submission",level:3},{value:"Task 2: Database",id:"task-2-database",level:2},{value:"Task 3: Wordpress Source Code Modification",id:"task-3-wordpress-source-code-modification",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Download and Unzip - Local Computer",id:"download-and-unzip---local-computer",level:3},{value:"Modify Wordpress Configuration File",id:"modify-wordpress-configuration-file",level:3},{value:"Duplicate and Open Configuration File",id:"duplicate-and-open-configuration-file",level:4},{value:"Adding Database Connector Info as Environment Variables",id:"adding-database-connector-info-as-environment-variables",level:4},{value:"Adding Authentication Unique Keys and Salts as Environment Variables",id:"adding-authentication-unique-keys-and-salts-as-environment-variables",level:4},{value:"Zip As New File and Rename - Local Computer",id:"zip-as-new-file-and-rename---local-computer",level:3},{value:"Task 4: Elastic Beanstalk",id:"task-4-elastic-beanstalk",level:2},{value:"Environment Tier",id:"environment-tier",level:3},{value:"Main settings",id:"main-settings",level:3},{value:"Configure Service Access",id:"configure-service-access",level:3},{value:"Network",id:"network",level:3},{value:"Database settings",id:"database-settings",level:3},{value:"Instances",id:"instances",level:3},{value:"Configure updates, monitoring and logging",id:"configure-updates-monitoring-and-logging",level:3},{value:"Monitoring",id:"monitoring",level:4},{value:"Platform Software",id:"platform-software",level:4},{value:"Container Options",id:"container-options",level:4},{value:"Review options",id:"review-options",level:4},{value:"Create the application.",id:"create-the-application",level:3},{value:"Task 5: Site Configuration",id:"task-5-site-configuration",level:2},{value:"Site Information",id:"site-information",level:3},{value:"Task 6: Blog Posts",id:"task-6-blog-posts",level:2},{value:"Blog Post: 1",id:"blog-post-1",level:3},{value:"Blog Post: 2",id:"blog-post-2",level:3},{value:"Assignment Submission",id:"assignment-submission",level:2}],m={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assignment-2-installing-wordpress-in-aws-paas"},"Assignment 2: Installing WordPress in AWS (PaaS)"),(0,i.kt)("h2",{id:"objectives-of-assignment-2"},"Objectives of Assignment 2"),(0,i.kt)("p",null,"In this assignment, you will install a WordPress blog in AWS using ",(0,i.kt)("em",{parentName:"p"},"Elastic Beanstalk")," and ",(0,i.kt)("em",{parentName:"p"},"RDS"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You will construct this assignment in the ",(0,i.kt)("em",{parentName:"strong"},"AWS Academy Learner Lab")," classroom that has been provided.")),(0,i.kt)("p",null,"The purpose of this assignment is to demonstrate your knowledge of Amazon Web Services gathered from lectures and assigned labs and to show you how you can leverage Platform as a Service (PaaS) to build a web application easily. Some services you configure in this assignment will be familiar; some may be new. It is broken down into 6 tasks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Task 1: Networking"),(0,i.kt)("li",{parentName:"ul"},"Task 2: Database"),(0,i.kt)("li",{parentName:"ul"},"Task 3: Wordpress Source Code Modification"),(0,i.kt)("li",{parentName:"ul"},"Task 4: Elastic Beanstalk"),(0,i.kt)("li",{parentName:"ul"},"Task 5: Site Configuration"),(0,i.kt)("li",{parentName:"ul"},"Task 6: Blog Posts")),(0,i.kt)("h2",{id:"task-1-networking"},"Task 1: Networking"),(0,i.kt)("p",null,"In this task, you will create all the networking required for your new web application."),(0,i.kt)("h3",{id:"virtual-private-cloud"},"Virtual Private Cloud"),(0,i.kt)("p",null,"Create a new VPC with the following settings:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"VPC only")),(0,i.kt)("li",{parentName:"ol"},"Name: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress VPC")),(0,i.kt)("li",{parentName:"ol"},"IPv4 CIDR: ",(0,i.kt)("strong",{parentName:"li"},"10.0.0.0/16")),(0,i.kt)("li",{parentName:"ol"},"Leave all other settings on default")),(0,i.kt)("p",null,"Once created, modify this VPC (",(0,i.kt)("em",{parentName:"p"},"Edit VPC Settings"),") with the following actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enable DNS resolution: ",(0,i.kt)("strong",{parentName:"li"},"Checked")),(0,i.kt)("li",{parentName:"ol"},"Enable DNS hostnames: ",(0,i.kt)("strong",{parentName:"li"},"Checked"))),(0,i.kt)("h3",{id:"subnets"},"Subnets"),(0,i.kt)("p",null,"Create two private IPv4 subnets in this VPC:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Private Subnet 1 \u2013 ",(0,i.kt)("strong",{parentName:"li"},"10.0.1.0/24 \u2013 us-east-1a")),(0,i.kt)("li",{parentName:"ol"},"Private Subnet 2 \u2013 ",(0,i.kt)("strong",{parentName:"li"},"10.0.2.0/24 \u2013 us-east-1b"))),(0,i.kt)("p",null,"Create two public IPv4 subnets in this VPC:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Public Subnet 1 \u2013 ",(0,i.kt)("strong",{parentName:"li"},"10.0.11.0/24 \u2013 us-east-1a")),(0,i.kt)("li",{parentName:"ol"},"Public Subnet 2 \u2013 ",(0,i.kt)("strong",{parentName:"li"},"10.0.12.0/24 \u2013 us-east-1b"))),(0,i.kt)("p",null,"Edit your public subnets (",(0,i.kt)("em",{parentName:"p"},"Edit subnet settings"),") with the following settings:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enable auto-assign public IPv4 address: ",(0,i.kt)("strong",{parentName:"li"},"Checked")),(0,i.kt)("li",{parentName:"ol"},"Enable resource name DNS A record on launch: ",(0,i.kt)("strong",{parentName:"li"},"Checked"))),(0,i.kt)("h3",{id:"internet-gateway"},"Internet Gateway"),(0,i.kt)("p",null,"Create a new Internet Gateway with the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Name: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress Gateway")),(0,i.kt)("li",{parentName:"ol"},"Once created, attach it to your Wordpress VPC.")),(0,i.kt)("h3",{id:"route-tables"},"Route Tables"),(0,i.kt)("p",null,"Find your default route table for your Wordpress VPC and add the name: ",(0,i.kt)("strong",{parentName:"p"},"VPC-local Route Table")),(0,i.kt)("p",null,"Create a second route table:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Name: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress Website Route Table")),(0,i.kt)("li",{parentName:"ol"},"VPC: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress VPC")),(0,i.kt)("li",{parentName:"ol"},"Routes Entry 1:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Destination: ",(0,i.kt)("strong",{parentName:"li"},"10.0.0.0/16")),(0,i.kt)("li",{parentName:"ol"},"Target: ",(0,i.kt)("strong",{parentName:"li"},"local")))),(0,i.kt)("li",{parentName:"ol"},"Routes Entry 2:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Destination: ",(0,i.kt)("strong",{parentName:"li"},"0.0.0.0/0")),(0,i.kt)("li",{parentName:"ol"},"Target: ",(0,i.kt)("strong",{parentName:"li"},"Internet Gateway \u2013 Wordpress Gateway"))))),(0,i.kt)("h3",{id:"security-groups"},"Security Groups"),(0,i.kt)("p",null,"Create a security group with the following settings:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Name: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress Website SG")),(0,i.kt)("li",{parentName:"ol"},"Description: ",(0,i.kt)("strong",{parentName:"li"},"Allows HTTP traffic inbound")),(0,i.kt)("li",{parentName:"ol"},"VPC: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress VPC")),(0,i.kt)("li",{parentName:"ol"},"Inbound Rule:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"HTTP")),(0,i.kt)("li",{parentName:"ol"},"Source: ",(0,i.kt)("strong",{parentName:"li"},"Anywhere \u2013 IPv4 (0.0.0.0/0)"))))),(0,i.kt)("p",null,"Create a security group with the following settings:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Name: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress Database SG")),(0,i.kt)("li",{parentName:"ol"},"Description: ",(0,i.kt)("strong",{parentName:"li"},"Allows MySQL traffic locally")),(0,i.kt)("li",{parentName:"ol"},"VPC: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress VPC")),(0,i.kt)("li",{parentName:"ol"},"Inbound Rule:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"MYSQL/Aurora")),(0,i.kt)("li",{parentName:"ol"},"Source: ",(0,i.kt)("strong",{parentName:"li"},"Custom")," (Select ",(0,i.kt)("em",{parentName:"li"},"Wordpress Website SG")," in the search field)")))),(0,i.kt)("p",null,"Edit both public subnets\u2019 route table associations to: ",(0,i.kt)("strong",{parentName:"p"},"Wordpress Website Route Table")),(0,i.kt)("h3",{id:"screenshots-for-submission"},"Screenshots for submission"),(0,i.kt)("p",null,"Take screenshots showing your 4 new subnets (Public Subnet 1, Public Subnet 2, Private Subnet 1 & Private Subnet 2), Route Table and Internet Gateway have been created."),(0,i.kt)("h2",{id:"task-2-database"},"Task 2: Database"),(0,i.kt)("p",null,"Create a new RDS instance with the following settings:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Engine type: ",(0,i.kt)("strong",{parentName:"li"},"MySQL")),(0,i.kt)("li",{parentName:"ol"},"Engine Version: ",(0,i.kt)("strong",{parentName:"li"},"MySQL 8.0.36")," (or current latest version available)"),(0,i.kt)("li",{parentName:"ol"},"Templates: ",(0,i.kt)("strong",{parentName:"li"},"Free tier")),(0,i.kt)("li",{parentName:"ol"},"DB instance identifier: ",(0,i.kt)("strong",{parentName:"li"},"wordpress-db")),(0,i.kt)("li",{parentName:"ol"},"Master username: ",(0,i.kt)("strong",{parentName:"li"},"admin")),(0,i.kt)("li",{parentName:"ol"},"Auto generate a password: ",(0,i.kt)("strong",{parentName:"li"},"Checked")),(0,i.kt)("li",{parentName:"ol"},"DB instance class: ",(0,i.kt)("strong",{parentName:"li"},"db.t3.micro")),(0,i.kt)("li",{parentName:"ol"},"Allocated storage: ",(0,i.kt)("strong",{parentName:"li"},"5 GiB")),(0,i.kt)("li",{parentName:"ol"},"Enable storage autoscaling: ",(0,i.kt)("strong",{parentName:"li"},"Unchecked")),(0,i.kt)("li",{parentName:"ol"},"Virtual private cloud (VPC): ",(0,i.kt)("strong",{parentName:"li"},"Wordpress VPC")),(0,i.kt)("li",{parentName:"ol"},"DB subnet group: ",(0,i.kt)("strong",{parentName:"li"},"Create new DB Subnet Group")," (if you're redoing your database creation, there will already be an entry here. Make sure you're using the ",(0,i.kt)("em",{parentName:"li"},"Wordpress VPC")," in the setting above!)"),(0,i.kt)("li",{parentName:"ol"},"Public access: ",(0,i.kt)("strong",{parentName:"li"},"No")),(0,i.kt)("li",{parentName:"ol"},"VPC security group: ",(0,i.kt)("strong",{parentName:"li"},"Choose existing")),(0,i.kt)("li",{parentName:"ol"},"Existing VPC security groups:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Remove default VPC")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Add ",(0,i.kt)("em",{parentName:"strong"},"Wordpress Database SG"))," (look to see that it's there below the dropdown after you select it)"))),(0,i.kt)("li",{parentName:"ol"},"Availability Zone: ",(0,i.kt)("strong",{parentName:"li"},"us-east-1a")),(0,i.kt)("li",{parentName:"ol"},"Monitoring > Enable Enhanced monitoring: ",(0,i.kt)("strong",{parentName:"li"},"Unchecked")),(0,i.kt)("li",{parentName:"ol"},"Below the Monitoring section, Additional configuration > Initial database name: ",(0,i.kt)("strong",{parentName:"li"},"wordpress")," (Write the database name down! You will need this later.)"),(0,i.kt)("li",{parentName:"ol"},"Enable automated backups: ",(0,i.kt)("strong",{parentName:"li"},"Unchecked")),(0,i.kt)("li",{parentName:"ol"},"Enable encryption: ",(0,i.kt)("strong",{parentName:"li"},"Unchecked"))),(0,i.kt)("p",null,"Once the database has finished creating, click on the ",(0,i.kt)("em",{parentName:"p"},"View connection details")," button by the green success message at the top of the page. This gives you your database password."),(0,i.kt)("p",null,"Store the following connection information about your RDS instance in a saved document. You'll need it later:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Endpoint")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Initial database name")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Master username")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Master password"))),(0,i.kt)("h2",{id:"task-3-wordpress-source-code-modification"},"Task 3: Wordpress Source Code Modification"),(0,i.kt)("h3",{id:"explanation"},"Explanation"),(0,i.kt)("p",null,"When you install Wordpress, you can simply upload the source code and the first time you load the webpage, you'll be asked for database connector information."),(0,i.kt)("p",null,"However, Elastic Beanstalk applications are meant to be disposable."),(0,i.kt)("p",null,"Normally, when you add that database connector info, it is saved in a file called ",(0,i.kt)("em",{parentName:"p"},"wp-config.php")," on the webserver VM. This is fine for a traditional setup. However, ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"in Elastic Beanstalk, changes made to static HTML or PHP are not saved if the Beanstalk application restarts")),", which it will do often. Whenever the application restarts, it will reload from the source zip file and the original, empty connector file. If you did this the traditional way, you'd have to constantly re-enter your DB connector info every time you started up your Learner Lab environment."),(0,i.kt)("p",null,"We ",(0,i.kt)("em",{parentName:"p"},"could")," add the DB connector info to ",(0,i.kt)("em",{parentName:"p"},"wp-config.php")," manually before we upload the source code, but there's a much better way."),(0,i.kt)("p",null,"We use ",(0,i.kt)("strong",{parentName:"p"},"environment variables")," to allow us to put all the info in the Elastic Beanstalk application wizard directly. That way, every time the application restarts and reloads from the source code zip, it'll then read our saved connector information from AWS itself. Read below for details and steps."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," All other information, like the Wordpress website name, users, theme settings, blog posts, etc., are saved in the actual database you created in RDS. This database does not get reset when the Elastic Beanstalk application restarts, so your actual blog data will remain intact."),(0,i.kt)("h3",{id:"download-and-unzip---local-computer"},"Download and Unzip - Local Computer"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On your local computer, download the current Wordpress source code from here: ",(0,i.kt)("a",{parentName:"li",href:"https://wordpress.org/latest.zip"},"https://wordpress.org/latest.zip")),(0,i.kt)("li",{parentName:"ol"},"Unzip the file. You should end up with a ",(0,i.kt)("em",{parentName:"li"},"wordpress")," directory. (Do not delete the original .zip file)")),(0,i.kt)("h3",{id:"modify-wordpress-configuration-file"},"Modify Wordpress Configuration File"),(0,i.kt)("h4",{id:"duplicate-and-open-configuration-file"},"Duplicate and Open Configuration File"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the local ",(0,i.kt)("em",{parentName:"li"},"wordpress")," folder, find a file called: ",(0,i.kt)("strong",{parentName:"li"},"wp-config-sample.php")),(0,i.kt)("li",{parentName:"ol"},"Duplicate this file, and call it: ",(0,i.kt)("strong",{parentName:"li"},"wp-config.php")),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"wp-config.php")," in a plain text editor. You can use the default (graphical) text editor in Linux Mint (Text Editor), or something fancier like Visual Studio Code.")),(0,i.kt)("h4",{id:"adding-database-connector-info-as-environment-variables"},"Adding Database Connector Info as Environment Variables"),(0,i.kt)("p",null,"In this file (wp-config.php), you will be adding database connector information as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"environment variables")),", not the actual connector information. (We'll add that information later.)"),(0,i.kt)("p",null,"Find the following lines and add the bolded values:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"define('DB_NAME', ",(0,i.kt)("strong",{parentName:"li"},"getenv('DB_NAME')"),");"),(0,i.kt)("li",{parentName:"ol"},"define('DB_USER', ",(0,i.kt)("strong",{parentName:"li"},"getenv('DB_USER')"),");"),(0,i.kt)("li",{parentName:"ol"},"define('DB_PASSWORD', ",(0,i.kt)("strong",{parentName:"li"},"getenv('DB_PASSWORD')"),");"),(0,i.kt)("li",{parentName:"ol"},"define('DB_HOST', ",(0,i.kt)("strong",{parentName:"li"},"getenv('DB_HOST')"),");")),(0,i.kt)("h4",{id:"adding-authentication-unique-keys-and-salts-as-environment-variables"},"Adding Authentication Unique Keys and Salts as Environment Variables"),(0,i.kt)("p",null,"In the same file (wp-config.php), you'll be adding the authentication keys and salts as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"environment variables")),"."),(0,i.kt)("p",null,"Find the following lines and add the bolded values:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"define('AUTH_KEY', ",(0,i.kt)("strong",{parentName:"li"},"getenv('AUTH_KEY')"),");"),(0,i.kt)("li",{parentName:"ol"},"define('SECURE_AUTH_KEY', ",(0,i.kt)("strong",{parentName:"li"},"getenv('SECURE_AUTH_KEY')"),");"),(0,i.kt)("li",{parentName:"ol"},"define('LOGGED_IN_KEY', ",(0,i.kt)("strong",{parentName:"li"},"getenv('LOGGED_IN_KEY')"),");"),(0,i.kt)("li",{parentName:"ol"},"define('NONCE_KEY', ",(0,i.kt)("strong",{parentName:"li"},"getenv('NONCE_KEY')"),");"),(0,i.kt)("li",{parentName:"ol"},"define('AUTH_SALT', ",(0,i.kt)("strong",{parentName:"li"},"getenv('AUTH_SALT')"),");"),(0,i.kt)("li",{parentName:"ol"},"define('SECURE_AUTH_SALT', ",(0,i.kt)("strong",{parentName:"li"},"getenv('SECURE_AUTH_SALT')"),");"),(0,i.kt)("li",{parentName:"ol"},"define('LOGGED_IN_SALT', ",(0,i.kt)("strong",{parentName:"li"},"getenv('LOGGED_IN_SALT')"),");"),(0,i.kt)("li",{parentName:"ol"},"define('NONCE_SALT', ",(0,i.kt)("strong",{parentName:"li"},"getenv('NONCE_SALT')"),");")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image: Adding database connector information to wp-config.php.",src:a(9129).Z,width:"1472",height:"1314"}),"\n",(0,i.kt)("em",{parentName:"p"},"Figure 1: Adding database connector information to wp-config.php.")),(0,i.kt)("h3",{id:"zip-as-new-file-and-rename---local-computer"},"Zip As New File and Rename - Local Computer"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find the ",(0,i.kt)("strong",{parentName:"li"},"wordpress")," folder on your local computer."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Zip the entire wordpress directory"),", not just the files inside. (Use the zip compression protocol. Don't use something else like .rar.)"),(0,i.kt)("li",{parentName:"ol"},"Rename your new zip file: ",(0,i.kt)("strong",{parentName:"li"},"wordpress-6.5.3-",(0,i.kt)("em",{parentName:"strong"},"modded"),".zip")," (Use whatever version the source zip file has.)")),(0,i.kt)("h2",{id:"task-4-elastic-beanstalk"},"Task 4: Elastic Beanstalk"),(0,i.kt)("p",null,'Create a new Elastic Beanstalk (search "elastic beanstalk" in services) application with the following settings:'),(0,i.kt)("h3",{id:"environment-tier"},"Environment Tier"),(0,i.kt)("p",null,"Select: ",(0,i.kt)("strong",{parentName:"p"},"Web server environment")),(0,i.kt)("h3",{id:"main-settings"},"Main settings"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Application name: ",(0,i.kt)("strong",{parentName:"li"},"wordpress")),(0,i.kt)("li",{parentName:"ol"},"Environment name: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress-env")),(0,i.kt)("li",{parentName:"ol"},"Platform: ",(0,i.kt)("strong",{parentName:"li"},"PHP")),(0,i.kt)("li",{parentName:"ol"},"Platform branch: ",(0,i.kt)("strong",{parentName:"li"},"PHP 8.2")," (or current latest)"),(0,i.kt)("li",{parentName:"ol"},"Application code: ",(0,i.kt)("strong",{parentName:"li"},"Upload your code")),(0,i.kt)("li",{parentName:"ol"},"Version label: ",(0,i.kt)("strong",{parentName:"li"},"wordpress-6.5.3")," (Use the version from your zip filename)"),(0,i.kt)("li",{parentName:"ol"},"Choose file: ",(0,i.kt)("strong",{parentName:"li"},"wordpress-6.5.3-",(0,i.kt)("em",{parentName:"strong"},"modded"),".zip")," (From your local computer)"),(0,i.kt)("li",{parentName:"ol"},"Presets: ",(0,i.kt)("strong",{parentName:"li"},"Single instance (free tier eligible)"))),(0,i.kt)("p",null,"Click next"),(0,i.kt)("h3",{id:"configure-service-access"},"Configure Service Access"),(0,i.kt)("p",null,"Select: Use an existing service role"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Service role: ",(0,i.kt)("strong",{parentName:"li"},"LabRole")),(0,i.kt)("li",{parentName:"ol"},"EC2 key pair: ",(0,i.kt)("strong",{parentName:"li"},"vockey")),(0,i.kt)("li",{parentName:"ol"},"IAM instance profile: ",(0,i.kt)("strong",{parentName:"li"},"LabInstanceProfile"))),(0,i.kt)("p",null,"Click next"),(0,i.kt)("h3",{id:"network"},"Network"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"VPC: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress VPC")),(0,i.kt)("li",{parentName:"ol"},"Public IP address: ",(0,i.kt)("strong",{parentName:"li"},"Checked")),(0,i.kt)("li",{parentName:"ol"},"Instance subnets: ",(0,i.kt)("strong",{parentName:"li"},"Public Subnet 1, Public Subnet 2")," (both checked)"),(0,i.kt)("li",{parentName:"ol"},"Database subnets: ",(0,i.kt)("strong",{parentName:"li"},"Private Subnet 1, Private Subnet 2")," (both checked)")),(0,i.kt)("p",null,"Click next"),(0,i.kt)("h3",{id:"database-settings"},"Database settings"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Username: admin"),(0,i.kt)("li",{parentName:"ol"},"Password: ",(0,i.kt)("em",{parentName:"li"},"The password you copied and wrote down earlier"))),(0,i.kt)("p",null,"Click next"),(0,i.kt)("h3",{id:"instances"},"Instances"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"EC2 Security Groups: ",(0,i.kt)("strong",{parentName:"li"},"Wordpress Website SG")," & ",(0,i.kt)("strong",{parentName:"li"},"Wordpress Database SG")," (both checked)"),(0,i.kt)("li",{parentName:"ol"},"Leave the rest default")),(0,i.kt)("p",null,"Click next"),(0,i.kt)("h3",{id:"configure-updates-monitoring-and-logging"},"Configure updates, monitoring and logging"),(0,i.kt)("h4",{id:"monitoring"},"Monitoring"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"System: ",(0,i.kt)("strong",{parentName:"li"},"Basic")),(0,i.kt)("li",{parentName:"ol"},"Managed updates: ",(0,i.kt)("strong",{parentName:"li"},"Unchecked")),(0,i.kt)("li",{parentName:"ol"},"Email notification: ",(0,i.kt)("strong",{parentName:"li"},"Add your Seneca email"),"\nClick next")),(0,i.kt)("h4",{id:"platform-software"},"Platform Software"),(0,i.kt)("p",null,"Before beginning this section, you will need two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your database connector information (you saved this, right?)"),(0,i.kt)("li",{parentName:"ol"},"Randomly generated auth keys and salts from here: ",(0,i.kt)("a",{parentName:"li",href:"https://api.wordpress.org/secret-key/1.1/salt/"},"https://api.wordpress.org/secret-key/1.1/salt/")," (it's a good idea to save these in a text file, too)")),(0,i.kt)("h4",{id:"container-options"},"Container Options"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Proxy server: ",(0,i.kt)("strong",{parentName:"li"},"Apache")),(0,i.kt)("li",{parentName:"ol"},"Document root: ",(0,i.kt)("strong",{parentName:"li"},"/wordpress")),(0,i.kt)("li",{parentName:"ol"},"Environment properties",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"DB_HOST: ","*","*","_","your RDS database URL","*","*","*"),(0,i.kt)("li",{parentName:"ol"},"DB_NAME: ","*","*","_","initial database name","*","*","*"),(0,i.kt)("li",{parentName:"ol"},"DB_USER: ",(0,i.kt)("strong",{parentName:"li"},"admin")),(0,i.kt)("li",{parentName:"ol"},"DB_PASSWORD: ","*","*","_","your auto-generated database password","*","*","*"),(0,i.kt)("li",{parentName:"ol"},"AUTH_KEY: ",(0,i.kt)("strong",{parentName:"li"},"(use gathered info from salt page)")),(0,i.kt)("li",{parentName:"ol"},"SECURE_AUTH_KEY: ",(0,i.kt)("strong",{parentName:"li"},"(use gathered info from salt page)")),(0,i.kt)("li",{parentName:"ol"},"LOGGED_IN_KEY: ",(0,i.kt)("strong",{parentName:"li"},"(use gathered info from salt page)")),(0,i.kt)("li",{parentName:"ol"},"NONCE_KEY: ",(0,i.kt)("strong",{parentName:"li"},"(use gathered info from salt page)")),(0,i.kt)("li",{parentName:"ol"},"AUTH_SALT: ",(0,i.kt)("strong",{parentName:"li"},"(use gathered info from salt page)")),(0,i.kt)("li",{parentName:"ol"},"SECURE_AUTH_SALT: ",(0,i.kt)("strong",{parentName:"li"},"(use gathered info from salt page)")),(0,i.kt)("li",{parentName:"ol"},"LOGGED_IN_SALT: ",(0,i.kt)("strong",{parentName:"li"},"(use gathered info from salt page)")),(0,i.kt)("li",{parentName:"ol"},"NONCE_SALT: ",(0,i.kt)("strong",{parentName:"li"},"(use gathered info from salt page)"))))),(0,i.kt)("p",null,"Hint: None of these values should have single quotes in them. (i.e. ')"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image: Adding database connector information, auth keys and salts to your Elastic Beanstalk application as static Environment Variables.",src:a(7048).Z,width:"2240",height:"1574"}),"\n",(0,i.kt)("em",{parentName:"p"},"Figure 2: Adding database connector information, auth keys and salts to your Elastic Beanstalk application as static ",(0,i.kt)("strong",{parentName:"em"},"Environment Variables"),".")),(0,i.kt)("p",null,"Click next."),(0,i.kt)("h4",{id:"review-options"},"Review options"),(0,i.kt)("p",null,"Scroll down and click Launch."),(0,i.kt)("h3",{id:"create-the-application"},"Create the application."),(0,i.kt)("p",null,"While you wait for the creation to complete, check your e-mail to confirm your notification subscription."),(0,i.kt)("h2",{id:"task-5-site-configuration"},"Task 5: Site Configuration"),(0,i.kt)("p",null,"Open the URL presented in the Wordpress EBS instance and begin the site setup."),(0,i.kt)("h3",{id:"site-information"},"Site Information"),(0,i.kt)("p",null,"Set the following site information:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Site Title: ",(0,i.kt)("strong",{parentName:"li"},"OPS345 - A2 your name")),(0,i.kt)("li",{parentName:"ol"},"Username: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"yourSenecaUsername"))),(0,i.kt)("li",{parentName:"ol"},"Password: ",(0,i.kt)("strong",{parentName:"li"},"Choose a strong password")," (do not reuse the DB password!)"),(0,i.kt)("li",{parentName:"ol"},"Your Email: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"yourSenecaEmailAddress"))),(0,i.kt)("li",{parentName:"ol"},"Search engine visibility: ",(0,i.kt)("strong",{parentName:"li"},"Unchecked"))),(0,i.kt)("h2",{id:"task-6-blog-posts"},"Task 6: Blog Posts"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Delete the first template post.")," In your own words, answer the following questions in individual blog posts:"),(0,i.kt)("h3",{id:"blog-post-1"},"Blog Post: 1"),(0,i.kt)("p",null,"How did you find this assignment? What was the most difficult part of this assignment for you? What was the easiest part for you?"),(0,i.kt)("h3",{id:"blog-post-2"},"Blog Post: 2"),(0,i.kt)("p",null,"In the context of this assignment, briefly describe the function of the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"VPCs"),(0,i.kt)("li",{parentName:"ol"},"Subnets"),(0,i.kt)("li",{parentName:"ol"},"Security groups"),(0,i.kt)("li",{parentName:"ol"},"Route tables"),(0,i.kt)("li",{parentName:"ol"},"Internet gateways")),(0,i.kt)("h2",{id:"assignment-submission"},"Assignment Submission"),(0,i.kt)("p",null,"As with your previous assignment, your work will be evaluated by accessing your site directly."),(0,i.kt)("p",null,"To formally submit, you must include the following in a word document:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The URL of your new site. (The main public landing page, not the admin view.)")),(0,i.kt)("p",null,"Plus screenshots showing:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"4 new subnets (Public Subnet 1, Public Subnet 2, Private Subnet 1 & Private Subnet 2)"),(0,i.kt)("li",{parentName:"ol"},"Route Table"),(0,i.kt)("li",{parentName:"ol"},"Internet Gateway have been created."),(0,i.kt)("li",{parentName:"ol"},"A single full-browser screenshot showing your active and complete Wordpress blog."),(0,i.kt)("li",{parentName:"ol"},"Attach a single full-browser screenshot showing Blog Post 1."),(0,i.kt)("li",{parentName:"ol"},"Attach a single full-browser screenshot showing Blog Post 2.")),(0,i.kt)("p",null,"Once submitted, you can leave your Elastic Beanstalk application running, but ",(0,i.kt)("strong",{parentName:"p"},"shutdown your Learner Lab environment"),"."))}u.isMDXComponent=!0},7048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/a2_beanstalk-environment-variables-example-e2740d37c7ab387737870eba993d463a.png"},9129:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/a2_wp-config-example-a18dab092f2a26d1055cc1e476f6c901.png"}}]);