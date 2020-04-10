---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/faqs/general/'
next: '/wordpress/faqs/plugin/'
---

# Conversion Issues

## This page cannot be automatically converted...

... please set correct attributes on body to define the Page Type. Getting this error on page called detail_something. But I have no page called detail_something?!?!?!? Well, in reality every page under CMS pages or Ecommerce Pages are exported in html as detail_post-type so if you get an error on detail_author page you have to check the page that in Webflow is called "Authors Template"

## My search results are not converted

Unfortunately Webflow doesn't export it in HTML you have to hide the Search Results items and fake them with a Collection List Wrapper

## My Layout css is messed up

Be carefull with naming things, WordPress add some classes to the body of your page to help js developers to recognize different pages. One of this class is the slug of your page, so if your page is called Search it will add the class search to the body, so please avoid using any generic class name like "search", "about", "page".