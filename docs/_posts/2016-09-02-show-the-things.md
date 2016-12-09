---
layout: report
title: "August 2016 Update - Show the things!"
date: 2016-09-02
---

Overview
--------

This month starts with a very apt tweet from GDS:

![Show the thing!]({{site.baseurl}}/assets/img/2016-09-02-show-the-things/ShowTheThing.png)

The main way in which we will be able to continue to adapt and keep pace with the ever changing nature of our industry is to share our findings. The TechRadar will help increase the awareness of technologies that are relevant to us as an organisation developing Design-Driven Digital Services for the public sector. Yammer is one vehicle for us to share the information, but I am always open for new and innovative ways of sharing our innovation. However we do it, the main focus is on sharing little and often and seeking ways of getting more people involved wherever possible. 

This month is the first update to the TechRadar. There have been a few changes, additions and movement on the radar. This is all possible through work that people have done in assessing and trialling new technologies, and crucially then sharing that information via Yammer and in Show and Tells. In order to help understand more about the information that has been shared, the radar has been updated so that when a blip is clicked it will provide a link to the topic (hashtag) on Yammer. If you could add hashtags or explicitly add a topic to your post on Yammer in the future it will help people track the knowledge in future. 

Backend & Modern Architectures
------------------------------

A number of backend technologies have moved around the tech radar this month for a variety of reasons.  Moving in the ‘positive’ direction you will find [.NET Core]({{site.baseurl}}/dotnet-core) which is out of the starting blocks and being trialled by the Baroda staff on our internal Travel Desk application. Dhirajsinh has written up an [article on Yammer/Wiki](https://www.yammer.com/sfwltd.co.uk/#/Threads/show?threadId=756735265) about their experiences from this. Early indications are that the framework itself is suitable for use on small applications where we are not pushing its limits, though the tooling is still maturing and fundamental changes are expected in the future (eg project.json). For now, we should be patient in adopting this fully until this the tooling is sorted.   
Moving into the assess arc is [Python]({{site.baseurl}}/python). A number of prospects over the past couple of months have asked for our experience of this, for example with the ONS and Land Registry. This also tends to go hand-in-hand with data-mining and analytics, so we are currently assessing the feasibility of using it in the future. Let us know if you have any previous experience of Python or are keen to explore the use of it internally.  
JVM technologies are also in hot demand for recent sales proposals. We have both [Kotlin]({{site.baseurl}}/kotlin) and [Scala]({{site.baseurl}}/scala) on the tech radar. As mentioned last month, our trials of Kotlin have so far gone well, and extended over to India, but this month we’ve also been investigating Scala. Benefits appear to be quite strong for data manipulation, but we’ve concerns over practical usage. It is remaining in trial while we determine whether it has a use in our technology stack.  
In other news, the new [SharePoint framework]({{site.baseurl}}/sharepoint-framework) seems to be building momentum. This provides a new SDK for developing web parts with SharePoint with a low barrier using JavaScript, or RESTful APIs. It would be great to hear more from people trying this out.  

Front-end
---------

We’ve been using [React]({{site.baseurl}}/react) for a while now on the internal project, Show The Things, and so far everyone has been impressed by it. It’s highly testable and easy to use, but there are still doubts as to how suitable it is for Public Sector apps. As Chris Jibb [pointed out](https://www.yammer.com/sfwltd.co.uk/#/Threads/show?threadId=744238103), we still need to investigate server-side rendering too, to see if we could potentially use it for projects that need to work with JS disabled on the client side.  
Webpack has been added to the radar this month. We’ve been using it to build the dashboard for the show the things, and it’s shown a lot of promise. Improves performance of site through smart bundling, makes code much tidier (it’s not flooded with JS and CSS references), has nice configuration, does SASS compilation (via a sass loader extension), and most importantly it does all of that with hot reloading. You can change something like a colour definition in a SASS file, and the site in the browser automatically updates on the fly without a refresh/rebuild etc. For a small project such as the dashboard it’s perfect, we should continue to assess its usage for developing the types of work we typically undertake. Along with React it has support for a wide range of languages and platforms, including .NET core.  
Not everything out of the TechRadar needs to be a positive message and unfortunately [Play Framework]({{site.baseurl}}/play-framework) is our first casualty. Charlie Lusty has had a number of frustrations deploying a Play application to Azure. Looks like it would be problematic to use, and therefore this has been pushed to the Hold bucket

DevOps
------

We’ve now started rolling out [VSTS]({{site.baseurl}}/vsts) to projects here at SFW, with NRW Timber being the next to trial this. We’re hoping to take advantage of some of the learnings from Plaza with regards to continuous deployment and VSTS’s new built–in release management over to future projects here. [Docker]({{site.baseurl}}/docker) experience is asked for from a variety of our clients in sales proposals, so our work at spreading the knowledge and increasing adoption of Docker continues. Following Carlo’s Dojo, we have used this in a variety of ways internally so far – both in quickly spinning up dependant applications, as well as containerising and deploying applications written for .NET Core and the JVM (Kotlin), as well as containerising third party applications like the GOV Notify application (Python). We should consider Dockerising our applications for future projects to increase the portability and ease of deploying applications so consider this when working on new work going forward. To manage these containers, we need an easy solution for keeping tabs on them, easily spinning up and spinning down in an agile manner. Rancher appears to be one option for us to use there. We should review this further and understand the practicalities of using it. Further, we’ve seen a number of bids recently asking for experience with [Cloud Foundry]({{site.baseurl}}/cloud-foundry). If anyone has any experience with that let us know! 

User Centred Design
-------------------

This month we welcome Toni Kim as our new Senior Interaction Designer. As mentioned last month, our tripartite capability in this space forms of User Research, Interaction Design and Content Design, as we develop a credible and demonstrated capability to deliver User Centred Design.  
We often get asked about accessibility and our approach to developing an accessible site. [Tenon.io]({{site.baseurl}}/tenonio) has been suggested as an approach for automated analysis of accessibility requirements within a site.  
Finally, you may have seen that we’re hosting our first ever UX meet-up this month on the 27th. We’ve run a number of successful meet-ups over in Vadodara in recent months, and want to start running more in Woking. They are a good opportunity to find out more from and network with the community, showcase our capability to others, and also promote some of the good stuff we’re doing to prospective SFWers. We are also planning a Digital Engagement Education Masterclass Series of workshops focused on engaging clients with how to use user-centred design techniques in Discovery. Get in touch if you’d like to know more about either of these!

Snapshot of the radar
---------------------
![August 2016 Radar]({{site.baseurl}}/assets/img/2016-09-02-show-the-things/radar.png)