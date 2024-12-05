---
id: lab8
title: Lab 8 - DNS & SSL
sidebar_position: 8
description: Configure DNS using MyCustomDomain & SSL with Let's Encrypt.
---

# Lab 8 - DNS & SSL

## Overview

This week's lab will cover the following:

- Using a service to register a domain name
- Generating TLS/SSL certificates with Let's Encrypt & Certbot

## Registering a domain name

You should have received an email indicating you have access to [My.Custom.Domain](https://mycustomdomain.senecacollege.ca/). You will be using this to create an A record and map it to the elastic IP of your instance from Lab 3. If you do not have access please **contact your professor** so you can proceed.

### Creating an A record

Login to [My.Custom.Domain](https://mycustomdomain.senecacollege.ca/). You should see a screen similar to the one below.

![My.Custom.Domain login](/img/my-custom-domain-login.png)

Click **Create DNS Records**.

On the following screen, click **Create your first DNS Record!**, and fill in the following information (see the following screenshot for an example)

- **Name:** wordpress
- **Type:** A Record (IPv4 Address)
- **Value:** _your elastic IP_
- **Course:** OPS345
- **Description:** Address record for wordpress instance, lab 4.

Click **Create**.

![Creating an address record](/img/dns-a-record.png)

### Testing Your DNS configuration

1. Launch the AWS Learner Lab and login. Make sure your www instance is running.
2. Type **www.example.com** (replace this with your domain name) in the URL bar of a web browser. This could be on your PC, or any device. You should see your website from Lab 3! If you don't, double check and make sure you see **http://** and not **https://**.

Next, login to your first instance and issue the following commands. Note the output of each. Substitute your domain name for www.example.com.

```bash
nslookup www.example.com
```

and

```bash
dig www.example.com
```

Make sure you see the correct output from the previous commands indicating your DNS is working before proceeding to the next step.

## Preparing your system to generate and install an SSL certificate

Login to your **www** instance. You are going to install Certbot, which will automate configuring HTTPS using Let's Encrypt.

### Installing Certbot

First, check to see if it is available by issuing the following command.

```bash
sudo apt search certbot
```

You should see the following output.

![Confirming certbot is available to install with apt](/img/apt-search-certbot.png)

Once you have confirmed it is available, install it.

```bash
sudo apt -y install certbot python3-certbot-apache
```

### Configuring an Apache Virtual Host

Create the and edit a file for your virtual host configuration. You can use either vi or nano. Replace wwwexamplecom with your domain name, with the www and top level domain, but without the .. This will allow Certbot to find the correct VirtualHost block and update it.

```bash
sudo vi /etc/apache2/sites-available/wwwexamplecom.conf
```

Enter the following text (again, replacing the domain name with yours).

```bash
ServerName www.example.com
```

### Testing and Reloading the Apache configuration

Enter the following command to test your Apache configuration.

```bash
sudo apache2ctl configtest
```

You should see a message indicating Syntax OK. If you don't, double check your file name and contents for errors. Sample output follows.

![apachectl configtest indicating syntax is ok](/img/apache2-configtest.png)

Now you can reload apache2 using systemctl.

```bash
sudo systemctl reload apache2
```

## Generating an SSL certificate using Let's Encrypt and Certbot

Now you are ready to generate your SSL certificate using Certbot. You are going to configure Apache to reconfigure and reload the configuration whenever necessary. This way you do not need to worry about updating your SSL certificate every 90 days, which is when certificates issued through Let's Encrypt and Certbot expire. Issue the following command:

```bash
sudo certbot --apache
```

At the email address prompt, enter your Seneca College issued email.
![Running certbot](/img/sudocertbotapache.png)

Accept the terms of service. Answer as you wish for sharing your email, then enter your domain name. See the following example.
![Generating your certificate](/img/certbotregister.png)

Update your security group rules to allow incoming HTTPS traffic from the anywhere IP: 0.0.0.0/0

## Testing your configuration

Open a web browser try to access your lab website using HTTPS. It should work!

## Completing the lab

Take a screenshot of accessing your Apache server through a web browser using https. Submit them to the the folder on blackboard for proof of completion OR show your professor. The following Exploration Questions are for furthering your knowledge only, and may appear on quizzes or tests at any time later in this course.

## Exploration Questions
