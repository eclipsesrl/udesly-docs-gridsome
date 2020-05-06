---
description: ''
sidebar: 'shopify'
next: '/shopify/blog/blog-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';

# Pages

Creating a blog in Shopify is really really simple, and designing it in Webflow it's a real easy experience. Below you will find all the pages that can be used to serve your Blog content.

A minimal Blog can be created with just 2 pages, a **Blog** page to show a list of all your Articles and a **Article** page to show a single entry of your Blog. Naturally, you are absolutely not limited to those 2 pages! 😎 You can create additional pages to further stylize your Blog. You can create different layouts for either blogs or articles!


## Blog Page

To create a Blog page just add the following attribute on the *Body* element of your page:

<Attribute name="page" value="blog" />

#### Alternative Blog Page

To create an alternative Blog page just add the following attribute on the body element of your page:

<Attribute name="page" value="blog-template" />

The template name will be the name you set inside Webflow for this page, don't forget for each Blog you can choose the template in Shopify:

<div align="center">
  <g-image src="~/assets/images/shopify-template-picker.jpg" />
</div>

## Article Page

To create an Article page just add the following attribute on the *Body* element of your page:

<Attribute name="page" value="article" />

#### Alternative Article Page

To create an alternative article page just add the following attribute on the body element of your page:

<Attribute name="page" value="article-template" />

The template name will be the name you set inside Webflow for this page, don't forget for each article you can choose the template in Shopify:

<div align="center">
  <g-image src="~/assets/images/shopify-template-picker.jpg" />
</div>
