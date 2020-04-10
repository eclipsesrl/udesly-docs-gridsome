---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/faqs/plugin/'
next: '/wordpress/faqs/third-party-plugins/'
---

# WooCommerce

## My cart, checkout, account pages are not working

Did you configured WooCommerce correctly? You have to declare the pages you are gonna use for it in WooCommerce > Settings

## My Add to cart button is purple!

WooCommerce is pretty aggressive with his css, but we've got you covered! Go to Udesly > Settings > WooCommerce and uncheck WooCommerce general css 

## My products are not shown on the frontend

I've added all attributes and my products are not shown on my site!! 

Always look at the notices on the top of your WordPress dashboard, did you created all the posts queries that you used in Webflow? The Adapter warns you if there is missing data in your WordPress cms!

## My product search is showing on the shop page!

Yep that's the default behaviour of WooCommerce, to avoid this issue please read up the correct section of the WooCommerce documentation

## My Mini cart is not showing any product inside

Unfortunately Webflow doesn't export in html the default product list inside the mini cart, you have to fake it with a normal list
