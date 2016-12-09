---
layout: report
title: "Introducing our new TechRadar"
date: 2016-07-21
---

Backend & Modern Architectures
------------------------------

For backend systems on the tech radar, you will find the classic SFW technologies of .NET and Java EE on hold. Why? We already have a wealth of experience with these, plus, alongside other popular technologies such as Python, the industry appears to be slowly moving in favour of 'modern' programming languages and tools designed with the cloud in mind. We are already adopting [Azure App Services]({{site.baseurl}}/azure-app-services) for hosting with its wide support for both languages and DevOps, [Spring Boot]({{site.baseurl}}/spring-boot) to rapidly build Spring-based applications, [Swagger]({{site.baseurl}}/swagger) for describing RESTful APIs and [MariaDB]({{site.baseurl}}/mariadb) for our open source SQL needs.

In the burgeoning cloud-focused world, the portability of the JVM is proving to be a big draw, and we are seeing an increase in the popularity of languages that utilise it. Two such languages appear on our radar to trial. [Kotlin]({{site.baseurl}}/kotlin) is “a mashup of the best features of C# and Java”, making it a great candidate for SFW with strong backgrounds in both. Initial trials have been very promising - you can read more about in it David Raine’s recent Yammer post. [Scala]({{site.baseurl}}/scala) is a powerful functional programming language benefitting from access to the Java libraries. It is known to have a steep learning curve, but with big payoffs in efficiency. 

Outside of languages, we are following the same cloud-focused approach as our clients. We are investigating [Azure Functions]({{site.baseurl}}/azure-functions) and [AWS Lambda]({{site.baseurl}}/aws-lambda) for running small functions in the cloud and [Azure SQL]({{site.baseurl}}/azure-sqldb) for running our SQL databases as a service, plus [MongoDB]({{site.baseurl}}/mongodb), which we have already trialled on a previous project with Tempus Energy, as a NoSQL database option. 

Technologies we are monitoring for potential use later include [.NET Core]({{site.baseurl}}/dotnet-core) as it emerges in release 1.0 as a true multi-platform language. We should definitely assess this further to understand our ability to quickly take advantage of our existing skills in the modern domain, but shouldn’t stop us from adding breadth to our toolkit.

Architecturally, we are also considering the benefits of microservices, which you can read about in Chris Smith’ latest microservices wiki article

Front-end
---------

[SaSS (Syntactically Awesome Stylesheets)]({{site.baseurl}}/sass) is a CSS pre-processor which helps keep style sheets concise and allow us to modularize our code while offering additional features not available with standard CSS.  The main competitor to SaSS is [Less]({{site.baseurl}}/less-css).  The reason we are adopting SaSS is because we think it is better, it appears to have more traction and increased usage externally, and quite importantly GDS have adopted it. Less finds itself classified at Hold.

A recent Code Jam in India saw us assess and trial [node.js]({{site.baseurl}}/nodejs) as a rapid approach to developing lightweight web applications. GDS are keen on node but it is important for us to understand the right way for us to use this, it’s likely usage is as a backend for front-end (BFF) rather than a full-scale application. This is very close to reaching adopt status, so if you’re interested in helping out further then let us know.

[Thymeleaf]({{site.baseurl}}/thymeleaf) is a modern server-side JVM template engine.  We used it successfully on the Electoral Commission project, allowing a .Net developer to work on the presentation layer of a JVM application.

We are trialling [React and Redux]({{site.baseurl}}/react) for front-end development.  React was built by Facebook and is a JavaScript-centric library (compared to the HTML-centric frameworks of Angular, Ember, etc.).  It will be interesting to see how we get on with it compared to the new Angular 2 from Google (currently in Assess in our radar reflecting its pre-release status). One area of caution however is understanding how, if at all, they could be used with GDS’ approach to providing services accessible to all.

[Python with Django]({{site.baseurl}}/python) and [Ruby-on-Rails]({{site.baseurl}}/ruby) are currently on Hold. Whilst many Government departments, and GDS, are big users of these languages and MVC frameworks, for now the step from the traditional .NET ecosystem to these is greater. Therefore, initial focus has been on languages with less of a learning curve. This may well change in the future, so if you have an interest, or previous experience at these then please let us know!


DevOps
------

In the modern world of agile development quick deployments are key. All applications have different requirements, with different dependencies on third party software, such as application runtimes (node, Java, .NET Core) or database engines (MongoDb, MariaDb, PostgreSQL). Being able to define your infrastructure as code, and package your application to run anywhere is a big step forward. Following the successful usage on the Electoral Commission Results Collation project, we believe Docker is the preferred option for “containerising” your application, providing a bunch of benefits:

* **Isolation** - Containers run in a high level of isolation on the host OS. Applications that previously could not run together on the same system can now share one host.
* **Scalable** - Containers provide scalability. Multiple instances of the same application can be scaled up behind a load balancer.
* **Security** - Containers add a level of isolation between system components allowing for a higher level of security. 
* **Configurable** - Containers allow for configuration values to be provided, allowing for different behaviour across environments. 
* **Portable** - Containers are also very portable meaning applications can be moved to different infrastructure, even across to different cloud providers.

Most applications will not be a single container and instead rely on multiple containers, such as database, frontend, backend, proxy, etc. To orchestrate multiple containers, we are looking into two tools, [Kubernetes]({{site.baseurl}}/kubernetes) and Docker Swarm. Kubernetes is the older of the two and is made by Google. It uses its own API and CLI. It is of note that the Home Office for example are contributers to Kubernetes and so we see experience of this asked for in bids. Docker Swarm is native clustering for Docker, exposing the standard Docker API.

We are currently trialling [VSTS]({{site.baseurl}}/vsts) for build services. The new build pipeline replaces the legacy XAML workflows, providing more flexibility in creating build pipelines, and supports more than .NET with MSBuild. Java projects can be built using Maven, Gradle and Ant, Node.js with Grunt and Gulp, and many more integrations are available.

We are also looking into other options. [LambdaCD]({{site.baseurl}}/lambdacd) is a toolbox to enable you to build your own build server and build pipelines in code, providing version control, tests and refactorings. [Concourse CI]({{site.baseurl}}/concourse) is designed to be simple. There are tasks, resources, and jobs which compose them. Pipelines are defined in simple yaml files. Finally, the [Jenkins 2.0]({{site.baseurl}}/jenkins2) release brings in build pipelines as a first class citizen, removing the need to install many third party plugins to get the required functionality.

User Centred Design
-------------------

The last six months has seen us develop a credible and demonstrated capability to deliver user research to our clients.  This is the first leg of the SFW tripartite UX capability (User Research, Interaction Design, and Content Design).  

Our aim is to adopt a Lean UX approach to how SFW delivers projects, building in UX from the outset (bid phase) and running in a way which complements Agile delivery with less emphasis on writing long reports and greater focus on the actual experience being designed. 

Service Design is a multi-disciplinary method for improving the quality of a service (both offline and online) from both the employee and customer perspective. A wide range of disciplines come together, such as ethnography, consumer research, interaction design, product design, industrial design, service marketing and corporate strategy.  This is going on all over Government and we are able to help our clients with this.  

Surveys are a cost effective way of engaging with a large number of your target audience.  Helen Shore recently wrote an insightful wiki post highlighting her experiences with creating a survey which you can read here (https://wiki.sfwltd.co.uk/wiki/index.php?title=Creating_a_survey_in_SurveyMonkey). We have a paid-for licence for Survey Monkey which can be used for this.  Our interaction designer will be joining early August, and she will be using [Sketch]({{site.baseurl}}/sketch) and [UXPin]({{site.baseurl}}/uxpin).   

There are a number of tools awaiting trial, such as [Axure]({{site.baseurl}}/azure) (prototyping alternative to UXPin), [Loop11]({{site.baseurl}}/loop11) (for unmoderated online user testing), [Optimal Workshop]({{site.baseurl}}/optimal-workshop) (improve your site navigation, define information architecture, understand first-clicks, capture qualitative research, and more), [Zoom]({{site.baseurl}}/userzoom) (moderated online user testing), and [InVision App]({{site.baseurl}}/invision) (transform static screens into clickable, interactive prototypes). 


Snapshot of the radar
---------------------
![July 2016 Radar]({{site.baseurl}}/assets/img/2016-07-21-introducing-our-new-techradar/radar.png)