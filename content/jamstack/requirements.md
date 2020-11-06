---
sidebar: 'jamstack'
prev: '/jamstack/'
next: '/jamstack/how-to-convert/'
---

## Prerequisites

In order to use the Adapter you have to get an Udesly plan: Adapter (monthly/yearly) or All Access and have at least the [Account *Lite Plan*](https://webflow.com/pricing#account) of Webflow that is the base plan that allows you to export your projects. You don't need absolutely to buy any Site plan in order to use the Adapter. 
You also need to install the [Udesly Chrome Extension](https://chrome.google.com/webstore/detail/udesly-template-configura/khhgdnefpkphamogndglabaalbpfidbf?hl=en&authuser=0)

<video autoplay="" muted="" playsinline="true" loop="">
 <source src="/assets/video/install-chrome-extension.webm">
</video>

## How it Works?

Basically, you create your template in Webflow, and the Adapter converts it in an [11ty](https://www.11ty.dev/) backed theme. **11ty** is a really simple static site generator that enforces only little requirements, and is really suitable to be used with a Webflow CMS based theme, since has a really similar templating structure.

The adapter not only converts the theme, but also optimizes a little bit the Webflow code to optimize the *above the fold* scripts, for example the Google fonts will be requested with a display swap, and the css files and js scripts will be lazyloaded. The image tags are converted into picture tags and there is a script that will be runned before the site deploy that will convert all your images into *webp*. (Come on *Safari*, even *Edge* supports this format... 😟😟😟)

*Sounds like Magic right?* 🧙

Well, it is! Because there is a special extension that adds every custom attribute needed for you! You just need to install it here!

## Requirements

There are a few requirements for the CMS to be converted correctly. (Well just one )

1) Do not use *tags* as collection name! They are already used by 11ty. Give another name to them!

2) Do not use *date* as field name! It's reserved by 11ty!