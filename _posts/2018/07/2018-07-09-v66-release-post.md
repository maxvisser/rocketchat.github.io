---
title: "Rocket.Chat 0.66 Released"
categories:
  - News
date: 2018-07-09 08:00:00
author: Rocket.Chat Team
cover: /images/posts/2018/07/2018-07-09-v66-release-post/0.66-cover.jpg
featured: true
---

Rocket.Chat is pleased to announce its release of Rocket.Chat 0.65 with the following highlighted features and changes: <br/> (Please note: bug fixes implemented by 0.66.1 and 0.66.2 are detailed further below)

### Breaking Changes

To prevent information leaks, all REST APIs that return users' information will have the field `services` removed. Check if you are using this field for any integration. For more details check out the [PR](https://github.com/RocketChat/Rocket.Chat/pull/10799).

### New features:

- IRC Federation
<br/>It’s now possible to use Rocket.Chat to send and receive messages from an IRC server. The IRC server can also join and participate on channels from the Rocket.Chat server. Direct messages between users from both servers are also available. <br/>This feature will be our inaugural Feature Spotlight, coming soon to the blog. Watch this space!

- Youtube Broadcasting
<br/>This new feature adds an integration between Rocket.Chat and Youtube Live, when enabled and set up, your channel owners will be able to broadcast their camera feed live to the Livestream feature which allows all users on the channel to watch a common stream.

![live broadcast start](https://user-images.githubusercontent.com/6303966/37366741-0f4431e4-26e0-11e8-9ab2-03dd1c057aea.gif)


For full configuration details, check out our [YouTube broadcasting docs](https://rocket.chat/docs/administrator-guides/youtube-broadcasting/#youtube-broadcasting).

- WebDAV (Nextcloud/ownCloud) Storage Server Option
<br/>New option for file storage using WebDAV that allows any storage service compatible with WebDAV to be used as storage for Rocket.Chat uploads and avatars. NextCloud and OwnCloud are the 2 main services tested using this new integration option.

![WebDAV file storage](https://user-images.githubusercontent.com/14157973/41051962-3a63ef5e-69c0-11e8-9a8a-76ed36308dfb.png)

- Don't ask me again checkbox on hide room modal
<br/>Now it's possible to remember your choices in certain confirmation modals, for example, you can bypass the confirmation everytime you want to hide a chanel. It's possible to revert the `Don't ask me again` at user's profile page.

![don't ask me again checkbox](https://user-images.githubusercontent.com/9200155/40859260-925dd0f6-65b7-11e8-97fe-dc00de049044.gif)

- Optional AWS access key and secret optional for S3 uploads
<br/>It's now possible to use AWS S3 for storage without credentials since the AWS SDK will try to receive the credentials automatically in certain cases, when running in a EC2 for example.

- Updated WeDeploy deployment
<br/>Users can now deploy to WeDeploy by just clicking on `Deploy at WeDeploy` at our Readme.md file.

![WeDeployment](https://user-images.githubusercontent.com/23219848/40334544-404c1ce8-5d13-11e8-939b-d84c2d82696f.png)

- Button to remove closed LiveChat rooms
<br/>Sometimes the LiveChat administrators want to remove the LiveChat closed room history from their database. This is now possible when the user is logged in as a LiveChat manager. To remove a closed LiveChat room, the user only needs to navigate the sidebar in LiveChat -> Current chats.

![new button for closing LiveChat rooms](https://user-images.githubusercontent.com/2067649/38212655-ea53a4b8-3694-11e8-9c6e-1c3a53bf7b2d.png)

- Send LiveChat visitor navigation history as messages
<br/>The purpose of this feature is to send the navigation history of the LiveChat visitor as a message.
Using this feature, the agent who joins the chat will be notified each time the visitor's navigation is changed.
By default, this feature is disabled. To activate it, simply access the LiveChat administrative panel:

![LiveChat visitor nav history](https://lh6.googleusercontent.com/zMLr4cd0bfuZGCUJgwn_alRbJa0kH8oz-2s0gwjuAM1YLY43AGvnz4wLZL2DM6si42nYedOx898QjsMKGefhbfKPdvXx7pxOWcWA_u--NIj-C3wReijhLATVYB43YTxMFp6kfIyg)

So, the information about the navigation will be displayed as a message into the LiveChat room, but the visitor will not be notified:
![message notification](https://lh5.googleusercontent.com/M8qZ6EQBc36dV1GqnFNW5iEyHRFiNMBbGP8cOIG1knVNPmn6ur8dH_G1IqMt8E0VJEL3KrZO20qdNRIA-p4csLoLm5OTQRCdmEOEOQdCNBP2-qCchx405KJ35LOktPH94cfkVfhE)

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@gaetanocessati?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Gaetano Cessati"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Gaetano Cessati</span></a>
