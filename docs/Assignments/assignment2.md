---
id: assignment2
title: Assignment 2
sidebar_position: 2
description: OSL745 Assignment 2
---

# Assignment 2: Elastic Load Balancing and Auto Scaling

## Objectives of Assignment 2

In this assignment, you will create a highly available environment for your Wordpress application using Elastic Load Balancing and Auto Scaling. This will build on the Wordpress deployment from Lab 9.

## Investigation 1: Creating a Launch Template

Open EC2 and navigate to **Launch Templates** under **Instances**.

![Image: Creating a Launch Template.](/img/a2_launch_template.png)

1. Click **Create launch template**.

### Launch template name and description
1. Under **Launch template name and description**, configure:
  - Launch template name: **www-template**
  - Template version description: **Wordpress WWW instance**
2. Under **Auto Scaling guidance** check the box to **Provide guidance to help me set up a template that I can use with EC2 Auto Scaling**

### Launch template contents
1. For **Application and OS Images (Amazon Machine Image)** select **Currently in use**

### Instance type
1. Under **Instance type** select **t2.micro Free tier eligible**.

### Key pair (login)
1. Under **Key pair (login)** select your **osl745** key pair from the dropdown.

### Network Settings
1. **Firewall (security groups)** select **Select existing security group**.
1. Select **Wordpress Website SG** from the dropdown.
1. Under Advanced network configuration, set **Auto-assign public IP** to **Enable**

Click **Create launch template**. Leave the confirmation screen open for investigation 2.

## Investigation 2: Configuring Elastic Load Balancing and Auto Scaling
In this investigation you are going to configure **Elastic Load Balancing** and **Auto Scaling** for your **www** instance. These services allow you to take an application you have built and turn it into a high capacity available application: meaning users will not see any degradation in performance regardless of how many users are connected. In the case of your **Wordpress** site, you will not have a high number of users trying to access it at any given time. However, the concepts of auto scaling and load balancing are part of what has lead to the popularity of the cloud. Load balancing can also be done (on premises) using things like a **hardware load balancer** or by installing and configuring a service such as **HA Proxy** (on a unique server).

Amazon EC2 Auto Scaling helps you maintain application availability and allows you to scale your Amazon EC2 capacity up or down automatically according to conditions you define. You can use Auto Scaling to help ensure that you are running your desired number of Amazon EC2 instances during demand spikes to maintain performance and decrease capacity during lulls to reduce costs.

AWS auto scaling requires some configuration options, such as:

- **Metric**: Metric used for your Auto Scaling trigger.
- **Statistic**: Statistic calculation the trigger should use, such as Average.
- **Unit**: Unit for the trigger metric, such as Bytes.
- **Period**: Specifies how frequently Amazon CloudWatch measures the metrics for your trigger.
- **Breach duration**: Amount of time, in minutes, a metric can be outside of the upper and lower thresholds before triggering a scaling operation.
- **Upper threshold**: If the metric exceeds this number for the breach duration, a scaling operation is triggered.
- **Scale up increment**: The number of Amazon EC2 instances to add when performing a scaling activity.
- **Lower threshold**: If the metric falls below this number for the breach duration, a scaling operation is triggered.
- **Scale down increment**: The number of Amazon EC2 instances to remove when performing a scaling activity.

### Choosing a launch template
1. Click on **Create Auto Scaling group**.
1. For **Auto Scaling group name** enter **www-asg**
1. Make sure **www-template** is selected under **Launch template**.
1. Scroll down and click **Next**

### Choosing instance launch options
1. Under **VPC** select **Wordpress VPC**
1. Under **Availability Zones and subnets** select: 
    - Public Subnet 1
    - Public Subnet 2

Click **Next**.

### Integrate with other services
1. Under **Load balancing** select **Attach to a new load balancer**.
1. Under **Attach to a new load balancer** select **Application Load Balancer**.
1. For **Load balancer name** accept the default.
1. For **Load balancer scheme** select **Internet facing**.
1. Under *Listeners and routing** enter Port **443**.
1. For **Default routing (forward to)** select **Create a target group**.
1. Under **New target group** accept the default.

Scroll down and click **Next**.

### Configure group size and scaling
1. Under **Group size** set **Desired capacity** to **2**.
1. Under **Scaling limits** select
    - Min desired capacity: **1**
    - Max desired capacity: **4**
1. Under **Automatic scaling**
    - Select **No scaling policies**

Scroll down and click **Next**.


## Add notifications
Accept the defaults and click **Next**.

## Add tags
Accept the defaults and click **Next**.

## Review
Scroll through and confirm everything matches the instructions. If everything looks correct, click **Create Auto Scaling group**.

## Submission
Submit a screenshot of the two instances created via Auto Scaling in EC2.
