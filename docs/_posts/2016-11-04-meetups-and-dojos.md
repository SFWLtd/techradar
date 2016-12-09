---
layout: report
title: "October 2016 Update - Meetups and Dojos!"
date: 2016-11-04
---

Overview
--------

After a month off, due to learning how to take care of miniature humans, the TechRadar returns.
First off this month, there’s been an increased amount of sales activity for modern bespoke development work. Following our success with the Collation System for the EU Referendum for the Electoral Commission, and through the great work I’m seeing from people helping out with initiatives of picking up new technologies and sharing information on Yammer, we’re putting a much more credible picture together for winning custom development work (particularly GDS-aligned) with new clients within Central Government. In fact I was at a pitch today with the MoJ National Probation Service which hopefully will provide an opportunity for us to test out our learnings.
The typical technology stack that we see often in these proposals looks like:
* Angular 2.0 JavaScript Framework or JVM MVC front-end
* JVM backend (this is where I believe Scala and Kotlin could be best suited)
* Micro-service architecture
* SQL through Dockerised MariaDB containers (though we should keep tabs on SQL Server’s progress towards being workable on Linux) or the SaaS equivalents on each cloud provider – RDB for MySQL on AWS and SQL Azure
* Deployments to AWS predominately when specified, Azure when not

Our focus over upcoming months therefore should continue on getting a handle with the above stack. Ensuring we sound credible in pitches and in sales proposals, seeking opportunities to trial the above, understanding the frameworks we could use and also understanding non-functional considerations across this (eg security, performance, testability etc). I’m always looking for people to help contribute to the above, so please get in touch with ideas that you have to help build our capability in this area! 
The Content and Collaboration practice have been well and truly embracing VSTS as well as getting to grips with the SharePoint Framework. This should make it much easier to standardise and share dev practices and learnings across here and Digital Engagement. It’s really great to see the improvements being made here.
With VSTS, our trial has now extended to CRM with [NRW Timber](http://project-radiator-angular.azurewebsites.net/project/NRW17), where Najwa and team and leading the way with discovering ever better ways to represent the team flow, and embracing ways to provide better shared awareness across distributed teams. We also now have a SharePoint project with the Home Office, Plaza, and an upcoming project with the MOD ready to go in VSTS. There are many new features with VSTS that should make running Agile projects with continuous delivery as well as developing for the above stack much simpler. If you are starting a new project soon then please get in touch to see how we can use VSTS for it.
This month’s TechRadar incorporates this information, as well as some of the latest findings that you all have been posting on Yammer and sharing in Show and Tells. The more information we have out there, the more likely we’ll be able to win more exciting new opportunities in the future!

Backend & Modern Architectures
------------------------------

This month Chris Smith ran a JVM Dojo in the Woking office. This focused on [Gradle]({{site.baseurl}}/gradle), [Scala]({{site.baseurl}}/scala) and [Kotlin]({{site.baseurl}}/kotlin) development in intelliJ. As mentioned above, we are seeing a lot of DOS (Digital Outcomes and Specialists) opportunities for modern JVM developments. We see Kotlin playing a big part in this, as it’s C#-like syntax and feature-set seemingly is providing a low learning curve for those of you more comfortable with .NET development. We’ve been trialling a number web frameworks for the JVM so that we’re confident at how we’d develop in these cases, you can see an example of Kotlin with DropWizard and the Dependency Injection library Kodein [here](https://github.com/alondero/kotlin-dropwizard-kodein). [Grails]({{site.baseurl}}/grails), Spark as well as Spring Boot with Thymeleaf (what we used for the [EU Referendum Results Collation System](http://project-radiator-angular.azurewebsites.net/project/TEC10)) are all candidates that would be good for you to explore more and share. 

![JVM Dojo]({{site.baseurl}}/assets/img/2016-11-04-meetups-and-dojos/jvmdojo.png)

There was a great demonstration of [SharePoint framework]({{site.baseurl}}/sharepoint-framework) and [TypeScript]({{site.baseurl}}/typescript) from Mansi Desai and Krunal Shah last week. There seem great synergies between SharePoint development and that of developments in bespoke development land at the moment. Let’s ensure that we collaborate together to maximise our learning.

Front-end
---------

This month we’ve done a lot of exploration into modern front-end development. Matthew George has been comparing [Angular 2]({{site.baseurl}}/angular2) and [React with Redux]({{site.baseurl}}/angular2) first-hand. General consensus is that whilst React is undeniably powerful, the learning curve seems quite steep. On the flip side, it seemed reasonably simple to get a quick application set up using Angular and Gulp, we’ve got two examples for you to look at with this stack:

* [https://github.com/SFWLtd/angular2-demo](https://github.com/SFWLtd/angular2-demo) - A simple application showing dynamic binding within Angular 2, and using Gulp to build and configure
* [https://github.com/pathiknd/live-tracker](https://github.com/pathiknd/live-tracker) - Another example from Pathik Desai using Angular 2 

At Microsoft’s Future Decoded this week, they showed an example of how Angular 2 can be progressively enhanced simply with a new open-sourced ASP.NET Core template from Microsoft. Speak to Matt George if you’d like to know more. It would be really great to get some examples set up here in the office as this could be a powerful approach for our customers.

Last month we added Webpack to the radar, this month we discovered [BrowserSync]({{site.baseurl}}/browsersync). This has all of the benefits of Webpack, but further aids the prototyping phase by controlling the dynamic reloading of all clients who are connected to a test server. As before, you can change something like a colour definition in a SASS file, and the site in the browser automatically updates on the fly without a refresh/rebuild etc. For a small project such as the dashboard it’s perfect, we should continue to assess its usage for developing the types of work we typically undertake. Along with Angular it has support for a wide range of languages and platforms, including .NET core.


DevOps
------

Our roll out of [VSTS]({{site.baseurl}}/vsts) continues, and more projects are now taking advantage of the release management pipelines that it affords. Phil Smith has been experimenting with this in the Content & Collaboration practice on the back of Plaza’s usage of it for the rest of SharePoint and its framework. It has such a simple learning curve that I even included a short afternoon session with our new graduates where we set up an end to end pipeline for deploying a JVM application to Azure backed off every commit to a VSTS Git repository with limited prior experience of Java, Gradle, VSTS or Azure!
If you are starting a project soon, please get in touch so I can help you take full advantage of all the benefits it provides!

To further improve the determinicity of our application builds and releases we should consider how we can ensure that we centralise and automate configuration as well as improve portability (a key factor in GDS’ assessments). VSTS build pipelines help this, but we can also consider how build automation tools such as [Gulp]({{site.baseurl}}/gulp) (JavaScript and derivatives) and [Gradle]({{site.baseurl}}/gradle) (JVM) can help. 

Finally, I’ve been impressed by the take up of interest in developing application against Azure, we should also note that many of our Central Government clients deploy applications into AWS, therefore it would be great to see some research and information sharing to this platform too. Similar to Azure, if you [sign up](https://aws.amazon.com/free/) you can get access to Free Tier services for at least 12 months. This provides access to many of their PaaS and SaaS offering such as DynamoDB, Lambda, SQS and SNS. Get playing today!

User Centred Design
-------------------

We continue to see a strong interest in our user research, UX, Discovery and Design capabilities from existing and potential clients.  Our ability to complement high quality engineering with service design, user need analysis, and interaction and UI design is a key differentiator for us.  To promote our capabilities, we held our first UX meetup and hosted a free workshop looking at how various tools can improve the outputs, or reduce the cost, of Discovery.  Feedback from both has been very positive and we are working with sales and marketing team to schedule the next workshop session.

![SFW UX Meet]({{site.baseurl}}/assets/img/2016-11-04-meetups-and-dojos/sfw-uk-meetup.jpg)

Snapshot of the radar
---------------------
![October 2016 Radar]({{site.baseurl}}/assets/img/2016-11-04-meetups-and-dojos/radar.png)