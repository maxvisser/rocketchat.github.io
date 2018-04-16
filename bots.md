---
layout: en/default
class: bots
title: Rocket.Chat Bots
permalink: /bots
redirect_from: /bots/
---

<section class="hero">
  <div class="wrapper">
    <h1>Rocket.Chat Bots</h1>
    <em>The ideal platform for workflow and community support automation</em>
    <!-- <br><em>Help us build the next generation of bot tools for Rocket.Chat</em> -->
  </div>
</section>

<section>
  <div class="wrapper">
    <div class="left">
      <img src="{{ site.url }}/images/bots/bot-lovers-cropped.jpg" alt="" style="max-height: 230px;"/>
    </div>
    <div class="right">
      <h2>
        Improving the way we do bots
      </h2>
      <p>
        We want to make it easy for bot makers to provide the best solutions and experience for their community.
      </p>
      <p>
        We’ve assigned a team and in the coming months will be producing new features and dedicated documentation for bots.
      </p>
      <p>
        We'd love to get your input...
      </p>
      <a class="button primary" target="_blank" href="https://rocketchat.typeform.com/to/dK87Cl">Take the Bot People survey</a>
    </div>
  </div>
  <div class="clear"></div>
</section>

<section>
  <div class="wrapper">
    <!--
    <div class="left">
      <h2>Documentation</h2>
      <p>
        Learn to <a href="">administrate</a> bots and their access to your users and channels.
      </p>
      <p>
        Our <a href="">adapter docs</a> support community development for all popular bot builders and frameworks to run on Rocket.Chat.
      </p>
      -->
      <!--
      <h2>Design guide</h2>
      <p>
        To give our community a head start in creating the highest standard user experiences, we’re working on demo implementations of bot features and patterns for common interactions. Coming soon.
      </p>
    </div>
    -->
    <div class="left">
      <h2>Features and roadmap</h2>
      <p>
        Rocket.Chat has supported bots since the beginning, with our internal Hubot and adapter, enabling chat-ops workflows with multi-channel, multi-user, public and private interactions.
      </p>
      <p>
        We’re pushing that forward now with new headline features and a roadmap of priority issues that will unlock the potential for community contributions.
      </p>
      <p>
        These include:
        <ul>
          <li>
            <a href="https://github.com/RocketChat/Rocket.Chat.js.SDK">A new SDK for third party platforms</a>, including
            <ul>
              <li><a href="https://github.com/RocketChat/hubot-rocketchat/tree/develop">Updated Hubot adapter</a></li>
              <li><a href="https://github.com/RocketChat/Rocket.Chat/issues/9937">New adapter for Botkit</a></li>
              <li><a href="https://github.com/RocketChat/Rocket.Chat/issues/10457">New adapter for Rasa</a></li>
              <li><a href="https://github.com/RocketChat/Rocket.Chat/issues/5772">New adapter for Botpress</a></li>
            </ul>
          </li>
          <li><a href="https://github.com/RocketChat/hubot-natural">Hubot Natural bringing NLP to Rocket.Chat</a></li>
          <li><a href="https://github.com/RocketChat/Rocket.Chat/issues/6786#issuecomment-381461138">Rich messages and payloads for buttons and cards</a></li>
          <li><a href="https://github.com/RocketChat/Rocket.Chat/issues/7125#issuecomment-381473953">Bot user creation and management view</a></li>
          <li><a href="https://github.com/RocketChat/Rocket.Chat/issues/10459">Improve rooms list with separation of bots</a></li>
          <li><a href="https://github.com/RocketChat/Rocket.Chat/issues/10458">Rocket.Chat Apps boilerplate bot to replace internal Hubot</a></li>
        </ul>
      </p>
      <p>See our <a href="https://github.com/RocketChat/Rocket.Chat/projects/16">Bots project issues</a> to contribute or follow progress.</p>
    </div>
    <div class="right">
      <h2>We need your help</h2>
      <p>
        We need your participation to inform and validate our priorities.
      </p>
      <p>
        By participating in our <a href="https://rocketchat.typeform.com/to/dK87Cl">Bot People survey</a> you can contribute to the development roadmap, get
        involved in the discussion to propose features, adapters etc and get early access to the improved bot platform.
      </p>
      <p>
        You can also join the discussion on our <a href="https://open.rocket.chat/channel/bots">#bots channel</a>.
      </p>
    </div>
  </div>
  <div class="clear"></div>
</section>
<!--
<section>
  <div class="wrapper">
    <div class="left">
      <h2>New Features</h2>
      <ul>
        <li>Bot Driver node package, enabling simple framework agnostic interface for developing adapters.</li>
        <li>Bot Helpers features will be migrated into bot driver, to run user queries and allow admins to define user field access for bots.</li>
        <li>Payload Support for rich UI message components. In line with platforms like Facebook Messenger (buttons, menus, cards, etc).</li>
        <li>Bot creation to be streamlined and accessible via API endpoints.</li>
        <li>Delay sends and show “typing” indicators, to give your bots a natural pace and improve user experience.</li>
        <li>Collect user data, via bot conversation, to update custom user fields.</li>
        <li>Access controls for each channel, to lock out bots or humans.</li>
        <li>Admin dashboard for bot admin / metrics / sentiment analysis.</li>
        <li>Conversation starters for the internal bot, provide basic customisable interaction templates, e.g. for onboarding via bot.</li>
      </ul>
    </div>
    <div class="right">
      <h2>Priorities Issues</h2>
      <ul>
          <li>Allow “X is now typing” to be called from method
          related <a href="https://github.com/RocketChat/Rocket.Chat/issues/9337">#9337</a></li>
          <li>Let bot send a private notification in the channel
          related <a href="https://github.com/RocketChat/Rocket.Chat/issues/9177">#9177</a></li>
          <li>Bot statistics page: e.g. total messages by bots
          fixes <a href="https://github.com/RocketChat/Rocket.Chat/issues/8483">#8483</a></li>
          <li>Add isBot attribute to message objects to prevent bot-to-bot loops
          fixes <a href="https://github.com/RocketChat/Rocket.Chat/issues/7990">#7990</a></li>
          <li>Bot user without email address, verification
          fixes <a href="https://github.com/RocketChat/Rocket.Chat/issues/7785">#7785</a>, <a href="https://github.com/RocketChat/Rocket.Chat/issues/7125">#7125</a>, <a href="https://github.com/RocketChat/Rocket.Chat/issues/3818">#3818</a></li>
          <li>Update hardcoded rocket.cat and use notifications UI instead of chat stream for system notices
          fixes <a href="https://github.com/RocketChat/Rocket.Chat/issues/4103">#4103</a>, <a href="https://github.com/RocketChat/Rocket.Chat/issues/3869">#3869</a>, <a href="https://github.com/RocketChat/Rocket.Chat/issues/3078">#3078</a></li>
          <li>REST API allow bots to create users with standard permissions
          fixes <a href="https://github.com/RocketChat/Rocket.Chat/issues/7351">#7351</a></li>
          <li>Add driver/adapter method to force set bot’s status
          fixes <a href="https://github.com/RocketChat/Rocket.Chat/issues/3292">#3292</a></li>
          <li>Autocomplete bots commands and subcommands (by registering commands through bot driver)
          fixes <a href="https://github.com/RocketChat/Rocket.Chat/issues/1086">#1086</a></li>
          <li>Temporarily mute bot in a room (as extension of bot access controls)
          fixes <a href="https://github.com/RocketChat/Rocket.Chat/issues/555">#555</a></li>
      </ul>
    </div>
  </div>
  <div class="clear"></div>
</section>

-->
