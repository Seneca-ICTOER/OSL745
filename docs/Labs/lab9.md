---
id: lab9
title: Lab 9 - Amazon RDS Relational Database Service
sidebar_position: 9
description: Configure the RDS.
---

# Lab 9 - RDS
## Overview

This week's lab will cover the following:

- Creating a Relational Database Service (RDS) instance
- Connecting to your RDS

In this lab, you will create a database using the Relational Database Service. You will then test connecting to it from your **www** instance. You will use this database in **lab 10** to install and deploy Wordpress using Elastic Beanstalk.

## Creating a RDS instance
Start your session in the Learner Lab by clicking on the **Start Lab** button. Once the red dot has turned green, click on it to enter the Learner Lab and access the AWS Console interface. You are going to create a new RDS instance.

From the **Console Home** navigate to **Database** > **RDS**. See the following screenshot for reference.

![Relational Database](/img/rds.png)

Click **Create database** (part way down the screen). Use the following options.

1. Standard create
1. Engine type: **MariaDB**
1. Engine Version: **MariaDB 11.4.4** (or current latest version available)
1. Templates: **Free tier**
1. DB instance identifier: **wordpress-db**
1. Master username: **admin**
1. Credentials management: **Self Managed**
1. Auto generate a password: **Checked**
1. DB instance class: **db.t3.micro**
1. Allocated storage: **5 GiB**
1. Enable storage autoscaling: **Unchecked**
1. Virtual private cloud (VPC): **Wordpress VPC**
1. DB subnet group: **Create new DB Subnet Group** (if you're redoing your database creation, there will already be an entry here. Make sure you're using the _Wordpress VPC_ in the setting above!)
1. Public access: **No**
1. VPC security group: **Choose existing**
1. Existing VPC security groups:
   1. **Remove default VPC**
   1. **Add _Wordpress Database SG_** (look to see that it's there below the dropdown after you select it)
1. Availability Zone: **us-east-1a**
1. Monitoring > Enable Enhanced monitoring: **Unchecked**
1. Below the Monitoring section, Additional configuration > Initial database name: **wordpress** (Write the database name down! You will need this later.)
1. Enable automated backups: **Unchecked**
1. Enable encryption: **Unchecked**

Click **Create database**.

This will take a few minutes to create. Once the database has finished creating, click on the _View connection details_ button by the green success message at the top of the page. This gives you your database password.

Store the following connection information about your RDS instance in your lab logbook or a saved document. You'll need it later:

1. **Endpoint**
1. **Initial database name**
1. **Master username**
1. **Master password**

## Connecting to your database from www
Login to your **www** instance, and install the mariadb client.

```bash
sudo apt install mariadb-client-core
```

From your terminal, issue the following command to connect to your database. Be sure to substitute the credentials you wrote down earlier.

```bash
mysql -u admin -h **endpoint** -p
```

Enter your Master password when prompted. You should see the following screen indicating a successful connection.

![MariaDB connected](/img/mariadb-connect.png)

Issue the following command to display the databases.

```bash
show databases;
```

Disconnect from the database.

```bash
quit;
```

## Lab 9 Sign-Off (Show Instructor)

Show your professor the following:

- A successful connection to the database from your www instance.

## Exploration Questions

1. What is an RDS?
1. How is this lab similar to the database you created in **Assignment 1**?
