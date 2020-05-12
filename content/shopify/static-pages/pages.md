---
sidebar: 'shopify'
next: '/shopify/static-pages/elements/'
---

# Static Pages

There are 2 types of static pages you can create in Shopify, don't forget that Shopify will not create them for you and you have to create them manually from the Shopify Dashboard.

## Template Page

All the static page you create in Webflow will be converted as template page. They are not automatically created in Shopify, you have to create manually them from Shopify Dashboard being sure to use the same handle (slug) you used in Webflow. And also don't forget to select the correct template:

<div align="center">
  <g-image src="~/assets/images/shopify-template-picker.jpg" />
</div>

The template will have the same name you used in Webflow.

## Default Page

In Shopify you can create pages directly from the backend, by default they will get a page called *Default*, to define your Default page use the attribute:

<Attribute name="page" value="default" />

