"use strict";(self.webpackChunkOERTemplate=self.webpackChunkOERTemplate||[]).push([[880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(3117),o=(n(7294),n(3905));const i={id:"lab5",title:"Lab 5 - Introduction to Amazon Web Services (AWS)",sidebar_position:5,description:"Creating an instance in Amazon Web Services (AWS)"},r="Lab 5 - Introduction Amazon Web Services (AWS)",l={unversionedId:"Labs/lab5",id:"Labs/lab5",title:"Lab 5 - Introduction to Amazon Web Services (AWS)",description:"Creating an instance in Amazon Web Services (AWS)",source:"@site/docs/Labs/lab5.md",sourceDirName:"Labs",slug:"/Labs/lab5",permalink:"/OSL745/Labs/lab5",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OERTemplate/tree/main/docs/Labs/lab5.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"lab5",title:"Lab 5 - Introduction to Amazon Web Services (AWS)",sidebar_position:5,description:"Creating an instance in Amazon Web Services (AWS)"},sidebar:"courseNotesSidebar",previous:{title:"Lab 4 - Setup and Configure SSH",permalink:"/OSL745/Labs/lab4"},next:{title:"Lab 6 - Amazon Web Services (AWS) Networking",permalink:"/OSL745/Labs/lab6"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Investigating the AWS Learner Lab",id:"investigating-the-aws-learner-lab",level:2},{value:"Using the AWS Console interface",id:"using-the-aws-console-interface",level:2},{value:"Modifying VPC Security Groups",id:"modifying-vpc-security-groups",level:2},{value:"Exploring Amazon Elastic Cloud Compute (EC2)",id:"exploring-amazon-elastic-cloud-compute-ec2",level:2},{value:"Adding an instance in AWS",id:"adding-an-instance-in-aws",level:2},{value:"Creating SSH key pairs &amp; using public key cryptography",id:"creating-ssh-key-pairs--using-public-key-cryptography",level:2},{value:"Requirements: An SSH Client",id:"requirements-an-ssh-client",level:3},{value:"For all clients",id:"for-all-clients",level:4},{value:"On Windows, Using Command Prompt:",id:"on-windows-using-command-prompt",level:4},{value:"On macOS/Linux, Using Terminal:",id:"on-macoslinux-using-terminal",level:4},{value:"Completing the Lab",id:"completing-the-lab",level:2},{value:"Exploration Questions",id:"exploration-questions",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-5---introduction-amazon-web-services-aws"},"Lab 5 - Introduction Amazon Web Services (AWS)"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This week's lab will cover the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Investigating the AWS Learner Lab."),(0,o.kt)("li",{parentName:"ul"},"Using the AWS Console interface."),(0,o.kt)("li",{parentName:"ul"},"Modifying Virtual Private Cloud (VPC) Security Groups."),(0,o.kt)("li",{parentName:"ul"},"Exploring Amazon Elastic Cloud Compute (EC2)."),(0,o.kt)("li",{parentName:"ul"},"Adding an instance in AWS."),(0,o.kt)("li",{parentName:"ul"},"Creating SSH key pairs ","&"," paired key encryption.")),(0,o.kt)("h2",{id:"investigating-the-aws-learner-lab"},"Investigating the AWS Learner Lab"),(0,o.kt)("p",null,"You should have received an email (in your Seneca College email) from your professor inviting you to participate in the AWS Academy Learner Lab. If you have received and accepted this invitation you may proceed with this lab. If you have not received this invitation you should contact your professor immediately. You may continue with the rest of the lab once you have received the invitation. Here is a sample email."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS Invitation",src:n(6306).Z,width:"1263",height:"640"})),(0,o.kt)("p",null,"The AWS Learner Lab provides a sandbox environment where you can build, configure and deploy AWS assets such as instances. There are some limitations as to what you can do, however it provides all the functionality we require for this course. You are limited to $100 credit at no cost within the learner lab. Once this runs out your learner lab will be disabled. Additionally, there is no way to add funds to this pool. If you follow the lab instructions properly you should not have any issues."),(0,o.kt)("p",null,"Once you have accepted your invitation and logged into the ",(0,o.kt)("a",{parentName:"p",href:"https://awsacademy.instructure.com/login/canvas"},"AWS Learner Lab")," navigate to ",(0,o.kt)("strong",{parentName:"p"},"Courses")," (on the left hand side) > ",(0,o.kt)("strong",{parentName:"p"},"Modules")," > ",(0,o.kt)("strong",{parentName:"p"},"Learner Lab"),". You should see a screen that looks like the following:\n",(0,o.kt)("img",{alt:"AWS Learner Lab home",src:n(2975).Z,width:"1922",height:"1079"})),(0,o.kt)("p",null,"Some important things to note on this screen:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Start Lab"),": Starts the Learner Lab environment."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Stop Lab"),": Stops the Learner Lab environment."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Used $0 of $100"),": Shows the balance used of your $100 credit. If this hits $100 of $100 used, your learner lab is disabled. Be careful."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AWS with a red dot next to it"),": Once your lab has started, this will turn green. You can then click on this to open the environment."),(0,o.kt)("h2",{id:"using-the-aws-console-interface"},"Using the AWS Console interface"),(0,o.kt)("p",null,"Start your session in the Learner Lab by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Start Lab")," button. Once the red dot has turned green, click on it to enter the Learner Lab. This will take you to the AWS Console (depicted below), which will be where you will do most of your work. It also mirrors a production AWS interface. Note: Your screen may not look 100% identical to the one depicted, but should be mostly the same.\n",(0,o.kt)("img",{alt:"AWS Console",src:n(947).Z,width:"1907",height:"948"})),(0,o.kt)("p",null,"If you click on ",(0,o.kt)("strong",{parentName:"p"},"Services")," in the top left corner (beside the AWS logo), you will see all the services you can configure in the AWS learner lab. Common ones we will use are EC2 and VPC. You can search for these in the search bar, or browse the categories. Recently visited services will show up under the heading ",(0,o.kt)("strong",{parentName:"p"},"Recently visited"),". If you hover over any service you will see a greyed out star to the left of the name. You can click on this to add it to your favourites for easy access."),(0,o.kt)("h2",{id:"modifying-vpc-security-groups"},"Modifying VPC Security Groups"),(0,o.kt)("p",null,"An Amazon Virtual Private Cloud (VPC) is a dedicated virtual network within AWS' public cloud. It work similar to how a traditional network does in a data center. w3schools has some ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/aws/aws_cloudessentials_awsconnectivity.php"},"additional information"),". To access the VPC settings, click on Services (top left corner beside the AWS icon), and navigate to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Networking & Content Delivery > VPC"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Click on VPC.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Click on Security Groups."))),(0,o.kt)("p",null,"Your screen should look like the following:\n",(0,o.kt)("img",{alt:"AWS Security Groups",src:n(514).Z,width:"1924",height:"893"})),(0,o.kt)("p",null,"Click on ",(0,o.kt)("strong",{parentName:"p"},"InBound rules")," > ",(0,o.kt)("strong",{parentName:"p"},"Edit InBound Rules")," and add the following rule:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Port Range:")," 22"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"The box beside the magnifying glass:")," 0.0.0.0/0")),(0,o.kt)("p",null,"This will allow incoming SSH connections from anywhere. We will use this in the next part to connect to your instance. The screenshot below shows what your inbound rules should look like:\n",(0,o.kt)("img",{alt:"AWS Inbound Rules - Lab 1",src:n(1379).Z,width:"1926",height:"893"})),(0,o.kt)("h2",{id:"exploring-amazon-elastic-cloud-compute-ec2"},"Exploring Amazon Elastic Cloud Compute (EC2)"),(0,o.kt)("p",null,"EC2 is where you will end up spending the most amount of time configuring things in this course. From here you can do things like launch instances, manage networking services and much more. To access EC2, click on ",(0,o.kt)("strong",{parentName:"p"},"Services")," (top left corner beside the AWS icon), and navigate to ",(0,o.kt)("strong",{parentName:"p"},"Compute > EC2"),". You may wish to add this to your favourites for easy access by hovering over and clicking the star. Your initial screen should look something like the following. w3schools has some ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/aws/aws_cloudessentials_ec2intro.php"},"additional information")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS EC2",src:n(6265).Z,width:"1926",height:"947"})),(0,o.kt)("h2",{id:"adding-an-instance-in-aws"},"Adding an instance in AWS"),(0,o.kt)("p",null,"Click on Launch instance just below the Resources pane. From the Launch an instance screen, select the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name:")," first"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OS:")," Ubuntu"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Amazon Machine Image(AMI):")," Make sure Ubuntu Sever 22.04 is selected")),(0,o.kt)("h2",{id:"creating-ssh-key-pairs--using-public-key-cryptography"},"Creating SSH key pairs & using public key cryptography"),(0,o.kt)("p",null,"Under ",(0,o.kt)("strong",{parentName:"p"},"Key pair (login)"),' click Create new key pair. Give it the name ops345, accept the rest of the defaults and click "Create key pair".'),(0,o.kt)("p",null,"Important: Do not lose your key pair or you will be unable to connect to your instance using SSH."),(0,o.kt)("p",null,"Under ",(0,o.kt)("strong",{parentName:"p"},"Network Settings")," click Select existing security group. Click the dropdown and check the default. Click Launch instance. Once it has finished completing (you should see a success message), click ",(0,o.kt)("strong",{parentName:"p"},"Connect to instance"),"."),(0,o.kt)("p",null,"Note there are a few ways to connect to your instance from here. The easiest to use are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"EC2 Instance Connect: Allows you to connect to your instance from within your web browser."),(0,o.kt)("li",{parentName:"ul"},"SSH client: Allows you to connect to your instance using the SSH key pair.")),(0,o.kt)("p",null,"You will be accessing our new Linux VM remotely using SSH, which is a command-line (CLI) only protocol."),(0,o.kt)("h3",{id:"requirements-an-ssh-client"},"Requirements: An SSH Client"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows: Use the built-in Command Prompt application."),(0,o.kt)("li",{parentName:"ul"},"macOS/Linux: Use the built-in Terminal application.")),(0,o.kt)("h4",{id:"for-all-clients"},"For all clients"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the Linux EC2 Instance summary page, click the Connect button."),(0,o.kt)("li",{parentName:"ul"},"In the new Connect to instance page, click on the SSH client tab."),(0,o.kt)("li",{parentName:"ul"},"Copy the example command near the bottom of the page. (Use your example command)"),(0,o.kt)("li",{parentName:"ul"},"Choose the proper OS below and continue.")),(0,o.kt)("h4",{id:"on-windows-using-command-prompt"},"On Windows, Using Command Prompt:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open Command Prompt."),(0,o.kt)("li",{parentName:"ul"},"Change directories to your default Downloads folder with the following command: cd Downloads (If you saved your .pem file elsewhere, navigate there. Or move the .pem file into Downloads.)"),(0,o.kt)("li",{parentName:"ul"},"Paste the example command from the Connect to instance page, and press Enter."),(0,o.kt)("li",{parentName:"ul"},"The SSH command will ask you to confirm connecting. Type yes and press Enter."),(0,o.kt)("li",{parentName:"ul"},"If login is successful, you should see a prompt like this: ubuntu@ip-172-31-91-76:~$"),(0,o.kt)("li",{parentName:"ul"},"To quit, type exit.")),(0,o.kt)("h4",{id:"on-macoslinux-using-terminal"},"On macOS/Linux, Using Terminal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open Terminal."),(0,o.kt)("li",{parentName:"ul"},"Change directories to your default Downloads folder with the following command: cd Downloads (If you saved your .pem file elsewhere, navigate there. Or move the .pem file into Downloads.)"),(0,o.kt)("li",{parentName:"ul"},"Change the file permissions of your .pem file with this command: chmod 400 ","*",".pem"),(0,o.kt)("li",{parentName:"ul"},"Paste the example command from the Connect to instance page, and press Enter."),(0,o.kt)("li",{parentName:"ul"},"The SSH command will ask you to confirm connecting. Type yes and press Enter."),(0,o.kt)("li",{parentName:"ul"},"If login is successful, you should see a prompt like this: ubuntu@ip-172-31-91-76:~$")),(0,o.kt)("h2",{id:"completing-the-lab"},"Completing the Lab"),(0,o.kt)("p",null,"Take a screenshot of your successful connection and submit that to the folder on blackboard for proof of completion OR show your professor (depending on how they are marking the labs). The following Exploration Questions are for furthering your knowledge only, and may appear on quizzes or tests at any time later in this course."),(0,o.kt)("h2",{id:"exploration-questions"},"Exploration Questions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"How do you start/stop the AWS learner lab?"),(0,o.kt)("li",{parentName:"ol"},"How do you enter the AWS learner lab once you have started it?"),(0,o.kt)("li",{parentName:"ol"},"What happens to your learner lab if your credits hit $100 of $100 used?"),(0,o.kt)("li",{parentName:"ol"},"Where do you go to edit networking configuration options such as ",(0,o.kt)("strong",{parentName:"li"},"security groups"),"?"),(0,o.kt)("li",{parentName:"ol"},"Where do you go to launch an instance?"),(0,o.kt)("li",{parentName:"ol"},"What is an instance?"),(0,o.kt)("li",{parentName:"ol"},"What command do you use to access an instance in AWS from your command line?"),(0,o.kt)("li",{parentName:"ol"},"What is public-key cryptography?")))}p.isMDXComponent=!0},6306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-invitation-cddccf6585c2cd986e23d5bdddb13e2c.png"},947:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/awsconsole-4215f7a6b320e98e754522d1001d0569.png"},6265:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/awsec2-00845b1aee25dccf7cd2745b483aa3ad.png"},514:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/awssecuritygroups-4977fa0223dd608a812350a2eb714508.png"},1379:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/awssg-inboundrules-8c6008b731ab89c27a528ffde16cea6b.png"},2975:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/learnerlabhome-b6bf78ca2ac9ce30505ad6ac562ec330.png"}}]);