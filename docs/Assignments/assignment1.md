---
id: assignment1
title: Assignment 1
sidebar_position: 1
description: OSL745 Assignment 1
---

# Assignment 1

## Overview

In Assignment 1 you will install configure a LAMP stack, which is an acronym that originally stood for Linux, Apache, MySQL and PHP. LAMP is a commonly used acronym and combination of technologies for hosting web based applications. In fact, newer technologies that have come along to replace elements of the LAMP stack tend to pick their name based on the letter in the acronym that they are providing services for (ie MariaDB or MongoDB, Perl or Python). You will then use this platform to install and host Wordpress (a popular free and open source content management system or CMS). You will also configure your firewall to further enhance the security of your network.

This assignment will be completed inside your **ubu2** VM.

## Important information

**Weight**: 20% of your overall grade

**Due Date**: Refer to your section's Blackboard announcements.

**Submission**: You will be submitting your completed work through a series of screenshots on Blackboard. (See below.)

**NOTE:** Do this assignment inside the **ubu2** virtual machine.

**NOTE:** It is YOUR responsibility to backup your **ubu2** VM for this assignment! You are required to frequently backup your VM prior to exiting a work session during this assignment. Your professor will NOT accept the fact that your hard disk crashed and lost all of your work. If you properly backed up your VM images and xml configuration files to a USB, then you can purchase a new hard-disk or wipe and recreate your hard disk and restore your VMs.

## Updating and Installing Packages

Before proceeding make sure you have updated your system using apt.

### Install the following packages using apt

- **apache2**: this is the Apache web server software.
- **php**: this is the PHP server software, which allows Apache to run more complex websites.
- **php-mysql**: this is a PHP extension that allows PHP to use a MySQL server.
- **mariadb-server**: this is the database software.
- **wordpress**: a popular LAMP application used to build websites.

### Configuring Your Firewall (nftables)

- Configure your firewall a rule allowing incoming http traffic.

  - **HINT**: to figure out which port is required issue the command **grep http /etc/services**. You may need to pipe the output to head to see the top of the list. The required port is the first one listed.

  - Save your firewall configuration

### Configuring Apache

- Confirm the apache2 service is running using **systemctl**, and that it is set to start automatically on boot. Use the appropriate **systemctl** commands if either of these is not configured.
- Confirm that you can connect to your web server using a web browser. **Note:** If you can't connect to it from outside the machine - perhaps your firewall is blocking access to the web server.

  - from the host (open your browser and type **http://ubu2**). You should see the Apache Test Page.

### Configuring MariaDB

- Confirm the mariadb service is running using **systemctl**, and that it is set to start automatically on boot. Use the appropriate **systemctl** commands if either of these is not configured.

- Run the mysql secure installation script by issuing the command **sudo mysql_secure_installation** and follow the prompts onscreen to:

  - Set the root password to your Seneca username
  - Remove anonymous users
  - Disallow root login remotely
  - Remove the test database and access to it
  - Reload the privilege tables

- This following part is challenging so take your time and read the instructions to make sure you do it properly, we have to set up a dedicated user and database for wordpress:

- You will need to run the following commands in a terminal on your Ubuntu VM.

  - Your adminusername is root
  - Your databasename is myblog
  - Your wordpressusername is your Seneca username
  - The password should also be your Seneca username
  - Your hostname is localhost

- Connect to the database using the following command. Type the password when prompted:

```bash
mysql –h localhost –u root –p
```

- Create the database:

```bash
CREATE DATABASE myblog;
```

- Create the new user (change wordpressusername and password to your Seneca username):

```bash
CREATE USER wordpressusername@localhost IDENTIFIED BY 'password';
```

- Grant your new user privileges to that database (change wordpressusername and password to your Seneca username):

```bash
GRANT ALL PRIVILEGES ON myblog.* TO wordpressusername@localhost IDENTIFIED BY 'password';
```

- Reload the privilege tables:

```bash
FLUSH PRIVILEGES;
```

## Configuring Wordpress

Create a virtual host file in **/etc/apache2/sites-available/wordpress.conf** with the following contents:

```bash
Alias /blog /usr/share/wordpress
<Directory /usr/share/wordpress>
    Options FollowSymLinks
    AllowOverride Limit Options FileInfo
    DirectoryIndex index.php
    Order allow,deny
    Allow from all
</Directory>
<Directory /usr/share/wordpress/wp-content>
    Options FollowSymLinks
    Order allow,deny
    Allow from all
</Directory>
```

Enable the new WordPress site

```bash
sudo a2ensite wordpress
```

- Use systemctl to restart the apache service.

Edit the file **/etc/wordpress/config-ubu2.php** where username is your Seneca username. Add the following contents (changing username to your Seneca username where appropriate).

```php
<?php
define('DB_NAME', 'myblog');
define('DB_USER', 'username');
define('DB_PASSWORD', 'username');
define('DB_HOST', 'localhost');
define('WP_CONTENT_DIR', '/usr/share/wordpress/wp-content');
?>
```

- Open a web browser (ie Firefox) on your host and enter the following url: http://ubu2/blog/wp-admin/install.php
- You should see a Wordpress Welcome/Setup page. Follow the prompts on screen and enter the appropriate information.
  - Use the **Database Name**, **Username** and **Password** you configured above in mariadb.
  - Set the title to Your Name's Blog. For example for me it would be "Jason Carman's Blog"
  - Set the username to your Seneca ID.
  - Set the password to your Seneca ID. You may need to check the box to **Confirm use of weak password**
  - Set the email to your Seneca email address.
  - Click "Install Wordpress", you should see a "Success!" message.

## Write-up

Write a blog post on your new blog explaining:

- What is Apache, PHP, MySQL, and Wordpress.
- What problems (minor and major) you ran into during the installation and how you solved
  them.

Make your posts look professional. That means use good english, headings, bullet or numbered lists, etc.

- from the host (open your browser and type **http://ubu2/blog**). You should see your blog's home page and blog posts.

## Submission

On your **Ubuntu** vm issue the following command to download the check script. You may need to install git using apt.

```bash
git clone https://github.com/OSL745/a1-check
```

Give the **marka1.bash** script execute permission and run it.

Upload the following to the Assignment 2 folder on blackboard:

- Output from the Assignment 2 check script (a2output.txt)
- A screenshot showing your blog post on wordpress

## Rubric

| Task                                          | Mark   |
| :-------------------------------------------- | :----- |
| nftables installed and configured correctly   | 4      |
| Apache configured and running                 | 4      |
| MariaDB configured and running                | 4      |
| Wordpress configured correctly                | 3      |
| Wordpress showing in Firefox                  | 1      |
| Blog post                                     | 2      |
| Submitted correctly                           | 2      |
| **Total**                                     | **20** |
