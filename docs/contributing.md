---
layout: default
title: Contributing
---

Contributing
============

To the TechRadar
----------------

The source code behind the TechRadar as well as this documentation can be found on [our GitHub account](https://github.com/SFWLtd/techradar/). If you would like to make a suggestion for what goes on or moves on the TechRadar, or add some information to any of the blips on the radar there are many ways for you to do so:
* Clone the code and raise a pull request (see Adding a new blip or Creating a new post below)
* Raise an issue on GitHub - [for example](https://github.com/SFWLtd/techradar/issues/3)

To our initiatives
------------------

As mentioned in [Richard Press’ Intranet announcement](https://intranet.sfwltd.co.uk/Lists/Announcements/DispForm.aspx?ID=459), we’re always on the look-out for interested people to help us progress our vision for helping SFW adapt to the industry, and put our best foot forward when winning new work.
If you have time available, and Nick doesn’t have anything for you, speak to Adam. Tell us what you are interested in and we will connect you with someone leading in that area.  There are more technologies, techniques, and approaches in existence and evolving in the marketplace than any one person can keep abreast of, so we need to harness the ability of all of you, to discover, research and learn – and critically to share the information you have found. This could be a Yammer post, a wiki article, maybe also a slot at a show and tell, tech evening, or full dojo.  Documented learnings don’t have to be war and peace, but equally copy and paste from Wikipedia isn’t going to cut it. We are looking for people to show insight, applied to our domain and customer base, which will be of genuine benefit to others.

Raising a Pull Request
======================
Adding a new blip
-----------------
To add a new blip to the radar, currently two things need to be done:
0. Create a markdown page under the corresponding section (_approaches, _languagesandframeworks, _tools, or _platforms). Copy an existing blip for guidance. To display a Yammer feed about the blip add in the corresponding Yammer Hashtag Topic Id in the "yammerid" field.
0. [Edit the radar data - radarData.js](https://github.com/SFWLtd/techradar/edit/master/docs/assets/js/radarData.js). Add the blip under the corresponding category (for ease of use these are ordered from most central to furthest out and grouped into the adopt, trial, assess and hold categories as well as by quadrant). The blip on the radar should automatically link through to the page created above if the name field is identical - if not you can provide an alternative alias using the "docname" field. [Here's ab example previous commit of vue.js being added to the radar](https://github.com/SFWLtd/techradar/commit/24fa1e19ab04cef38781d45f946d82800630a6f8)

Creating a new post
-------------------
All posts are stored in the _posts folder. Posts are ordered chronologically so make sure that the date field is correctly added in the metadata.
