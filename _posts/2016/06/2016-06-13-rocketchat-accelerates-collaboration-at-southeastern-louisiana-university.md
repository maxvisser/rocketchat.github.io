---
title: "Rocket.Chat Accelerates Collaboration at Southeastern Louisiana University"
date: 2016-06-13 14:04:15
author: Marcelo Schmidt
cover: /images/posts/2016/06/rocketchat-accelerates-collaboration-at-southeastern-louisiana-university/SU.jpg
---

![SLU_logo.jpg](/images/posts/2016/06/rocketchat-accelerates-collaboration-at-southeastern-louisiana-university/image01.jpg?)

![](/images/posts/2016/06/rocketchat-accelerates-collaboration-at-southeastern-louisiana-university/image00.jpg?)

We recently spoke with Matthew Gill, a System Administrator at Southeastern Louisiana University where they have adopted Rocket.Chat for collaboration across the technology development team. In this post we're looking at how and why they landed on Rocket.Chat as the best solution, to give you some insight into it could be deployed in your organization.

"Generally speaking, our teams had been using ICQ as the go-to service for internal communication," says Matt. "But the biggest problem with that was the lack of cohesion and centralized communication possible on the platform. You could send individual private messages and there is a rudimentary chat-room-like functionality, but the solution itself felt lacking."

After that they tried Google Chat, but most team members went back to ICQ pretty quickly. Matt tried to encourage the teams onto more innovative platforms for communication, but funding was limited: "Departmental funding was never allocated to purchase a solution, so we effectively needed something free."

Slack was up next, and the team used that for a few months before realizing that the free version wasn't going to achieve everything they needed. "We liked the features, but would never be able to afford it," Matt explains. They tried freeware including ChatGrape and Glip, but again they weren't up to the tasks at hand, and in addition the team ran into problems inherent to using PaaS.  "Glip's service wasn't as accessible as we needed it to be," says Matt, and required more admin, since team members were creating different accounts.

"In the end I brought three standards to my supervisor. The communication platform to replace everything we were using up until then needed to be locally hosted, configurable (open-source would be great), and able to use our Active Directory authentication (ldap)."

In the meantime, Matt came across the okTurtles blog entry [Five Open Source Slack Alternatives](https://blog.okturtles.com/2015/11/five-open-source-slack-alternatives/), which led him to Rocket.Chat.

"I remember initially fiddling with MatterMost," he says. "But when I jumped into the public RC open server and tested out the features, I was a believer!" That version was a little buggy at the time, he says, but he immediately saw the potential.

Matt created a VM to host the Rocket.Chat and MongoDB server, and installed and configured the system without container management. In retrospect, he says he might have deployed using Docker, but hosting the system on a VM allowed them to migrate easily to an existing Disaster Recovery site, create near-instant clones, which was useful.

The team was slow to come over to using Rocket.Chat at first, so Matt arranged meetings with all the team-leads in the department, and it was fully implemented, and is now sitting at nearly 100% adoption by all teams.

"Our department is separated into three teams; Infrastructure, Services, and Software," Matt says. "Despite being split into separate teams with seemingly clear duties and responsibilities, frequently members of different teams are found working on solutions outside of their original team. Cross-collaboration is important, and proper communication helps immensely.

"From a software design aspect, we've integrated GitLab and Active Directory automation into a channel in Rocket.Chat, which allows those responsible to quickly get updates on changes in important repositories, and status changes affected by automation, all without ever reading an email.

"Intra-team communication has benefitted greatly, and thanks to the quick search feature built into Rocket.Chat users are easily able to recall information sent to them from other team members. This is a big change from sticky-notes and poorly-subjected emails!

"Perhaps the most noticeable change is that our teams are finally able to collaborate using easy private groups and channels. Ideas are communicated better and quicker, development time has benefitted, and team participation has risen. Despite only having about 60 active members, over 44,000 messages have been sent, spread over 300 rooms and channels and over 200 direct message rooms!

"There are so many awesome features packed into Rocket.Chat," Matt explains. At SLU they've been using Off-The-Record, OTR, WebRTC (Audio/Video Chat), and will likely begin to use LiveChat.

"All in all, Rocket.Chat is a fantastic, feature-rich communication platform that has greatly increased productivity across the board for all teams involved," Matt says. "I look forward to the features outlined in the posted roadmap, including the native mobile applications and XMPP support!"

So do we, Matt! A big thanks to Matt and the teams at SLU for their participation, patronage and compliments.

If you're interested in contributing a customer story to our blog, [give us a shout](https://rocket.chat/contact)!
