---
sidebar: 'jamstack'
next: '/jamstack/requirements/'
---

# Jamstack?!

Jamstack is an architecture designed to make the web faster, more secure, and easier to scale. It builds on many of the tools and workflows which developers love, and which bring maximum productivity.

A Jamstack architecture can bring all sorts of benefits to the sites and to project workflows. Some of the key benfits are:

## Security
The Jamstack removes multiple moving parts and systems from the hosting infrastructure resulting in fewer servers and systems to harden against attack.

Serving pages and assets as pre-generated files allows read-only hosting reducing attack vectors even further. Meanwhile dynamic tools and services can be provided by vendors with teams dedicated to securing their specific systems and providing high levels of service.

## Scale
Popular architectures deal with heavy traffic loads by adding logic to cache popular views and resources. The Jamstack provides this by default. When sites can be served entirely from a CDN there is no complex logic or workflow to determine what assets can be cached and when.

With Jamstack sites everything can be cached in a content delivery network. With simpler deployments, built-in redundancy and incredible load capacity.

## Performance
Page loading speeds have an impact on user experience and conversion. Jamstack sites remove the need to generate page views on a server at request time by instead generating pages ahead of time during a build.

With all the pages are already available on a CDN close to the user and ready to serve, very high performance is possible without introducing expensive or complex infrastructure.

## Portability
Jamstack sites are pre-generated. That means that you can host them from a wide variety of hosting services and have greater ability to move them to your preferred host. Any simple static hosting solution should be able to serve a Jamstack site.

Bye-bye infrastructure lock-in.

## ...so why use it with Webflow?

Webflow surely ensures the highest performance when it comes to visual and no code design. But sometimes your clients already have their own hostings, or they are forced to use something cheaper due to budget issues, well the Jamstack is surely made for them! Better performance, lower hosting cost & higher security.

Also the adapter allows you to upload additional files, so you can upload files that normally Webflow doesn't allow to upload (like robots, videos with audio, mp3 files...) or **Lambda Functions** (😉😉😉 yep we are winking at you *devs*) that are **really usefull** if you need to make integrations that needs to be processed by a server for protection! Or if you need a **PWA**, why you don't upload a **Service Worker**?