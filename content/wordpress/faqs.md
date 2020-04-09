---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/glossary/'
---

# FAQs

## I can't see any Text or Image on my Website

Most of the time (99.99999999%) this is due to the fact that you forgot to *Import* data for the frontend editor, from Udesly => Webflow Data

## My posts are not shown on the frontend

I've added all attributes and my posts are not shown on my site!! 

Always look at the notices on the top of your WordPress dashboard, did you created all the posts queries that you used in Webflow? The Adapter warns you if there is missing data in your WordPress cms!

## Can I modify the layout in WordPress?

No, you can't! In WordPress you can change dynamic data, and with Frontend Editor you can even change texts, images and links. But every layout change must be done in Webflow!

## I cannot upload my theme, the link expires

Well, no the link is not expired, this is a strange way of WordPress to say: your theme size is bigger than your server upload limits. Use [FTP](https://filezilla-project.org/) to upload the theme.

## Why my Homepage shows my Blog page?

Probably you forgot to set your homepage as static inside Settings => Reading

## My Add to cart button is purple!

WooCommerce is pretty aggressive with his css, but we've got you covered! Go to Udesly => Settings => WooCommerce and uncheck WooCommerce general css 

## My Site is Blank!!

Probably is a call to an undefined action. Or any other PHP error. First step: do you have all the plugins installed and activated? (Double check you have installed and activated Udesly Adapter, WooCommerce if you used Ecommerce Elements and any other third party plugin you used in your Webflow theme, looking at you ACF and TranslatePress 👀)


## Can I create pages directly from WordPress?

Yes you can! But if you don't create template for pages or at least a default template page, they will probably look like your Blog 🤐

## I created Custom Post Types where are them?!

Always look at the notices on the top of your WordPress dashboard, once again, the Adapter plugin will give you a notice asking you to enable the Custom Post Types you have used


