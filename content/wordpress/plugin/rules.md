---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/plugin/rules/'
next: '/wordpress/plugin/hooks/'
---

# Rules

Udesly has built in a functionality named **Rules**. With rules you can show/hide parts of your pages (note this parts will not be sent by your server, they are not hidden by css/js) using conditional attributes, or you can restrict pages based on rules.

Rule configuration is pretty easy, follow the path Udesly > Rules, press on *Add New* and write *if* inside the input, then the autocomplete will help you write your rule

<div align="center">
  <g-image src="~/assets/images/udesly-rules.png" />
</div>

For example if you write: "if user is logged in", this rule will evaluate as true only the user is logged in. You can also *chain* multiple conditions pressing on *AND* or on *OR*.

For every page you will find a Rule selector:

<div align="center">
  <g-image src="~/assets/images/rules-selector.png" />
</div>

the selector is pretty easy to use:
* *Redirect Rule* is the rule you want to use;
* *Where to redirect* is the url where you want to user to be redirected if the rule evaluates as "false";
* *Evaluate as negative* is a checkbox that allows you to basically invert the functionality, it will redirect if the rule evaluates as "true";

This function is really really powerfull, and allows for example to restrict pages to only logged in users, or to admin users, or any other user role!

