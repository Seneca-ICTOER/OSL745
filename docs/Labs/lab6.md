---
id: lab6
title: Lab 6 - Amazon Web Services (AWS) Networking
sidebar_position: 6
description: Create a VPC & Security Group
---

# Lab 6 - Amazon Web Services (AWS) Networking

## Overview

This week's lab will cover the following:

- Creating a Virtual Private Cloud (VPC).
- Creating and Modifying Virtual Private Cloud (VPC) Security Groups.
- VPC components:
  - Gateway
    - NAT gateways
    - Internet Gateways
    - Egress-only internet gateways
    - Carrier gateways
  - Route table
  - Subnets

In this lab, you will create all the networking infrastructure required to host a web application. You will be creating the server, database and configuring the application in future labs.

### Virtual Private Cloud

Start your session in the Learner Lab by clicking on the **Start Lab** button. Once the red dot has turned green, click on it to enter the Learner Lab and access the AWS Console interface. You are going to create a new Virtual Private Cloud (VPC). Resources you created last week in Lab 5 will be inaccessible in this VPC. Navigate to VPC (which you may have added to your favourites last week). On the VPC dashboard, click **Create VPC**. See the following screenshot for reference.

![Create VPC](/img/createvpc.png)

Input the following settings:

1. Select **VPC only**
1. Name tag: **Wordpress VPC**
1. IPv4 CIDR: **10.0.0.0/16**
1. Leave all other settings on default

Confirm the settings match the following screenshot.
![VPC Settings](/img/vpcsettings.png)

Click **Create VPC** at the bottom right.

Once created, click the **Actions** drop down in the top right corer and select **Edit VPC**. Make sure the following boxes are **Checked**:

1. Enable DNS resolution: **Checked**
1. Enable DNS hostnames: **Checked**

Click **Save**

### Subnets

You are going to create 4 subnets in your VPC. Two private subnets, and two public subnets. One of each type (private and public) will be in a different availability zone. This will provide redundancy, ensuring better uptime for servers and applications you create in your VPC.

1. Click on **Subnets** (located on the left side under **Virtual private cloud**).
1. Click **Create subnet** (top right corner).
1. Select **Wordpress VPC** from the VPC ID dropdown.
1. Create a subnet with the following information:

- Subnet Name: **Private subnet 1**
- Availability Zone: **us-east-1a**
- IPv4 VPC CIDR block: **10.0.0/16**
- IPv4 subnet CIDR block: **10.0.1.0/24**
- Your screen should look as follows:
  ![Create Subnets](/img/createsubnet.png)

1. Click **Add new subnet** and repeat the process for the following **three** subnets:

Create one private IPv4 subnets in this VPC:

1. Private Subnet 2 – **10.0.2.0/24 – us-east-1b**

Create two public IPv4 subnets in this VPC:

1. Public Subnet 1 – **10.0.11.0/24 – us-east-1a**
1. Public Subnet 2 – **10.0.12.0/24 – us-east-1b**

Once you have confirmed your settings are correct, scroll down and click **Create Subnet** in the bottom right.

Check the box beside **Public Subnet 1**. Click on the **Actions** dropdown (top right) and select **Edit subnet settings**. See the following screenshot.
![Edit subnet settings](/img/editsubnet.png)

Make sure the following are **Checked**:

1. Enable auto-assign public IPv4 address: **Checked**
1. Enable resource name DNS A record on launch: **Checked**

1. Click **Save**.
1. Repeat the process for **Public Subnet 2**

### Internet Gateway

Your VPC requires a **Gateway** to access outside resources. There are four types of **gateways**

- Internet Gateway
- Egress-only Internet Gateway
- Carrier Gateway
- NAT Gateway

### Add descriptions for each of the gateway types.

You are going to create an **Internet Gateway**.

1. Click on **Internet Gateways** (located on the left side under **Virtual private cloud**).
1. Click **Create internet gateway** (located in the top left corner)

Create a new Internet Gateway with the following:

1. Name: **Wordpress Gateway**
1. Click **Create internet gateway**
1. Once created, click on the **Actions** dropdown and select **Attach to VPC**.
1. In the **Available VPCs** input field, select your **Wordpress VPC**.
1. Click **Attach internet gateway** to attach it to your Wordpress VPC.
1. Once completed, your **Wordpress Gateway** should display the following:
   ![Wordpress Gateway](/img/wordpressgateway.png)

### Route Tables

Find your default route table for your Wordpress VPC and add the name: **VPC-local Route Table**

Create a second route table:

1. Name: **Wordpress Website Route Table**
1. VPC: **Wordpress VPC**
1. Routes Entry 1:
   1. Destination: **10.0.0.0/16**
   1. Target: **local**
1. Routes Entry 2:
   1. Destination: **0.0.0.0/0**
   1. Target: **Internet Gateway – Wordpress Gateway**

### Security Groups

Create a security group with the following settings:

1. Name: **Wordpress Website SG**
1. Description: **Allows HTTP traffic inbound**
1. VPC: **Wordpress VPC**
1. Inbound Rule:
   1. Type: **HTTP**
   1. Source: **Anywhere – IPv4 (0.0.0.0/0)**

Create a security group with the following settings:

1. Name: **Wordpress Database SG**
1. Description: **Allows MySQL traffic locally**
1. VPC: **Wordpress VPC**
1. Inbound Rule:
   1. Type: **MYSQL/Aurora**
   1. Source: **Custom** (Select _Wordpress Website SG_ in the search field)

Edit both public subnets’ route table associations to: **Wordpress Website Route Table**

### Screenshots for submission

Take screenshots showing your 4 new subnets (Public Subnet 1, Public Subnet 2, Private Subnet 1 & Private Subnet 2), Route Table and Internet Gateway have been created.
