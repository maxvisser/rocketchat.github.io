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
      <img src="{{ site.url }}/images/bots/bot.png" alt="" style="max-width: 260px;"/>
    </div>
    <div class="right">
      <p>
        Rocket.Chat is improving the way we do bots.
      </p>
      <p>
        We want to make it easy for bot makers to provide the best solutions and experience for their community.
      </p>
      <p>
        We’ve assigned a team and in the coming months will be producing new features and dedicated documentation for bots.
      </p>
    </div>
  </div>
  <div class="clear"></div>
</section>

<section>
  <div class="wrapper">
    <div class="left">
      <h2>Documentation</h2>
      <p>
        Learn to <a href="">administrate</a> bots and their access to your users and channels.
      </p>
      <p>
        Our <a href="">adapter docs</a> support community development for all popular bot builders and frameworks to run on Rocket.Chat.
      </p>
    </div>
    <div class="right">
        <h2>Feature and Roadmap</h2>
        <p>
          Rocket.Chat has supported bots since the beginning, with our internal Hubot and adapter, enabling chat-ops workflows with multi-channel, multi-user, public and private interactions.
        </p>
        <p>
          We’re pushing that forward now with new headline features and a roadmap of priority issues that will unlock the potential for community contributions.
        </p>
    </div>
  </div>
  <div class="clear"></div>
</section>

<section>
  <div class="wrapper">
    <div class="left">
      <h2>Design Guide</h2>
      <p>
        To give our community a head start in creating the highest standard user experiences, we’re working on demo implementations of bot features and patterns for common interactions. Coming soon.
      </p>
    </div>
    <div class="right">
      <h2>Getting Involved</h2>
      <p>
        We need your participation to inform and validate our priorities. Please follow <a href="">this link</a> if you would like to be involved or even just get updates.
      </p>
      <p>
        You can also join the discussion on our <a href="https://open.rocket.chat/channel/bots">#bots channel</a>.
      </p>
    </div>
  </div>
  <div class="clear"></div>
</section>

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
