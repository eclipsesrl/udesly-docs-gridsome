---
sidebar: 'netlify'
next: '/netlify/requirements/'
---

# Why Netlify CMS?

[Netlify](https://www.netlify.com/) is an All-in-one platform for automating modern web projects. With the Udesly Adapter you can deploy and manage your Webflow template, inclusive of its CMS, with Netlify.
​
<div align="center">
  <g-image src="~/assets/images/jamstack.png" />
</div>
​
Netlify platform has a very generous free tier that will cover almost all websites for free. Netlify CMS is open source, and with Netlify Identity you can create basically 5 admin accounts for free.


Using Netlify CMS is super easy, anytime you need a super fast static generated website and you are low on hosting budget, you can basically use it for free, and pay only when your site goes over the traffic limit!

Also the adapter allows you to upload additional files, so you can upload files that normally Webflow doesn't allow to upload (like robots, videos with audio, mp3 files...) or **Lambda Functions** (😉😉😉 yep we are winking at you *devs*) that are **really usefull** if you need to make integrations that needs to be processed by a server for protection, or if you need a **PWA**, why you don't upload a **Service Worker**?

## Prerequisites

In order to use the Adapter you have to get an Udesly plan: Adapter (monthly/yearly) or All Access and have at least the [Account *Lite Plan*](https://webflow.com/pricing#account)   of Webflow that is the base plan that allows you to export your projects. You don't need absolutely to buy any Site plan in order to use the Adapter. 

## How it Works?

Basically, you create your template in Webflow adding some attributes, and the Adapter converts it in an [11ty](https://www.11ty.dev/) backed theme. **11ty** is a really simple static site generator that enforces only little requirements, and is really suitable to be used with a Webflow CMS based theme, since has a really similar templating structure.

The adapter not only converts the theme, but also optimizes a little bit the Webflow code to optimize the *above the fold* scripts, for example the Google fonts will be requested with a display swap, and the css will be lazyloaded. The image tags are converted into picture tags and there is a script that will be runned before the site deploy that will convert all your images into *webp*. (Come on *Safari*, even *Edge* supports this format... 😟😟😟)

*Sounds like Magic right?* 🧙

Well, kind of but not really, you have to help the Adapter to understand how to convert correctly your pages and the dynamic parts of them. But don't worry it's really simple, once you have understood the process it will flow automatically! You just have to add some special *attributes* to some of your Webflow elements.


