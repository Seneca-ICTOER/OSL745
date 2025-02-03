---
id: lab9
title: Lab 9 - Amazon RDS Relational Database Service
sidebar_position: 9
description: Configure the RDS.
---

# Lab 9 - RDS

## Task 2: Database

Create a new RDS instance with the following settings:

1. Engine type: **MySQL**
1. Engine Version: **MySQL 8.0.36** (or current latest version available)
1. Templates: **Free tier**
1. DB instance identifier: **wordpress-db**
1. Master username: **admin**
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

Once the database has finished creating, click on the _View connection details_ button by the green success message at the top of the page. This gives you your database password.

Store the following connection information about your RDS instance in a saved document. You'll need it later:

1. **Endpoint**
1. **Initial database name**
1. **Master username**
1. **Master password**
