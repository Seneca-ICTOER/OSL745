---
id: lab10
title: Lab 10 - Elastic Beanstalk
sidebar_position: 10
description: Hosting Wordpress using AWS Elastic Beanstalk
---

# Lab 10 - Elastic Beanstalk
## Overview

This week's lab will cover the following:

- Configuring Elastic Beanstalk
- Installing and configuring Wordpress

When you have installed Wordpress previously, you simply uploaded the source code and the first time you load the webpage, provided the database connector information. However, Elastic Beanstalk applications are meant to be disposable.

Normally, when you add that database connector info, it is saved in a file called _wp-config.php_ on the webserver VM. This is fine for a traditional setup. However, **_in Elastic Beanstalk, changes made to static HTML or PHP are not saved if the Beanstalk application restarts_**, which it will do often. Whenever the application restarts, it will reload from the source zip file and the original, empty connector file. If you did this the traditional way, you'd have to constantly re-enter your DB connector info every time you started up your Learner Lab environment.

We _could_ add the DB connector info to _wp-config.php_ manually before we upload the source code, but there's a much better way.

We use **environment variables** to allow us to put all the info in the Elastic Beanstalk application wizard directly. That way, every time the application restarts and reloads from the source code zip, it'll then read our saved connector information from AWS itself. Read below for details and steps.

**Note:** All other information, like the Wordpress website name, users, theme settings, blog posts, etc., are saved in the actual database you created in RDS. This database does not get reset when the Elastic Beanstalk application restarts, so your actual blog data will remain intact.

## Investigation 1: Wordpress Source Code Modification

### Download and Unzip - Local Computer

1. On your local computer, download the current Wordpress source code from here: https://wordpress.org/latest.zip
1. Unzip the file. You should end up with a _wordpress_ directory. (Do not delete the original .zip file)

### Modify Wordpress Configuration File

#### Duplicate and Open Configuration File

1. In the local _wordpress_ folder, find a file called: **wp-config-sample.php**
1. Duplicate this file, and call it: **wp-config.php**
1. Open **wp-config.php** in a text editor. You will want something that supports syntax highlighting., such as the default (graphical) text editor in Ubuntu, or something fancier like Visual Studio Code.

#### Adding Database Connector Info as Environment Variables

In this file (wp-config.php), you will be adding database connector information as **_environment variables_**, not the actual connector information. (We'll add that information later.)

Find the following lines and add the bolded values:

1. define('DB_NAME', **getenv('DB_NAME')**);
1. define('DB_USER', **getenv('DB_USER')**);
1. define('DB_PASSWORD', **getenv('DB_PASSWORD')**);
1. define('DB_HOST', **getenv('DB_HOST')**);

#### Adding Authentication Unique Keys and Salts as Environment Variables

In the same file (wp-config.php), you'll be adding the authentication keys and salts as **_environment variables_**.

Find the following lines and add the bolded values:

1. define('AUTH_KEY', **getenv('AUTH_KEY')**);
1. define('SECURE_AUTH_KEY', **getenv('SECURE_AUTH_KEY')**);
1. define('LOGGED_IN_KEY', **getenv('LOGGED_IN_KEY')**);
1. define('NONCE_KEY', **getenv('NONCE_KEY')**);
1. define('AUTH_SALT', **getenv('AUTH_SALT')**);
1. define('SECURE_AUTH_SALT', **getenv('SECURE_AUTH_SALT')**);
1. define('LOGGED_IN_SALT', **getenv('LOGGED_IN_SALT')**);
1. define('NONCE_SALT', **getenv('NONCE_SALT')**);

![Image: Adding database connector information to wp-config.php.](/img/a2_wp-config-example.png)
_Figure 1: Adding database connector information to wp-config.php._

**Save** the file.

### Zip As New File and Rename - Local Computer

1. Find the **wordpress** folder on your local computer.
1. _Zip the entire wordpress directory_, not just the files inside. (Use the zip compression protocol. Don't use something else like .rar.)
1. Rename your new zip file: **wordpress-6.7.2-_modded_.zip** (Use whatever version the source zip file has.)

## Investigation 2: Elastic Beanstalk

Navigate to **Compute** > **Elastic Beanstalk**. See the following screenshot for reference.

![Elastic Beanstalk](/img/elasticbeanstalk.png)

Click **Create application**, and use the following settings:

### Environment Tier

Select: **Web server environment**

### Main settings

1. Application name: **wordpress**
1. Environment name: **Wordpress-env**
1. Platform: **PHP**
1. Platform branch: **PHP 8.4** (or current latest)
1. Application code: **Upload your code**
1. Version label: **wordpress-6.7.2** (Use the version from your zip filename)
1. Local file: **wordpress-6.7.2-_modded_.zip** (From your local computer)
1. Presets: **Single instance (free tier eligible)**

Click next

### Configure Service Access

Select: Use an existing service role

1. Service role: **LabRole**
1. EC2 key pair: **vockey**
1. IAM instance profile: **LabInstanceProfile**

Click next

### Set up networking, database and tags

1. VPC: **Wordpress VPC**

#### Instance Settings

1. Public IP address: **Checked**
1. **Instance** subnets: **Public Subnet 1, Public Subnet 2** (both checked)

Click next

#### Database settings

1. **Database** subnets: **Private Subnet 1, Private Subnet 2** (both checked)

Click **Enable database**

1. Username: admin
1. Password: _The password you copied and wrote down earlier_

Click next

### Configure instance traffic and scaling

1. EC2 Security Groups: **Wordpress Website SG** & **Wordpress Database SG** (both checked)
1. Leave the rest default

Click next

### Configure updates, monitoring and logging

#### Monitoring

1. System: **Basic**

#### Managed platform updates
1. Managed updates: **Unchecked**

#### Email notifications
1. Email notification: **Add your Seneca email**

#### Platform Software

Before beginning this section, you will need two things:

1. Your database connector information (you saved this, right?)
1. Randomly generated auth keys and salts from here: https://api.wordpress.org/secret-key/1.1/salt/ (it's a good idea to save these in a text file, too)

#### Container Options

1. Proxy server: **Apache**
1. Document root: **/wordpress**
1. Click **Add environment property** and add the following **Environment properties**
   1. DB_HOST: **_your RDS database URL_**
   1. DB_NAME: **wordpress**
   1. DB_USER: **admin**
   1. DB_PASSWORD: **_your auto-generated database password_**
   1. AUTH_KEY: **(use gathered info from salt page)**
   1. SECURE_AUTH_KEY: **(use gathered info from salt page)**
   1. LOGGED_IN_KEY: **(use gathered info from salt page)**
   1. NONCE_KEY: **(use gathered info from salt page)**
   1. AUTH_SALT: **(use gathered info from salt page)**
   1. SECURE_AUTH_SALT: **(use gathered info from salt page)**
   1. LOGGED_IN_SALT: **(use gathered info from salt page)**
   1. NONCE_SALT: **(use gathered info from salt page)**

Hint: None of these values should have single quotes in them. (i.e. ')

![Image: Adding database connector information, auth keys and salts to your Elastic Beanstalk application as static Environment Variables.](/img/a2_beanstalk-environment-variables-example.png)
_Figure 2: Adding database connector information, auth keys and salts to your Elastic Beanstalk application as static **Environment Variables**._

Click next.

#### Review options

Review all settings and ensure they match the instructions above. Once you hit **Submit**, the application will take several minutes to create.

### Create the application.

click **Submit** when ready.

While you wait for the creation to complete, check your e-mail to confirm your notification subscription.

## Investigation 3: Accessing Wordpress

Open the URL presented in the Wordpress EBS instance. You should see your blog post from Lab 9! Why?

> If you get a message indicating a failure to connect, make sure you zipped the **wordpress** folder and it's contents only. You can rezip the file and click **Upload and deploy** if necessary.

### Blog Post:
Add a blog post detailing the following:

- How did you find this lab?
- What was the most difficult part for you?
- What was the easiest part for you?
- How did you find this course?

Leave your Elastic Beanstalk instance running, but shut down your learner lab. Try accessing your wordpress install. It should still be accessible.

## Lab 10 Sign-Off (Show Instructor)

Show your professor the following:

- Your blog post.

## Exploration Questions

1. What is Elastic Beanstalk
1. How is this lab similar to the wordpress install in **Lab 9** and **Assignment 1**? How is it different?
