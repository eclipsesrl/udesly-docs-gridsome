---
description: ''
sidebar: 'ghost'
next: '/ghost/custom-attributes/'
---

# Introduction

The **Udesly Adapter** is a web app that allows you to convert your Webflow theme in order to be used with a different *CMS*.

In this documentation we will cover all the necessary steps in order to prepare your Webflow theme to be used with **Ghost**.

## Why the Adapter?

Ghost is a popular open source blogging platform and it provides total control and ownership of your content and strips both open and closed platforms down to their best features and got them into one professional tool.

Ghost comes with powerful features which can be customised and configured based on the needs of each individual site:

Membership & Subscriptions: Ghost supports for member signups and paid subscription commerce.
Editor: Ghost comes with a modern visual editor with familiar formatting options, as well as the ability to add dynamic content.
Flexible Content: The tagging functionality gives you total control over the categorisation of your content.
Integrations: Ghost allows to integrate several apps and add more and more features.
Check Ghost official [documentation here](https://ghost.org/docs/)


## Prerequisites

In order to use the Adapter you have to get an Udesly plan: Adapter (monthly/yearly) or All Access and have at least the [Account *Lite Plan*](https://webflow.com/pricing#account)   of Webflow that is the base plan that allows you to export your projects. You don't need absolutely to buy any Site plan in order to use the Adapter. 


## How it Works?

The **Adapter** converts your Webflow exported files in PHP code and will give you back a .zip file that is ready to be installed in your Ghost setup.

Your design will be transferred along with your interactions, fonts, images etc... 

Webflow CMS and Ecommerce Elements are used only as **placeholder** and will be filled with the data entries that you have created in Ghost.

*Sounds like Magic right?* 🧙

Well, kind of but not really, you have to help the Adapter to understand how to convert correctly your pages and the dynamic parts of them. But don't worry it's really simple, once you have understood the process it will flow automatically! You just have to add some special *attributes* to some of your Webflow elements and pages.