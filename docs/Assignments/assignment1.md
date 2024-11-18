---
id: assignment1
title: Assignment 1
sidebar_position: 1
description: OSL745 Assignment 1
---

# Assignment 1

## Overview

In Assignment 1 you will install configure a LAMP stack, which is an acronym that originally stood for Linux, Apache, MySQL and PHP. LAMP is a commonly used acronym and combination of technologies for hosting web based applications. In fact, newer technologies that have come along to replace elements of the LAMP stack tend to pick their name based on the letter in the acronym that they are providing services for (ie MariaDB or MongoDB, Perl or Python). You will then use this platform to install and host Wordpress (a popular free and open source content management system or CMS). You will also configure your firewall to further enhance the security of your computer system.

This assignment will be completed inside a new Ubuntu VM.

## Important information

**Weight**: 15% of your overall grade

**Due Date**: Refer to your section's Blackboard announcements.

**Submission**: You will be submitting your completed work through a series of screenshots on Blackboard. (See below.)

**NOTE:** Do this assignment inside the **ubuntu** virtual machine and use your user (ie: **jason.carman** or **ataur.rahman**) you created in **Assignment 1**.

**NOTE:** It is YOUR responsibility to backup your **ubuntu** VM for this assignment! You are required to frequently backup your VM prior to exiting a work session during this assignment. Your instructor will NOT accept the fact that your hard disk crashed and lost all of your work. If you properly backed up your VM images and xml configuration files to a USB, then you can purchase a new hard-disk or wipe and recreate your hard disk and restore your VMs.

## Setting your Ubuntu VM to command line

Using the appropriate systemctl commands, set your Ubuntu vm to boot into CLI (multi-user.target) by default. Either reboot or use isolate to set it to CLI. Do the rest of the assignment using this interface.

## Setting a static IP & hostname

### Set a static IP on your Ubuntu VM:

- use Nano to edit /etc/netplan/99_config.yaml (remember to use sudo)
- substitute enp1s0 with the interface on your VM (confirm with ip a)
- add the following configuration to the file:

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp1s0:
      addresses:
        - 192.168.245.5/24
      routes:
        - to: default
          via: 192.168.245.1
      nameservers:
        addresses: [192.168.245.1]
```

Issue the following command to apply the changes. If you receive any error messages, check your configuration file.

```bash
sudo netplan apply
```

### Configuring local hostname resolution

Edit /etc/hosts (on your Ubuntu VM and debhost) to allow local hostname resolution for **username-ubuntu** to **192.168.245.5**

Test your network connectivity (both internally and to the internet) using ping before continuing.

## Updating and Installing Packages

Before proceeding make sure you have updated your system using apt.

### Install the following packages using apt

- **apache2**: this is the Apache web server software.
- **php**: this is the PHP server software, which allows Apache to run more complex websites.
- **php-mysql**: this is a PHP extension that allows PHP to use a MySQL server.
- **mariadb-server**: this is the database software.
- **wordpress**: a popular LAMP application used to build websites.
- **nftables**: a firewall designed as a replacement for iptables. It supports iptables syntax and translates them into nftables rules.

### Configuring Your Firewall (nftables)

- Use systemctl to:

  - stop ufw and prevent it from starting automatically on boot
  - start nftables and configure it to start automatically on boot

- Configure your firewall with the following rules:

  - Add a rule to allow incoming http traffic.

    - **HINT**: to figure out which port is required issue the command **grep http /etc/services**. You may need to pipe the output to head to see the top of the list. The required port is the first one listed.

  - Add a rule to allow incoming ssh traffic.

    - **HINT**: to figure out which port is required issue the command **grep ssh /etc/services**. You may need to pipe the output to head to see the top of the list.

  - Set the default policy to **drop**.

  - Add the following rules to allow apt through the firewall, so you can install software and update the system.

    - `sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT`
    - `sudo iptables -A INPUT -p udp --dport 53 -j ACCEPT`

  - Save your firewall configuration

### Configuring Apache

- Confirm the apache2 service is running using **systemctl**, and that it is set to start automatically on boot. Use the appropriate **systemctl** commands if either of these is not configured.
- Confirm that you can connect to your web server using a web browser. **Note:** If you can't connect to it from outside the machine - perhaps your firewall is blocking access to the web server.

  - from your Ubuntu VM (you can test using **lynx**)
  - from the host (you can test using Firefox with your Ubuntu VM’s IP address). You should see the Apache Test Page.

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

Edit the file **/etc/wordpress/config-username-ubuntu.php** where username is your Seneca username. Add the following contents (changing username to your Seneca username where appropriate).

```php
<?php
define('DB_NAME', 'myblog');
define('DB_USER', 'username');
define('DB_PASSWORD', 'username');
define('DB_HOST', 'localhost');
define('WP_CONTENT_DIR', '/usr/share/wordpress/wp-content');
?>
```

- Open a web browser (ie Firefox) on your host and enter the following url: http://username-ubuntu/blog/wp-admin/install.php
- You should see a Wordpress Welcome/Setup page. Follow the prompts on screen and enter the appropriate information.
  - Use the **Database Name**, **Username** and **Password** you configured above in mariadb.
  - Set the title to Your Name's Blog. For example for me it would be "OSL740 Professor's Blog"
  - Set the username to your Seneca ID.
  - Set the password to your Seneca ID. You may need to check the box to **Confirm use of weak password**
  - Set the email to your Seneca email address.
  - Click "Install Wordpress", you should see a "Success!" message.

## Write-up

Write a blog post on your new blog explaining:

- What is Apache, PHP, MySQL, and Wordpress.
- What problems (minor and major) you ran into during the installation and how you solved
  them.

Write a second post on your blog including for example:

- Are you ready for the exam or not?
- List the material you are strong on.
- List the material you are worried about.
- List any questions or topics you would like me to address during exam review.

Make your posts look professional. That means use good english, headings, bullet or numbered lists, etc.

## Submission

On your **Ubuntu** vm issue the following command to download the check script. You may need to install git using apt.

```bash
git clone https://github.com/jmcarman/a2-check
```

Give the **marka2.bash** script execute permission and run it.

Upload the following to the Assignment 2 folder on blackboard:

- Output from the Assignment 2 check script (a2output.txt)
- A screenshot showing your first blog post on wordpress
- A screenshot showing your second blog post on wordpress

## Rubric

| Task                                          | Mark   |
| :-------------------------------------------- | :----- |
| System set to boot in multi-user.target (CLI) | 1      |
| Static IP applied                             | 2      |
| nftables installed and configured correctly   | 2      |
| Apache configured and running                 | 3      |
| MariaDB configured and running                | 3      |
| Wordpress configured correctly                | 3      |
| Wordpress showing in Firefox                  | 1      |
| Blog accessed using local hostname resolution | 1      |
| First blog post                               | 1      |
| Second blog post                              | 1      |
| Submitted correctly                           | 2      |
| **Total**                                     | **20** |
