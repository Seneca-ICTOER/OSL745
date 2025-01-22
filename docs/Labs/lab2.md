---
id: lab2
title: Lab 2 - Creating and Using Virtual Machines
sidebar_position: 2
description: Lab 2
---

# Lab 2: Creating and Using Virtual Machines

## Lab Preparation

### Purpose / Objectives of Lab 2

In this lab, you will create 2 virtual machines using a virtualization program called **KVM** that will run in your ubuhost system. These VMs will be used throughout the remainder of this course to learn how to administer them (installing software, managing services, networking, etc).

While you are performing this lab, it is recommended to generally note the major differences in the different installation methods, and which method you prefer to use if you were a Linux system administrator in charge of installing many Linux distributions for an organization.

**Main Objectives**

- Installing additional Virtualization Software on your **ubuhost** machine (**KVM**)
- Create 2 separate VMs (virtual machines) using different installation methods:

  - **ubu1**: Ubuntu Server 24.04 (**CLI only**)
  - **ubu2**: Ubuntu Server 24.04 Unattended Installation deployed using a **autoinstall** file (**CLI only**)

- Manipulate virtual machines by CLI (**virsh**)
- Properly **backup VM images** and backup **VM configuration files**
- Create and run **Bash Shell scripts** to automatically backup our installed VM's
- Learn to boot your Ubuntu VM into **Single User mode** for rescue purposes

![Lab Environment](/img/ubuntu-lab1-network-diagram-updated.png)

At the end of Lab 2, your ubuhost system will contain **2 virtual machines** (**ubu1, ubu2 VMs** in your **KVM** application). You will now have the option to run one virtual machine at a time, or run all machines simultaneously to learn about networking (covered in later labs)

### Minimum Required Materials

1. **Solid State Drive**
2. **USB key** (for backups)
3. **Lab Log Book**
4. [Ubuntu Server ISO](https://ubuntu.com/download/server/thank-you?version=24.04.1&architecture=amd64&lts=true) (Download this before you begin)

### Linux Command Reference

**Virtualization:**

- [virt-manager](http://linux.die.net/man/1/virt-manager)
- [virsh](http://linux.die.net/man/1/virsh)

**Installation Guides:**

- [Installing & Using KVM on Ubuntu](https://ubuntu.com/blog/kvm-hyphervisor)
- [Using KVM (tutorial)](http://www.dedoimedo.com/computers/kvm-intro.html)
- [virsh command reference](https://libvirt.org/sources/virshcmdref/html-single/)

**Miscellaneous**

| [gzip , gunzip](http://linuxcommand.org/lc3_man_pages/gzip1.html) | [ip](http://man7.org/linux/man-pages/man8/ip.8.html) | [grep](http://man7.org/linux/man-pages/man1/grep.1.html) | [wc](http://man7.org/linux/man-pages/man1/wc.1.html) | [pwd](http://man7.org/linux/man-pages/man1/pwd.1.html) | [ls](http://man7.org/linux/man-pages/man1/ls.1.html) | [more](http://man7.org/linux/man-pages/man1/more.1.html) | [file](http://man7.org/linux/man-pages/man1/file.1.html) | [wget](http://man7.org/linux/man-pages/man1/wget.1.html) | [chmod](http://man7.org/linux/man-pages/man1/chmod.1.html) | [vi](http://ss64.com/vi.html) |
| ----------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------- |

## Investigation 1: Setup For Virtual Machines

### Install KVM Virtualisation Application

We will now install the KVM package in order to create our VMs. We will also be starting several services. We will learn more about managing firewalls in later labs.

**Perform the following steps:**

1. Log into your **ubuhost** machine.
2. perform a software update on your debhost by issuing the following command:

```bash
sudo apt update && sudo apt upgrade
```

3. Install the kvm virtualisation packages, and a package required for the backup script later in the lab:

```bash
sudo apt install virt-manager progress
```

**About KVM**

There are actually several key programs installed for virtualisation using KVM:

- **kvm/qemu** - the hypervisor and other hardware emulation systems.
- A system service named **libvirtd** that manages the VMs.
- A graphical tool for managing virtual machines (**virt-manager**) and the **virsh** command-line tool.

4. Now we will confirm the status of the "libvirtd" virtualisation service:

```bash
sudo systemctl status libvirtd
```

![libvirtdstatus](/img/libvirtdstatus.png)

In the screenshot above you can see the first "enabled" indicates that this service will start automatically when the system starts.
The "preset: enabled" indicates that "enabled" is the default when this service is first installed by apt.
The "inactive (dead)" indicates that the service is not currently running.

We want the service to be "enabled" and "active":

**Make note of the following commands for working with services:**

```bash
# To see the status of a service (Notice sudo isn't needed with a status check!)
systemctl status <servicename>

# To enable a service
sudo systemctl enable <servicename>

# To start a service
sudo systemctl start <servicename>

# To enable and start a service at the same time
sudo systemctl enable --now <servicename>

# To disable a service
sudo systemctl disable <servicename>

# To stop a service
sudo systemctl stop <servicename>

# To restart a service
sudo systemctl restart <servicename>
```

5. Issue the correct commands to make sure that the "libvirtd" service is both "active" (started) and "enabled" (will start automatically at boot)

   > ![caution](/img/caution.png)
   > The behaviour of the **libvirtd** service on Ubuntu Linux is for the service to stop when not in use and restart when required.

   >

6. In order to manage VMs your user account needs to be added to the "libvirt" group

```bash
sudo usermod -aG libvirt <username>
```

7. **Restart your ubuhost**. If you fail to do this, you may experience virtualization network problems and issues loading Virtual Machine Manager.

8. Once you've restarted, confirm your changes took affect by running the following as your regular user (don't use sudo):

```bash
systemctl status libvirtd
id
groups
```

The _libvirtd_ daemon should be running, and the _id_ and _groups_ commands should show that your user is part of the **libvirt** group.

9. Start the graphical `virt-manager` tool by launching your **Menu** and searching for **virt-manager**.
10. Right click on the icon and **Pin to panel** and then run the application or by typing the command `virt-manager` (without sudo!)

## Investigation 2: Install Virtual Machines (KVM)

> ![caution](/img/caution.png)**Keep the root password the same for Host and VMs**
>
> In order to simplify running the lab checking scripts in future labs, using the same root password for ALL machines (ubuhost and virtual machines). Also use the same username and passwords for all of your machines (ubuhost and virtual machines).

### Part 1: Setting up the Virtual Network

Once we have installed our 2 VM's we will want to configure them to be able to communicate on the same network.
KVM has setup a default virtual network for us to use but it is not configured to start automatically. We will also need to make sure the correct firewall and routing rules are added so that everything works.
Lets start by gathering information

1. Open a terminal window in ubuhost and run the following command to display the networks that ubuhost is connected to.

```bash
# List the networks connected and our IP address for each network interface
ip address
```

![ipaddr](/img/ipaddr.png)

2. Run the following command to list the current firewall/routing rules. (Note: Running _iptables_ as a regular user without sudo will make it look like the command doesn't exist. It's there.)

```bash
# List the iptables rules
sudo iptables -L
```

![ipaddr2](/img/ipaddr2.png)
![iptables2](/img/iptables2.png)
You can see that ubuhost has connected to the virtual network and iptables rules have been added to configure access to that network.

3. Open virt-manager
4. Select the QEMU/KVM connection and then click on Edit --> Connection Details
5. Select the Virtual Networks tab
6. Confirm the "Autostart: On Boot". If it is not, check it and then click Apply

### Part 2 Installing ubu1

**VM Details:**

- **VM Name (and hostname)**: ubu1
- **Ubuntu Server 2024**:
- **VM Image Pathname**: /var/lib/libvirt/images/deb1.qcow2
- **Memory**: 2048MB
- **Disk space**: 15GB
- **CPUs**: 2

> ![caution](/img/caution.png) It would be best to download a local copy of the Ubuntu Server ISO
>
> [Ubuntu Server](https://ubuntu.com/download/server)

**Perform the following steps:**

1. Launch `virt-manager`.
2. Click the **Create a new VM icon** located near the top left-corner of the application window.
3. Select the **Local install media** option and click **Forward**.
4. Browse to the location of your ISO image. (probably ~/Downloads) and select the iso image
5. If the Operating System is not auto detected, uncheck the **"Automatically detect from the installation media"** and Choose **Ubuntu Server 24.04**, and click **Forward**.

> ![vmsource](/img/vmsource.png)

6. If a **"search permissions"** dialog box opens, Check **"Don't ask about these directories again"** and click **yes**

![searchperms](/img/searchperms.png)

7. Set **Memory**: size to **2048** MB and **CPUs** to **2**, then click **Forward**.

> ![memcpu](/img/memcpu.png)

8. Set **Hard Disk** size to **15** GB and click **Forward**.
9. Enter the Name: **ubu1**, AND then select the option: **Customize configuration before install**, and click **Finish**.
10. Another dialog will appear. Click **CPUs** (or "processors") and on right-side under Configuration select **Copy Host CPU Configuration**, click **Apply**, and then click **Begin Installation** at the top left-hand side.

    > **NOTES**
    >
    > - To have the VM "capture" the keyboard and mouse input click on the viewer window
    > - To release the keyboard and mouse from the VM use **left-ctrl+left-alt**
    > - To make the VM easier to display, click on **View --> Scale Display --> Always** > ![scale](/img/scale.png)

11. When the installer starts select Select **English** as the language.
12. If prompted to **Update to the new installer**, do it.
13. Set Keyboard **Layout** and **Variant** to **English (US)**
14. Check that **Ubuntu Server** is selected and select **Done**.
15. Accept the defaults for **Network Configuration** and select **Done**.
16. Leave proxy address blank and select **Done**.
17. For **Ubuntu archive mirror configuration** leave the defaults and select **Done**.
18. For **Guided storage configuration** select **Use an entire disk** and select **Done**.
19. For **Storage configuration** read the output and select **Done**.
20. Select **Continue**.
21. Under **Profile configuration**

- Enter your **Full name**
- Enter a **Hostname** of **ubu1**
- Enter your **Username** (first part of your email address)
- Enter your **password** twice.
- Select **Done**

22. Skip **Ubuntu Pro** and select **Continue**
23. Check the box beside **Install OpenSSH server** and select **Done**
24. Under **Featured server snaps** leave the defaults and select **Done**
25. When the installation is complete **Reboot**
    > ![caution](/img/caution.png)
    > You may need to go into the VM details and remove the media from the **CDROM** device

**Post Installation Tasks**

1. Login to your **ubu1** vm.

2. First change the **tty** display font.

```bash
# Reconfigure the console font
sudo dpkg-reconfigure console-setup
```

![ubu1tty](/img/deb3tty.png)

3. Select **UTF-8**
4. Select **Guess optimal character set**
5. Select **Terminus**
6. Select **14x28**

You can experiment with different settings for Font and Font size.

7. Issue the following command to obtain the IPv4 address for your deb1 VM to record in your Lab 2 logbook:

```bash
ip address show
```

8. Issue the following command:

```bash
sudo less /var/log/installer/autoinstall-user-data
```

9. Scroll through the file. What do you think this is?
10. This file was generated when you installed **ubu1**.

### Part 3: Cloning ubu1 as ubu2

**VM Details:**

- **VM Name (and hostname)**: ubu2
- **VM Image Pathname**: /var/lib/libvirt/images/ubu2.qcow2
- **Memory**: 2048MB
- **Disk space**: 15GB
- **CPUs**: 1

**Perform the following steps:**

1. Launch **virt-manager**.
2. Right click on **ubu1** and select **clone**.
3. Set the **Name** to **ubu2**.
4. Click **Clone**.

**Post Installation Tasks**

1. Repeat the steps from your **ubu1** install to change your **tty** font.

2. Issue the following command to obtain the IPv4 address for your **ubu2** VM to record in your Lab 2 logbook:

```bash
ip address show
```

3. Change the hostname to **ubu2** immediately:

```bash
sudo hostnamectl set-hostname --static ubu2
```

4. Issue the hostnamectl command to confirm the changes have been applied.

```bash
sudo hostnamectl
```

5. Logout and log back in to apply the changes to your command prompt.

**Answer INVESTIGATION 2 observations / questions in your lab log book.**

## Investigation 3: Managing Virtual Machines (KVM)

**Root Privileges**

As part of this investigation you will learn how to switch over to the root account in order to run several privileged commands in sequence. It can be tempting to just use this technique all the time, and never have to worry about sudo, but do **not** do so. It undermines the security of your system. Use it only when you need it.

### Part 1: Backing Up Virtual Machines

> ![caution](/img/caution.png)
> Taking the time to backup the image of the Virtual Machines filesystem allows the user to return to a "**restoration point**" using the **gunzip** command.
>
> This allows us to recover in case something bad occurs during a Lab!
>
> Failure to take the time to make and confirm backups can result in loss of lab work for the student!
>
> There are three general steps to back up your Virtual Machines:
>
> - Shutdown the VM
> - Create a compressed copy of your **Disk Images** using the **gzip** command.
> - Backup the VM xml configuration using the **virsh** shell command.

The `virsh` command is a command line tool/shell for managing VM's. We use it to connect to the hypervisor and then interact with our VM's

The following example `virsh` commands will be useful

```bash
# List all running (active) VM's
virsh list

# List all inactive VM's
virsh list --inactive

# List all VM's (active or not)
virsh list --all

# Start a VM
virsh start <vmname>

# Shutdown a VM
virsh shutdown <vmname>

# Force off a VM (if shutdown fails)
virsh destroy <vmname>

# Display the xml data that defines the VM configuration
virsh dumpxml <vmname>
```

To view the VM in a window without launching `virt-manager`

```bash
# Open VM in viewer window
virt-viewer <vmname> &
```

**On ubuhost**

1. Shut down your **ubu1**, and **ubu2** VMs. (Use the `virsh` command)
   > ![caution](/img/caution.png)
   > You can shutdown the VM's by issuing the following command to shutdown: `sudo poweroff`, or you can use the `virsh` command.
   > Please be patient, the VMs will shut down!
2. Create a directory for your backups.

```bash
mkdir ~/backups
```

3. Enter the command

```bash
virsh dumpxml ubu1
```

This command will output the xml data that is used to define (create) this VM
If we save this output we could use that xml data to recreate the VM

5. Enter the command

```bash
virsh dumpxml ubu1 > ~/backups/ubu1.xml
```

this will save a copy of the output.

6. Repeat the steps to save the xml data for `ubu2` to the file `~/backups/ubu2.xml`

   Backing up the xml data only has to be done when the VM is created, or if the configuration is modified.

7. We will need to use elevated privileges to backup our disk image files from the default location of `/var/lib/libvirt/images/`
8. Use the command `sudo -i` and enter your password if prompted.

> `sudo -i` will start a new shell as the root user, you can run a number of commands and then type `exit` to return to your previous shell.

9.  Change to the images directory: `cd /var/lib/libvirt/images/`. Note that you did not need to use sudo, as you are already using elevated permissions.
10. Type `ls -lh` to see the contents
11. To make a compressed copy of your **ubu1.qcow2**, and **ubu2.qcow2** files we will use the `gzip` command.

        The `gzip` command will compress the file in place and rename the file with a `.gz` extension.
        However, this will make the file unusable and doesn't create a copy. We will use STDIN and STDOUT redirection to overcome this.

    > The following commands will create a compressed backup of ubu1 and ubu2's virtual disks. These commands will take time (approximately 3-5 minutes per VM) to complete. Be patient.

12. Issue the commands:

```bash
gzip < ubu1.qcow2 > ~YourRegularUsername/backups/ubu1.qcow2.gz

gzip < ubu2.qcow2 > ~YourRegularUsername/backups/ubu2.qcow2.gz & progress --monitor --pid=$!
```

**NOTE**: Make certain to use the redirection signs "<" and "\>" properly in the command!

> ![caution](/img/caution.png)**Please be patient**
>
> It may look like the command prompt is stuck but it could take a while for gzip to compress an entire operating system.
>
> **NOTE**: Do **NOT** press `<ctrl>c` to cancel this process. If you do, your archive will become incomplete and your recovery will be corrupt.
>
> Note the difference between the backup for **ubu1**, and **ubu2** which included the additional progress command. This is a useful utility.

13. Compare the size of the compressed and original files (hint: use `ls -lh`). If file is very large (like 15GB), you didn't compress it and you need to remove that file and perform the previous step until you get it right!
14. Once you are **sure you have both VM disk images backed up**, use the `exit` command to revert back to your normal user.

![vmbackup](/img/vmbackup.png)

### Part 2: Testing the backup

1. Start the **ubu2** VM and login.
   > ![caution](/img/caution.png) **THIS WILL DESTROY YOUR SYSTEM**
   >
   > **Make certain that you are in your `ubu2` VM and not in `ubuhost`!**
1. Type this command inside the ubu2 virtual machine: `sudo rm -rf /*` (ignore error messages).
1. Type the command `sudo poweroff`, try other commands.
1. Force the VM to poweroff and restart
1. When the machine restarts it will not boot since all system files have been removed!
1. Use the **Force Off** option to turn ubu2 back off.
1. Run `virt-manager` right click on the `ubu2` VM and select **Delete** make sure that **Delete associated storage file** is selected and **Delete**

   `ubu2` is now completely gone. Time to test the backup!

1. To restore the VM configuration:

```bash
# List all VM's
virsh list --all

# Define a VM from xml data
virsh define ~/backups/ubu2.xml

# List all VM's
virsh list --all
```

8. To restore the `ubu2` disk image file:

```bash
# Start a sudo shell
sudo -i

# Change to images directory
cd /var/lib/libvirt/images

# Restore file
gunzip < ~YourRegularUserName/backups/ubu2.qcow2.gz > ubu2.qcow2

# Return to previous shell
exit

```

9. Start the `ubu2` VM and login to make sure it was successfully restored

> ![caution](/img/caution.png)**Shutting Down the Host while Virtual Machines are Running**
>
> If you shut down your host system while virtual machines are running, they will be suspended, and will resume the next time you boot your host system. Note that it is better to shut down the VMs prior to shutting down the host

10. For the remainder of these labs, it is assumed that you will backup **both** the images and XML configuration files for **all** Virtual machines, when asked to backup your virtual machines. It is also highly recommended to backup these files to an external storage device (eg. USB key) in case the host machine gets "wiped" and you need to rebuild your HOST machine and then restore your Virtual Machines.
11. Answer this question in your log book:

- In order to fully back up a virtual machine, what information should be saved in addition to the virtual machine image?

**Answer INVESTIGATION 3 observations / questions in your lab log book.**

## Investigation 4: Managing VMs from the Command Line and Using Shell Scripts for VM Backup & Management

You will continue our use of Bash Shell scripting by first creating a Bash Shell script that will allow the Linux sysadmin to select their created VMs for backup. Afterwards you will download, view and run a couple of Bash Shell scripts that use the virsh command to start and stop your virtual machines.

**Perform the following steps:**

1. Start the **ubu1** virtual machine, and stop the **ubu2** virtual machine.
2. Switch to the **ubuhost** machine, and open a shell terminal.
3. Enter these admin commands into your **ubuhost** machine and note the result:

```bash
virsh list
```

```bash
virsh list --all
```

```bash
virsh list --inactive
```

4. Now, shut-down your ubu1 VM normally, and close the ubu1 VM window.
5. Switch to your terminal and issue the command:

```bash
virsh start ubu1
```

6. Using the appropriate command check to see if your ubu1 VM is now running.
7. There are other commands that can be used (such as **suspend**, or **shutdown**). The "shutdown" command may not always work since it relies on the guest handling a particular ACPI event. Why do you think it is useful to have commands to manipulate VMs?

**Virtual Machine Does not Shutdown from Command**

If the Virtual machine fails to shutdown from the `virsh shutdown` command, then you can go to the **Virtual Machine manager** and **halt** or **shutdown** within the VM itself, then you can click the **PowerOff** button in the VM window. You'll want to avoid a forced shutdown since those are equivalent to yanking the power cord out of the wall on a physical machine!

### Accept the Lab 2 GitHub Classroom assignment.

Use the following [link](https://classroom.github.com/a/igcEQwgi) to set up your lab 2 repository. You will be using this for this investigation.

Next, follow the sections for setup on a Shared Computer by Accessing GitHub Codespaces or on your Personal Computer. While you can install Visual Studio Code (VSCode) locally, I recommend using Codespaces for this course.

Once you have set up your Lab 2 repository by following the link above (go back and do that if you missed it), you can access GitHub Codespaces from any browser on any device (PC, tablet, smart phone). Codespaces gives you access to Visual Studio Code, with direct access to your repository (without having to clone) from anywhere. It's perfect for a portable development environment. Login to GitHub (if you haven't already) and proceed.

You may have noticed in the link above you can click **Open in GitHub Codespaces**. Feel free to do so now. If you have already clicked past that window the next few steps will show you how to access it again (which is useful for future access attempts anyway). Click on **Code** and create a new codespace. Once you have created it, you can access it by clicking on the named link.

![Accessing GitHub Codespaces](/img/github-codespaces.png)

### Modifying the vs script

Once your Codespace has created, open the provided template called **vs**, and update the comment block to include **your name** and **today's date**.

Examine the entire **vs** script. Note that the only sections left to complete are the function declarations. You should be able to understand the rest of the script, as the concepts were covered in OSL645.

This script will:

- Accept the following options from the command line:
  - b: to backup virtual machines
  - r: to restore virtual machines
  - o vmname: when called with **b** or **r** will perform that action on just the virtual machine (vmname) provided
  - f: used with **r** to indicate a fresh install of the host. This will install the virtualization software and updates.

#### Functions

Bash functions provide several benefits when writing and using shell scripts:

1. **Code Reusability**: Functions allow you to recall code that you need to use multiple times. This reduces redundancy and makes your scripts more maintainable.

2. **Modularity**: By breaking your script into functions, you can create modular code. Each function can perform a specific task, making your script easier to understand and debug.

3. **Readability**: Functions can make your scripts more readable by giving meaningful names to blocks of code. This helps others (and yourself) understand what each part of the script is doing.

4. **Maintainability**: When you need to update or fix a part of your script, you can do so in one place if that code is within a function. This makes maintenance easier and reduces the risk of introducing errors.

5. **Parameterization**: Functions can accept parameters, allowing you to write more flexible and general-purpose code. This makes your scripts more adaptable to different situations.

In this example, the `greet` function takes one parameter and prints the message **Hello World!**. This function can be reused with different parameters throughout the script.

```bash
#!/bin/bash

# Define a function
greet() {
  echo "Hello, $1!"
}

# Call the function with a parameter
greet "World"
```

### Changing the value of dpath

Change the value of the dpath variable to **YOUR** username:

```bash
dpath="/home/username/backups"
```

### Writing the backup function

Use the following code to write the backup function:

```bash
# A function to back up the virtual machines
function backup() {

	# Change directory to where the virtual machines are stored as files
	cd $spath

	# Use virsh dumpxml to create a backup of the xml file for the virtual machine
	virsh dumpxml $vm >$dpath/$vm.xml

	# tell the user the back up is in progress
	echo "Creating backup of $vm in $dpath"

	# Use touch to create the backup destination file if it doesn't exist, update the time and date stamp if it does
	touch $dpath/$vm.backup.gz

	# gzip images and store them in back up directory, run in the background
	gzip < $spath/$vm.qcow2 > $dpath/$vm.qcow2.gz & progress --monitor --pid=$!

	# Append the name of the virtual machine to the log message variable (logMsg)
	logMsg="$logMsg $vm,"
}
```

### Writing the restore function

Use the following code to write the restore function:

```bash
# A function to restore the virtual machines
function restore() {

	# Change directory to where the virtual machine backups are stored
	cd $spath

	# Tell the user the restoration is in progress
	echo "Restoring $vm"

	# Use the gunzip command to unzip the backup file and restore it to /var/lib/libvirt/images
	gunzip < $dpath/$vm.qcow2.gz > $spath/$vm.qcow2 & progress --monitor --pid=$!

	# Append the name of the virtual machine to the log message variable (logMsg)
	logMsg="$logMsg $vm,"

	# Copy the xml file to the /var/lib/libvirt/images directory
	cp $spath/$vm.xml $dpath/$vm.xml

	# Use virsh define to define the virtual machine
	virsh define $vm.xml
}
```

In Codespaces, give your vs script execute permission.

```bash
chmod u+x vs
```

- Stage your changes and commit them to GitHub.

### Cloning your GitHub repository in your Ubuntu VM

Issue the following command to clone your GitHub repository into your home directory.

> **Important:** Be sure to replace `username` in the following command with YOUR GitHub username.

```bash
git clone git@github.com:OSL745/lab-2-username
```

Change to your lab directory, and run your script to create a fresh backup of all your VMs. If you get any errors, double check your script (in codespaces) against the lab instructions. The **only** things you should have modified are the **backup** and **restore** functions.

```bash
cd lab-2-username
sudo ./vs -b
```

Now that you have a working backup script, you are expected to make a fresh backup of your VMs every lab. You will also want to copy these to an exteral USB flash drive. In the event your main drive fails, you will have the backup of your VMs and at worst only have to reinstall your host (Lab 1).

17. You have completed lab2. Proceed to Completing The Lab, and follow the instructions for "lab sign-off".

**Answer INVESTIGATION 4 observations / questions in your lab log book.**

## Lab 2 Sign-Off (Show Instructor)

Follow the submission instructions that your Professor provides.

**Backup ALL of your VMs!**

If you have successfully completed this lab, make a new backup of all of your virtual machines onto your USB Key.

**Perform the Following Steps:**

1. On your **ubuhost** issue the command:

```bash
virsh list --all
```

1. Call your professor over and show them the output.

## Exploration Questions

1. How do you start and stop virtual machines?
2. What is the purpose of the virsh command?
3. List the steps to correctly backup your VM's xml data
4. List the steps to correctly backup your VM's disk images
5. List the steps to correctly restore your VMs
6. How can you prompt the user for data and store into a variable?
7. Show a few examples of bash loops that can be used to error-check user input.
8. What does the command **apt update** do and why is it important?
9. What does the command **apt upgrade** do and why is it important?
10. What is the purpose of booting into single-user mode?
11. List the steps in order to boot into single-user mode.
