---
id: lab1
title: Lab 1 - Installing Ubuntu
sidebar_position: 1
description: Lab 1
---

# Lab 1: Installing Ubuntu

## Lab Preparation

### Purpose of Lab 1

In order to save money and resources when learning to install, to manage, and to connect Linux machines to form networks, we will be using a combination of a local install and **Virtual Machines** for this course. :

- **Lab 1**: Create a **Ubuntu Host** install (called **ubuhost**) on your Solid State External Drive (SSD) which will be bootable on your lab class computers.
- **Lab 2**: Install a **Virtualization program package** on your **Ubuntu host** called **KVM** which will be used to create 3 Virtual Machines (VMs) that you will use to learn about Linux system administration for the remainder of this course.

The virtualization software will allow you to create and administer **3 different virtual machines** (**VMs**) on your Debian host (debhost) computer system.
![labenv.png](/img/debian-lab1-network-diagram-updated.png)

It is ESSENTIAL to have a **Solid State Drive (SSD) with a minimum storage capacity of 240 GB** or **240 GB available on your own computer** for you to perform the lab work and provide storage for your Debian 12 host and VMs that you will create in Lab 2. **Due to space requirements, you are NOT permitted to share this SSD drive with any other course material than our OPS245 course.**

> **NOTE: It is feasible to use a notebook computer with sufficient hard disk capacity to perform these labs (as you would for an SSD drive)**. It would require that your notebook computer can connect to the Internet (including in Seneca's computer labs). You would be required to follow the same instructions for this lab (SSD). **If you are planning to do these labs on your own personal laptop, please see your professor before you start the installation process to ensure you have appropriate hardware.**

### Main Objectives

- Create a bootable USB drive of Ubuntu using Rufus.
- **Correctly install Ubuntu (ubuhost)** on your SSD and check that it boots correctly.
- Note common Linux commands and record them in your lab logbook.
- Use **scripts** to generate a post-install report for your Ubuntu host.
- **Disable Linux Kernel security enhancements** to allow for more experimentation.

### Minimum Required Materials

1. **Solid State Drive** Minimum Size: 240GB
2. **SATA-to-USB Connector** to connect your SSD to the Seneca Lab computer
3. **USB Flash drive** to install Ubuntu installation image
4. **Lab Logbook** [(Click Here to Download)](/files/OSL740-Logbook-Online.docx)

### Linux Command Reference

**Package Management**

- [apt](https://linux.die.net/man/8/apt)
- [dpkg](https://man7.org/linux/man-pages/man1/dpkg.1.html)

**System Information**

- [hostname](http://man7.org/linux/man-pages/man1/hostname.1.html)
- [uname](http://man7.org/linux/man-pages/man1/uname.1.html)
- [ps](http://man7.org/linux/man-pages/man1/ps.1.html)
- [lsblk](http://man7.org/linux/man-pages/man8/lsblk.8.html)

**Networking**

- [ip](https://man7.org/linux/man-pages/man8/ip.8.html)
- [nslookup](http://linux.math.tifr.res.in/manuals/man/nslookup.html)

**Miscellaneous**

| [grep](http://man7.org/linux/man-pages/man1/grep.1.html) | [wc](http://man7.org/linux/man-pages/man1/wc.1.html) | [pwd](http://man7.org/linux/man-pages/man1/pwd.1.html) | [ls](http://man7.org/linux/man-pages/man1/ls.1.html) | [more](http://man7.org/linux/man-pages/man1/more.1.html) | [file](http://man7.org/linux/man-pages/man1/file.1.html) | [wget](http://man7.org/linux/man-pages/man1/wget.1.html) | [chmod](http://man7.org/linux/man-pages/man1/chmod.1.html) | [vi](https://ss64.com/vi.html) |
| -------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------ |

**Matrix on-line tutorials**

- Linux Basics: **/home/ops235/linux-basics**
- Using the vi Text Editor: **/home/ops235/vi-tutorial**
- Shell Scripting - Part I (Scripting Basics): **/home/ops235/scripting-1**

In this lab, you will learn how to install **Ubuntu** to your SSD for use in the Seneca boot labs.
**Please note that at this time the Seneca boot labs are in C2030, C2034, and C2036. You will only be able to boot to your SSDs in these labs.**

**ubuhost system details:**

- **Name**: ubuhost
- **Boot media / Installation**: Bootable USB flash drive with Ubuntu image on it

  - [Download Ubuntu iso](https://ubuntu.com/download/desktop/thank-you?version=24.04.1&architecture=amd64&lts=true)

- **Disk space**: 240GB minimum

**The Ubuntu Web Site**

Open up [Ubuntu](https://ubuntu.com/) in your browser. To get the latest copy of the Ubuntu netinstaller ISO click on the "Download" button.
While you are on the site lets explore...

One of the most important skills you should graduate with is the ability to teach yourself something new. You will not always have the luxury of attending a training course to learn something new, so we must be prepared to learn independently. This often means reading official documentation. Official documentation is also one of the primary sources of information you should use when troubleshooting or configuring a system. Along with user forums and wiki's. Google searches can often produce results that are not specific to your Linux distribution or version, so they can produce inaccurate results.

Reading documentation, like any skill, requires practice. Reading `man` pages for example is often very confusing for new users as it hard to understand all of the terminology. However, the more time you spend reading the documentation the easier it will become.

Click on the **Support** link. Take a look at some of the support options available. Find the links to the documentation and forums. Take a look around. Bookmark the page.

## Investigation 1: Create a bootable installation drive using Rufus and the latest Ubuntu image

**Note:** The steps in investigation 1 to create your install drive must be completed on your own personal computer and should be completed prior to class

- Download the Ubuntu image from the [Ubuntu](https://ubuntu.com/download/desktop/thank-you?version=24.04.1&architecture=amd64&lts=true)
- Download Rufus from the [Rufus Website](https://rufus.ie/en)
  > ![Rufus Download](/img/rufusdownload.jpg)
- You should now have both the Rufus executable and the Ubuntu image on your personal computer
  > ![Rufus and Debian](/img/rufusanddebian.jpg)
- Run Rufus and you will see the Rufus dialogue box appear.
- Select the Ubuntu image as your boot selection
  > ![Rufus Select Image](/img/rufusselectimage.jpg)
- Double check that your flash drive is selected for the "Device" field, your Debian image has been selected for the boot selection, and that all other settings are the same as the image below.
  > ![Rufus Ready](/img/rufusready1.jpg)
- Click "START" and Rufus will begin to create your installation image on your flash drive
- **Note: If Rufus asks you to select the mode that you wish to use to write the image, select "Write in ISO image mode".**
- Once the process has completed you will have your installation flash drive ready.

## Investigation 2: Install Your host Ubuntu system onto your external SSD (ubuhost)

**Note:** From this step onward, you will be completing these tasks on the Seneca Lab computer. It is highly recommended that you complete this in the first lab class of the semester.

1. Plug your installation USB flash drive and your SSD external hard drive into the Seneca lab computer
2. Turn on the Seneca lab computer. You will need to hit the F12 key as soon as you turn it on until you see the following screen:
   > ![Bootable devices](/img/bootmenu1.jpg)
3. **IT IS VERY IMPORTANT THAT YOU PERFORM THESE NEXT STEPS CAREFULLY!!** Notice that there are multiple boot options available to you. You should have 3 options at first. The Windows Boot Manager is built into the Seneca lab computer and is used for the built-in image that Seneca uses. **DO NOT TOUCH THE WINDOWS BOOT MANAGER**. The UEFI 2550Micron 512GB device is the built-in hard drive on the Seneca computers. We can tell it is the built-in hard drive because of the symbol to its left. Depending on the computer you are using, it's exact label may be different from what you see but the symbol will be the same. **DO NOT TOUCH THE INTERNAL HARD DRIVE**. Altering either of these may break the system and it is the student's responsibility to ensure that no damage comes to the Seneca computers. **YOU HAVE BEEN WARNED!**
4. The other device you will see is your installation USB flash drive. The image above shows it labeled as "UEFI Kingston DataTraveler" but yours will be something different. Select your USB installation drive.
5. Upon selecting your installation USB flash drive you will be asked for an admin password. Provide the password and press "OK". **Note** Your professor will give you the password on the first day of class.
6. If you created your installation USB flash drive correctly, the Seneca Lab computer will boot to it and eventually you will see the following screen:
   > ![advanced options](/img/boot.png)
7. Select **Try or Install Ubuntu**.

Once you have booted to the desktop, follow the steps in the Ubuntu installer.

1. Under **Choose your language**, select **English**, and click **Next**.
2. Customize any **Accessibility** options you wish, and click **Next**.
3. Under **Select your keyboard layout** select **English (US)**, and click **Next**.
4. Under **Connect to the internet** leave **Use wired connection** selected, and click **Next**.
5. Under **What do you want to do with Ubuntu?**, leave **Install Ubuntu** selected, and click **Next**.
6. Under **How would you like to install Ubuntu?**, select **Interactive installation**, and click **Next**.
7. Under **What apps would you like to install to start with?**, select **Default selection**, and click **Next**.
8. Under \*\*Install recommended proprietary software, check the boxes to:

- Install third-party software for graphics and Wi-Fi hardware
- Download and install support for additional media formats

9. Click **Next**.
10. Under **How do you want to install Ubuntu?** select

- Erase disk and install Ubuntu. Click on **Manual installation**

### Creating Partitions

Select **sda**

1. Select **New partition table**
2. Create a single **Ext4** volume mounted on **/**
3. Click on **Device for boot loader installation** and select your ssd ie **sda WD Blue SA510 2.5 1000GB (1.00 TB)**. Your partitions should match the following screenshot.
   > ![partitions](/img/partitions.png)

### Creating your account

- Create your account:

  - Your name: **enter your name**
  - Your computer's name: **ubuhost**
  - Your username: **Your Seneca username**
  - Create a secure password that you will remember

- Select your timezone: **Toronto**
- Click **Install** and be prepared to wait patiently for a while.
- When it is done, click **Restart now**.
- When prompted to remove the installation media, press **Enter**.

Login with your user.

- On the welcome screen, click **Next**
- Enable Ubuntu Pro: select **Skip for now** and click **Next**
- Help improve Ubuntu: select an option and click **Next**
- Click **Finish**

When it reboots, be prepared to bring up the boot menu again, just like you did in step 2. Now your boot menu should have 4 items:

> ![bootmenuafterinstall](/img/bootmenu2.jpg)

Because you installed Ubuntu to your external SSD, it now shows up as a bootable item on this boot menu.

**Note:** In the image above, the installation USB flash drive is labeled as "UEFI Kingston DataTraveler". The external SSD in the image above is labeled as "SABRENT". This is not the SSD itself, rather it is the label for the SATA-to-USB connector that you are using. If you are unsure of which one is your SSD, check your physical SATA-to-USB connector that connects your SSD to the Seneca lab computer. You will likely see its brand name somewhere on the connector. Look for that name in the boot list. Now you know which item is your external SSD.

Now, select your external SSD from the list of bootable drives. Put in the admin password when prompted and your new Debian install will load up.

When the system boots up you will be presented with a graphical login screen. Select your username enter your password

Then you will be presented with the "Welcome" application

- "Next" for English
- "Next" keyboard layout
- Turn off Location services and then "Next"
- "Skip" connecting your online accounts
- Click "Start Using Ubuntu"

You can now remove your bootable installation USB flash drive from the computer. If you only have one USB flash drive, you can reformat your flash drive for other uses later in this course. However, it is likely that some students will need to do a re-install of their host system at some point during the semester, so if you can it would be a good idea to keep this one as a bootable installer and use another flash drive for general storage. (Which will become important in Lab 2!)

## Investigation 3: Common Post-Installation Tasks

### Test your Internet connection

One of the first things you do on a new system is install software and update the system. Your first step to installing software should always be to test your Internet connectivity, as without a working connection you cannot resolve anything. To do this we can use the tool **ping**, which is commonly used to troubleshoot network connectivity issues.

Useful addresses to ping to verify network connectivity are the following:

- www.google.com

If that fails, you could try pinging:

- 8.8.8.8, or 8.8.4.4
- Your default gateway

  8.8.8.8 and 8.8.4.4 are two publicly available DNS servers Google provides for free use. You can use these to test external network connectivity. For example, if pinging **www.google.com** fails, but pinging **8.8.8.8** succeeds it is likely you have an issue with DNS resolution.

If pinging **8.8.8.8** also fails, the problem is likely on your local network. You could try pinging your default gateway to confirm whether it is reachable or not. Common issues are:

- Wrong default gateway configured
- Default gateway is down
- Unplugged or broken network cable

Since you are dealing with a virtual machine, unplugged or broken cables aren't an issue. The other two are still possible.

Ping www.google.ca. Proceed to the next step only if it is successful.

```bash
ping www.google.ca
```

Next, verify your IP address configuration.

```bash
ip a
```

Notice you have two NICs (Network Interface Cards).

- **lo** which is your **loopback**, and is assigned the IP address **127.0.0.1/8** by default
- **ens??** where ?? represents two digits: ie ens33. This is the NIC connected to the virtual network, which allows communication between your VM and the Internet through your Host PC.

Now, lets look at your routing table. Your routing table tells you what networks your VM knows about, as well as the default route. The default route is where packets are sent when they don't match any other entry in your routing table.

```bash
ip route
```

Viewing your IP address configuration and routing table can be useful tools for troubleshooting network connectivity issues. Ping and traceroute are useful tools for verifying a particular destination is reachable. Traceroute has the added benefit of showing you where the packets are failing.

### Updating the system & Installing software

Now that you have confirmed your Internet connection it's time to access elevated privileges to install software. In Linux you use the **sudo** command to execute any command with elevated (root) privileges), provided your user sudo access. Your user was given this access when you created it in the installation. It's time to use this new power wisely. Update the system using **apt**:

```bash
sudo apt -y update
```

Once that has completed, install the following packages with the command **sudo apt install** followed by the package names (separated by a space):

- chromium
- cinnamon
- tldr

```bash
sudo apt -y install chromium cinnamon tldr
```

### Configuring the Cinnamon desktop

Logout of your graphical system. At the login screen:

- Click on your **user**, but do not enter your password.
- Click on the **gear** icon in the lower right corner.
- Select **Cinnamon** from the list.
- **Login** as your user.
- From the **Menu** (bottom left hand corner):
  - Browse to **Internet**
  - Right click on **Chromium** and select **Add to panel**

### Changing Locked Screen-saver Power Settings

Your system automatically enables a screen-saver application which is a useful security tool to prevent unauthorized viewing of information on a terminal after a certain amount of inactivity. Turning-off the locked screen-saver for this course however is more useful.

To Disable the Locked Screen-saver, Perform the following steps:

- Click on the **menu** button in the bottom left corner.
- Navigate to **All applications**
- Select **Screensaver**
- Click the dropdown beside **Delay before starting screensaver** and select **Never**.

### Perform a system update

The primary source of software and programs that we can install in Linux is online **repositories**.

These repositories are online databases of different available software organized into **Packages**.

The repositories and packages are maintained by the distribution (in this case Ubuntu) and they are maintained separately for each release.

We should check for updated packages frequently (at the beginning of each lab) as they often contain security updates and bug fixes.

To interact with the repositories and manage our software packages, we will use the `apt` command.

`apt` is the command line package management tool used by Debian and many other distributions of Linux.

To check for and install updated packages we need to use 2 separate `apt` commands:

- `apt update` will update the local copy of the repository database
- `apt upgrade` will check the database for packages that need to be updated, download them and install them along with any required dependencies.
- To make changes to the software on the system requires root privileges, so we will need to add `sudo` to the beginning of the command.
  We can also run both commands on a single command line.
- Type `sudo apt update && sudo apt upgrade`

Using && as a separator between the 2 commands will cause the 2nd command to execute only if the first command is successful.

>

> ![caution](/img/caution.png)**If the update results in an updated Linux Kernel then you will want to restart the system**

### **Safe Shutdown and Restart, and safely removing the external SSD**

> ![caution](/img/caution.png)**It is ABSOLUTELY ESSENTIAL that you do NOT remove your SSD drive during your Ubuntu session.**
>
> You are required to correctly shutdown your Ubuntu host as you would with any operating system.
>
> **FAILURE TO DO THIS MAY DAMAGE YOUR HOST AND NOT ALLOW IT TO BOOT PROPERLY (YOU HAVE BEEN WARNED).**
>
> - Click on the power icon in the top right corner of the display and then click on the power icon again
> - Click on Restart or Shutdown

### What was installed?

- Type the command `man apt` or `tldr apt`
- Read the man page for the apt utility and figure out a command to list only the installed packages.
- How many packages were installed? (Hint: pipe the output to `wc -l`)

### **Customizing your desktop/shell**

- Explore the **Themes** available under Applications. You can enable **dark mode** here (under **settings**) if you wish.
- Read and edit your `~/.bashrc` file and add an alias called `update` that will run the command line `sudo apt update && sudo apt upgrade`
- Both `nano` and `vi` are installed by default. You could/should also install `vim`
  - Type `sudo apt install vim`

### **Turning off AppArmor**

### Maybe leave AppArmor? Need to explore effects

> ![caution](/img/caution.png)**Never disable AppArmor in the real world!!**
>
> It is highly discouraged and unsafe to disable AppArmor on a public-facing server.
> AppArmor is a Mandatory Access Control framework.
> When enabled, AppArmor confines programs according to a set of rules that specify what files a given program can access.
> This goes beyond the traditional protection of file system permissions and helps protect the system against both known and unknown vulnerabilities.
>
> Some of the tasks we will be doing may require additional and tedious steps to configure AppArmor to not prevent our changes.
> So for the purposes of this course we will disable AppArmor. It is quite safe to do so because we are operating in a VM so our host is not visible to the public Internet.

- Run the following commands to disable AppArmor:
  - `sudo systemctl stop apparmor`
  - `sudo systemctl disable apparmor`
- We will learn more about these commands later

## Investigation 4: Using Shell Commands to Generate System Information

It is very common for system administrators to keep records regarding their installed computer systems. For example, it is necessary to have a record of all the hardware information for each machine in order to help fix computer hardware problems, and to assist when purchasing additional consistent computer hardware.

Therefore, it makes sense to also have a record of the installed software and important system configurations as well. This can contain information regarding the Linux operating system, installed software, and network connectivity information.

**Perform the Following Steps:**

1. Refer to the table below for common system information utilities and explanations for each.
2. Run each of these commands, taking the time to _understand_ what each command's output means.
3. **Record the output** from these commands (except for the **ps -ef** output) in your lab logbook.

**Linux/Unix System Information Utilities**

| **Command(s)**                                                                        | **Purpose**                                                                                                                                                    |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uname -rv`, `hostname`, `ps -ef`                                                     | Basic Linux OS information such as **kernel** version, **host-name** of Linux server, and all **processes** that are running on the system after installation. |
| `ip address show`, `ip route show`, `nslookup` (at prompt, enter command: **server**) | Obtain network connectivity confirmation including: **IP ADDRESS, Netmask, routing** (default gateway), and the default **Domain Name Server**.                |
| `date +'%A %B %d, %Y (%I:%M %p)'`                                                     | Get the current date and time according to the system. (If the date or time do not match your timezone, fix this in system settings for ubuhost!)              |

3. Note that when you are done, you should have recorded the following information in your Lab Logbook:

   - Current Date (according to ubuhost)
   - Hostname (ie. ubuhost)
   - Kernel version
   - IPv4 address
   - Subnet mask
   - Broadcast address
   - Default gateway address
   - DNS address

4. Review what you just wrote in your Lab Logbook. You should be able to understand them because you just put that content there, but what would this look like if you look at it several months from now? Make sure it's clear to future-you!

**Answer Investigation 4 observations (all parts and questions) in your lab log book.**

## Investigation 5: Using BASH Scripting to Generate System Information Reports

You learned about creating and running Bash Shell Scripts in OSL645. Shell scripts help Linux users and system administrators to automate repetitive tasks to become more efficient and to help them save time. We can take what we have learned from the commands above and put them into a bash script to generate information reports for your newly-installed Linux host machine.

### Create a GitHub Classroom assignment here

1. Create a new directory called "bin" in your home directory (~/bin) and then create a new file in your **~/bin** directory called **myreport.bash**
2. Populate the beginning of the file with sh-bang line and block comment describing what this script does:

```bash
#!/usr/bin/bash
# Author: *** INSERT YOUR NAME ***
# Date:   *** CURRENT DATE ***

# Purpose: Creates system info report
# USAGE: ./myreport.bash
```

3. Add a line that will print out the heading **System Report**

```
echo "System Report"
```

4. Save your script and run it. Does it work?
5. You'll notice that the script is currently sending its output to your terminal (STDOUT). We can just use output redirection on the command line when you run the script to send the output to **~/bin/sysreport.txt**.
6. Open your script in a text editor (like vim) again, and add the following lines below the echo statement:

```
# Print a heading for the date command output
date=$(date +'%A %B %d, %Y (%I:%M %p)')
echo "Report Date:  $date"
```

7. Save your script and run it again. Observe the output?
8. Based on the previous investigation and output, add the extra commands for your script to also output (with appropriate headings):

   - The hostname of the machine.
   - The kernel version.
   - The IP address
   - The list of all installed packages.

9. Run your script to make sure it works. Note that the output does not need to match investigation 3 exactly, but it should be very close.
10. What other commands and information could we document? Perhaps a list of storage devices, partitions and mount points?

## Lab 1 Sign-Off

### Add check script here

It is extremely important that you complete Lab 1 correctly as this Debian install will be the platform on which the rest of the course will be completed.

When you have completed Lab 1, ask your instructor to come and check your installation. **This must be done in class.** They will ask you to complete a set of tasks/commands. If everything has been completed correctly, your instructor will mark your Lab 1 as complete.

## Practice For Quizzes, Tests, Midterm & Final Exam

1. List the major screens (steps) in the installation of Debian 12.
2. List the steps for updating the Debian software.
3. What is the **home** directory for the user "root"?
4. How do you determine the host name of your GNU/Linux workstation?
5. What command can display the NIC MAC address?
6. What command is used to get a list of running processes on your newly-installed system?
7. Write the Linux command to download the on-line file: http://linux.server.org/package.tar.gz
