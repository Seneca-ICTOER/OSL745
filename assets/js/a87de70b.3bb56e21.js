"use strict";(self.webpackChunkOERTemplate=self.webpackChunkOERTemplate||[]).push([[180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(3117),r=(n(7294),n(3905));const o={id:"lab8",title:"Lab 8 - DNS & SSL",sidebar_position:8,description:"Configure DNS using MyCustomDomain & SSL with Let's Encrypt."},i="Lab 8 - DNS & SSL",l={unversionedId:"Labs/lab8",id:"Labs/lab8",title:"Lab 8 - DNS & SSL",description:"Configure DNS using MyCustomDomain & SSL with Let's Encrypt.",source:"@site/docs/Labs/lab8.md",sourceDirName:"Labs",slug:"/Labs/lab8",permalink:"/OSL745/Labs/lab8",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OERTemplate/tree/main/docs/Labs/lab8.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"lab8",title:"Lab 8 - DNS & SSL",sidebar_position:8,description:"Configure DNS using MyCustomDomain & SSL with Let's Encrypt."},sidebar:"courseNotesSidebar",previous:{title:"Lab 7 - Apache",permalink:"/OSL745/Labs/lab7"},next:{title:"Lab 9 - Amazon RDS Relational Database Service",permalink:"/OSL745/Labs/lab9"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Registering a domain name",id:"registering-a-domain-name",level:2},{value:"Creating an A record",id:"creating-an-a-record",level:3},{value:"Testing Your DNS configuration",id:"testing-your-dns-configuration",level:3},{value:"Preparing your system to generate and install an SSL certificate",id:"preparing-your-system-to-generate-and-install-an-ssl-certificate",level:2},{value:"Installing Certbot",id:"installing-certbot",level:3},{value:"Configuring an Apache Virtual Host",id:"configuring-an-apache-virtual-host",level:3},{value:"Testing and Reloading the Apache configuration",id:"testing-and-reloading-the-apache-configuration",level:3},{value:"Generating an SSL certificate using Let&#39;s Encrypt and Certbot",id:"generating-an-ssl-certificate-using-lets-encrypt-and-certbot",level:2},{value:"Testing your configuration",id:"testing-your-configuration",level:2},{value:"Completing the lab",id:"completing-the-lab",level:2},{value:"Exploration Questions",id:"exploration-questions",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab-8---dns--ssl"},"Lab 8 - DNS & SSL"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This week's lab will cover the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using a service to register a domain name"),(0,r.kt)("li",{parentName:"ul"},"Generating TLS/SSL certificates with Let's Encrypt & Certbot")),(0,r.kt)("h2",{id:"registering-a-domain-name"},"Registering a domain name"),(0,r.kt)("p",null,"You should have received an email indicating you have access to ",(0,r.kt)("a",{parentName:"p",href:"https://mycustomdomain.senecacollege.ca/"},"My.Custom.Domain"),". You will be using this to create an A record and map it to the elastic IP of your instance from Lab 3. If you do not have access please ",(0,r.kt)("strong",{parentName:"p"},"contact your professor")," so you can proceed."),(0,r.kt)("h3",{id:"creating-an-a-record"},"Creating an A record"),(0,r.kt)("p",null,"Login to ",(0,r.kt)("a",{parentName:"p",href:"https://mycustomdomain.senecacollege.ca/"},"My.Custom.Domain"),". You should see a screen similar to the one below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My.Custom.Domain login",src:n(9955).Z,width:"1919",height:"664"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Create DNS Records"),"."),(0,r.kt)("p",null,"On the following screen, click ",(0,r.kt)("strong",{parentName:"p"},"Create your first DNS Record!"),", and fill in the following information (see the following screenshot for an example)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name:")," wordpress"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type:")," A Record (IPv4 Address)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Value:")," ",(0,r.kt)("em",{parentName:"li"},"your elastic IP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Course:")," OPS345"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description:")," Address record for wordpress instance, lab 4.")),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating an address record",src:n(5550).Z,width:"596",height:"908"})),(0,r.kt)("h3",{id:"testing-your-dns-configuration"},"Testing Your DNS configuration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Launch the AWS Learner Lab and login. Make sure your www instance is running."),(0,r.kt)("li",{parentName:"ol"},"Type ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"http://www.example.com"},"www.example.com"))," (replace this with your domain name) in the URL bar of a web browser. This could be on your PC, or any device. You should see your website from Lab 3! If you don't, double check and make sure you see ",(0,r.kt)("strong",{parentName:"li"},"http://")," and not ",(0,r.kt)("strong",{parentName:"li"},"https://"),".")),(0,r.kt)("p",null,"Next, login to your first instance and issue the following commands. Note the output of each. Substitute your domain name for ",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nslookup www.example.com\n")),(0,r.kt)("p",null,"and"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dig www.example.com\n")),(0,r.kt)("p",null,"Make sure you see the correct output from the previous commands indicating your DNS is working before proceeding to the next step."),(0,r.kt)("h2",{id:"preparing-your-system-to-generate-and-install-an-ssl-certificate"},"Preparing your system to generate and install an SSL certificate"),(0,r.kt)("p",null,"Login to your ",(0,r.kt)("strong",{parentName:"p"},"www")," instance. You are going to install Certbot, which will automate configuring HTTPS using Let's Encrypt."),(0,r.kt)("h3",{id:"installing-certbot"},"Installing Certbot"),(0,r.kt)("p",null,"First, check to see if it is available by issuing the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt search certbot\n")),(0,r.kt)("p",null,"You should see the following output."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Confirming certbot is available to install with apt",src:n(2665).Z,width:"430",height:"97"})),(0,r.kt)("p",null,"Once you have confirmed it is available, install it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt -y install certbot python3-certbot-apache\n")),(0,r.kt)("h3",{id:"configuring-an-apache-virtual-host"},"Configuring an Apache Virtual Host"),(0,r.kt)("p",null,"Create the and edit a file for your virtual host configuration. You can use either vi or nano. Replace wwwexamplecom with your domain name, with the www and top level domain, but without the .. This will allow Certbot to find the correct VirtualHost block and update it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vi /etc/apache2/sites-available/wwwexamplecom.conf\n")),(0,r.kt)("p",null,"Enter the following text (again, replacing the domain name with yours)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ServerName www.example.com\n")),(0,r.kt)("h3",{id:"testing-and-reloading-the-apache-configuration"},"Testing and Reloading the Apache configuration"),(0,r.kt)("p",null,"Enter the following command to test your Apache configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apache2ctl configtest\n")),(0,r.kt)("p",null,"You should see a message indicating Syntax OK. If you don't, double check your file name and contents for errors. Sample output follows."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apachectl configtest indicating syntax is ok",src:n(5234).Z,width:"424",height:"60"})),(0,r.kt)("p",null,"Now you can reload apache2 using systemctl."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl reload apache2\n")),(0,r.kt)("h2",{id:"generating-an-ssl-certificate-using-lets-encrypt-and-certbot"},"Generating an SSL certificate using Let's Encrypt and Certbot"),(0,r.kt)("p",null,"Now you are ready to generate your SSL certificate using Certbot. You are going to configure Apache to reconfigure and reload the configuration whenever necessary. This way you do not need to worry about updating your SSL certificate every 90 days, which is when certificates issued through Let's Encrypt and Certbot expire. Issue the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo certbot --apache\n")),(0,r.kt)("p",null,"At the email address prompt, enter your Seneca College issued email.\n",(0,r.kt)("img",{alt:"Running certbot",src:n(7746).Z,width:"541",height:"99"})),(0,r.kt)("p",null,"Accept the terms of service. Answer as you wish for sharing your email, then enter your domain name. See the following example.\n",(0,r.kt)("img",{alt:"Generating your certificate",src:n(4222).Z,width:"654",height:"401"})),(0,r.kt)("p",null,"Update your security group rules to allow incoming HTTPS traffic from the anywhere IP: 0.0.0.0/0"),(0,r.kt)("h2",{id:"testing-your-configuration"},"Testing your configuration"),(0,r.kt)("p",null,"Open a web browser try to access your lab website using HTTPS. It should work!"),(0,r.kt)("h2",{id:"completing-the-lab"},"Completing the lab"),(0,r.kt)("p",null,"Take a screenshot of accessing your Apache server through a web browser using https. Submit them to the the folder on blackboard for proof of completion OR show your professor. The following Exploration Questions are for furthering your knowledge only, and may appear on quizzes or tests at any time later in this course."),(0,r.kt)("h2",{id:"exploration-questions"},"Exploration Questions"))}p.isMDXComponent=!0},5234:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},2665:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apt-search-certbot-fd753633c46f68dc6b05d2381fc5f616.png"},4222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/certbotregister-eeb99b0034b1340ccc02957d2181f6d7.png"},5550:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dns-a-record-86a87c1489e664cab048c95f136cc838.png"},9955:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/my-custom-domain-login-58df82ef944addbdfae5fc9fb450d493.png"},7746:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sudocertbotapache-01ad8a732a2cee9b53705b7187f0f97d.png"}}]);