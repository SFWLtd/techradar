---
layout: report
title: "Continuous Improvement to Continuous Delivery"
date: 2017-02-02
---

Progress this month
--------

With Christmas and New Year out of the way we're seeing a renewed level of activity for prospective new work. Increasingly, we are seeing ever more requirement from clients requiring us to have some level of ability in Continuous Delivery technologies and approaches, which has influenced the rise of tools like [Kubernetes](kubernetes.html) and [Minikube](minikube.html) on the radar this month.
We've started work on a new internal project which is looking to bring together all of what we've learnt over the past few months together. LineUp aims to provide a simple interface for sharing your skills and interests with your colleagues. We're building the front-end in [Angular](angular.html) (with Angular 4 around the corner we want to make sure we're on top any considerations this provides), the back-end written in [Kotlin](kotlin.html), with the components containerised orchestrated by Kubernetes. 

Also, this month we've started to look at better ways that we can collaborate across the wider Civica Digital, and welcomed a number of our Bath colleagues to the office earlier this week to discuss how we could extend our initiatives across more of our offices.

Backend & Modern Architectures
------------------------------

This week, David Raine and I attended a Microsoft Azure Technical Day. As we've previously said, identifying cloud patterns and understanding the capabilities of AWS and Azure will help us deliver much more effective and cheaper architectures for our clients. During the day we learned more about PaaS approaches such as Logic Apps, Service Bus, [App and API Services](azure-app-services.html) and [Functions](azure-functions.html). For situations where we need to build a lightweight workflow based application, and where Dynamics may be a little heavy a simple Logic Apps application which hooks into a number of Azure Functions may provide a simple and very cost effective Serverless approach.
[Serverless](serverless.html) forces teams to focus more on the speed and efficiency of the code, the incentive is to use the time saved in bypassing infrastructure on developing efficient code. Developers able to architect and write good functions which can be reused across multiple systems could see big benefits, along with those looking to rapidly prototype components.
Both [AWS Lambda](lambda.html) and Azure Functions provide native support for C#, Java, Python and node.js (and actually support multiple other languages through node shims). It is possible to take an existing project, make a one line change in the Startup class to hook into the Lambda invocation, and immediately reap the serverless benefits! It would be good to do more investigation before adopting this. To get the best benefits, it is likely that we'd need to do a little rearchitecting of existing .NET solutions

Finally, our experience of [Kotlin](kotlin.html) is currently been very positive, and our current thought is that we would prefer to use that than [Scala](scala.html) if we were to take on a new JVM project. Our feeling is that the learning curve for Scala, and the opportunity to write unreadable code is worrying, certainly in contrast to the readability and similar syntax to C# that Kotlin has. With seemingly few opportunities asking for Scala of late - it has been relegated to the hold bucket.

DevOps
------

Over the past few weeks we have been looking into Kubernetes. For the uninformed, Kubernetes is a solution to the problem of container management. Have you ever asked the questions: 

* how do I deploy my containers to a production ready, secure environment? 
* How do I make them play nice with each other? 
* How do I make them scale to meet changing demands? 

Well, a good answer to all of those questions is to set up a Kubernetes cluster. It was remarkably simple to create one in Azure and it looks like there are similar ways to easily stand one up on AWS. You can even set one up locally (look for minikube), it’s very easy to try out! With the Home Office now using this as their primary hosting platform it is something that we should definitely be getting comfortable with.

Internally, we're also looking to dogfood these approaches and continue to seek opportunities to start Dockerising our internal applications and managing these with Kubernetes.

We also have a new book in the office:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">New book just arrived ☺️ <a href="https://twitter.com/hashtag/devops?src=hash">#devops</a> <a href="https://twitter.com/hashtag/continuouslearning?src=hash">#continuouslearning</a> <a href="https://t.co/asdWFrxech">pic.twitter.com/asdWFrxech</a></p>&mdash; Adam Londero (@adamlondero) <a href="https://twitter.com/adamlondero/status/826015108040097792">January 30, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

If you're interested in reading more then feel free to borrow it once I've finished :-)

Front-end
---------

We've started using [Yarn](yarn.html) as an alternative to npm (Node.js's built-in Package Manager) or Bower. In conjunction with [Gulp](gulp.html), our approach to Angular 2+ development is taking more shape. 

By dint of using popular modern libraries, frameworks and approaches, we're also reaping rewards at recent security and pen testing that we've been subject to which has been another plus. 

User Centred Design
-------------------

We welcomed our new Senior User Researcher, Nuno Sousa, to SFW this month. 

Snapshot of the radar
---------------------
![January 2017 Radar]({{site.baseurl}}/assets/img/2017-02-02-continuous-improvement-to-continuous-delivery/radar.png)