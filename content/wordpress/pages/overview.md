---
description: ''
sidebar: 'wordpress'
next: '/wordpress/pages/page-item-elements/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Overview

With the Adapter you can create all the pages you want, and you also have the ability to create pages directly in WordPress!

## Static Pages

All the pages that you create in Webflow that are not CMS related are automatically created in WordPress when you "Import Pages and Data" (following the path Udesly > Webflow Data), no attribute is needed on the body, but you can use dynamic elements that you can find in next page to allow your client to modify little part of the page, for example if you want to show the content of the page that is in WordPress backend (maybe created with Guthenberg or any other Page builder), in the frontend, you have to add the attribute:

<Attribute name="item" value="content" />

on a Rich text element. 

You can find all the dynamic elements in the [next page](/wordpress/pages/page-item-elements/)

## Template and Default Pages

To allow your users to create pages directly in WordPress is greatly adviced to create several template pages with different layouts, this can be done by simply adding the attribute on body:

<Attribute name="page" value="template" />

The templates will get the name from the name of the page you set in Webflow. For example, if you create a page called full-width, you will see in WordPress a selector like this:

<div align="center">
  <g-image src="~/assets/images/template-selector.png" />
</div>

More over, you can also set a default page that will be used *by default* from WordPress, just adding the attribute on body:

<Attribute name="page" value="default" />

Like in static pages you can use dynamic elements that you can find in next page to allow your client to modify little part of the page, for example if you want to show the content of the page that is in WordPress backend (maybe created with Guthenberg or any other Page builder), in the frontend, you have to add the attribute:

<Attribute name="item" value="content" />

on a Rich text element. 

You can find all the dynamic elements in the [next page](/wordpress/pages/page-item-elements/)