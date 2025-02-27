---
id: assignment2
title: Assignment 2
sidebar_position: 2
description: OSL745 Assignment 2
---

# Assignment 2: Elastic Load Balancing and Auto Scaling

## Objectives of Assignment 2

In this assignment, you will configure Elastic Load Balancing and Auto Scaling using the Wordpress deployment _Elastic Beanstalk_ from Lab 10. This will transform that application into a high availability service.

## Investigation 5: Configuring Auto Scaling and Elastic Load Balancing

### Under development

In this investigation you are going to configure **Auto Scaling** and **Elastic Load Balancing** for your **Elastic Beanstalk** instance. These services allow you to take an application you have built and turn it into a high capacity available application: meaning users will not see any degradation in performance regardless of how many users are connected. In the case of your **Wordpress** site, you will not have a high number of users trying to access it at any given time. However, the concepts of auto scaling and load balancing are part of what has lead to the popularity of the cloud. Load balancing can also be done (on premises) using things like a **hardware load balancer** or by installing and configuring a service such as **HA Proxy** (on a unique server).

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

Navigate to [Elastic Beanstalk Console](https://console.aws.amazon.com/elasticbeanstalk) and click on your Environment (**Wordpress-env**).

1. In the navigation pane (left side), choose Configuration.
1. Scroll down to **Instance traffic and scaling***, and click **Edit**.
1. Under **Capacity** > **Auto Scaling Group** select **Load balanced** from the **Environment type** dropdown.
1. Under **Instances** set the following:
    - Min: **1**
    - Max: **2**
1. In the Scaling triggers section, configure the following settings:
    - Metric: **RequestCount**
    - Unit: **Count**
    - Period: **2 Min**
    - Breach duration: **1 Min**
    - Upper threshold: **5**
    - Scale up increment: **1**
    - Lower threshold: **1**
    - Scale down increment: **-1**
1. Under **Load balancer subnets**, make sure **ONLY** the following are checked:
    - **us-east-1a**
    - **us-east-1b**

To save the changes choose Apply at the bottom of the page. It will take a few minutes for **Elastic Beanstalk** to update the environment.
