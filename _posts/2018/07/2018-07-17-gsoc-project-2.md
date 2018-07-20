---
title: "Theming the Rocket.Chat iOS app (GSoC 2018 project)"
categories:
  - News
date: 2018-07-17 8:00:00
author: Isabella Russell
cover: /images/posts/2018/07/2018-07-17-gsoc-project-2/themes-cover.png
featured: true
---

_This series of blog posts will share the [Google Summer of Code](https://rocket.chat/docs/contributing/google-summer-of-code) projects that our 2018 cohort of students are working on. Community memebers are encouraged to join them in creating and testing these exciting new areas of features.<br/>Each project will have their open source repository listed.  Please feel free to drop in and say hello, or join in the action with your own issue or code contribution.<br/>_

## Project 2:Theming the Rocket.Chat iOS app <br/> by Samar Sunkaria
**Mentors: Matheus Cardoso, Filipe Alvarenga**

Welcome back to our 2018 GSoC blog series! Up next is Samar's project that aims to help users to choose from a variety of themes in the Rocket.Chat iOS app. All of us have different tastes in terms of color and style, and this project will help us make sure that a greater number of people really enjoy the app to its fullest potential!

The project started from an issue on GitHub, which then graduated to the ideas list for Google Summer of Code. This is where it was picked up and been brought to life over the summer.

### Just in time for iOS 3.0.0

This project is especially exciting as it forms part of the key features in our newest native app release, Rocket.Chat for iOS v.3.0!

As Samar says, now that the app is live with its new themes,

> it is fascinating to compare [the finished result] with the project goal originally submitted as part of the GSoC proposal.

In the original proposal Samar suggested

> adding the ability to theme the app on a per view controller basis including all the subviews contained in it.

This is actually the form the themes have taken and so Samar feels it is very exciting to know that the project stayed true to its original goals and intentions.

### Overcoming some technical challenges

One of the major technical challenges that potentially impeded this project was keeping all the theming-related code at arm’s length of the rest of the app's code. This is where Swift shines. Pretty much all of the code related to theming the application is declared in extensions, which also allowed us to provide some basic behavior for all the frequently used UIKit classes. <br/> This greatly reduced the code the team had to write to theme each view. In several cases, no extra code was required to be added to a view, to enjoy the benefits of being themed.

This project touches every part of the app, and anyone else working on the codebase should also be clued into working with themes, so a doc has been created to walk them through its usage
and implementation: <https://github.com/RocketChat/Rocket.Chat.iOS/pull/1602>


### Improving UX

This project is purely rooted in improving the user experience of the app. There are many factors that play into making an app enjoyable to use, and we really hope that this feature is one of them.

Samar's work also goes some way towards bridging the gap between the ultra-customizability of the web interface versus the mobile apps. With the completion of this project,it is hoped that we have inched closer in the direction of customizability of the iOS app.


