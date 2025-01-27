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

In this lab, you will create all the networking required to host a web application. You will be creating the server, database and configuring the application in future labs.

### Virtual Private Cloud

Create a new VPC with the following settings:

1. **VPC only**
1. Name: **Wordpress VPC**
1. IPv4 CIDR: **10.0.0.0/16**
1. Leave all other settings on default

Once created, modify this VPC (_Edit VPC Settings_) with the following actions:

1. Enable DNS resolution: **Checked**
1. Enable DNS hostnames: **Checked**

### Subnets

Create two private IPv4 subnets in this VPC:

1. Private Subnet 1 – **10.0.1.0/24 – us-east-1a**
1. Private Subnet 2 – **10.0.2.0/24 – us-east-1b**

Create two public IPv4 subnets in this VPC:

1. Public Subnet 1 – **10.0.11.0/24 – us-east-1a**
1. Public Subnet 2 – **10.0.12.0/24 – us-east-1b**

Edit your public subnets (_Edit subnet settings_) with the following settings:

1. Enable auto-assign public IPv4 address: **Checked**
1. Enable resource name DNS A record on launch: **Checked**

### Internet Gateway

Create a new Internet Gateway with the following:

1. Name: **Wordpress Gateway**
1. Once created, attach it to your Wordpress VPC.

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
