---
description: ''
sidebar: 'ghost'
prev: '/ghost/custom-attributes/'
next: '/ghost/elements/'
---

import Attribute from '@/components/Attribute.vue';

# Page Types

One usage of the custom attributes is to define what kind of page you are creating. 

Ghost uses a very easy pages structure to show your Blog data, and you can create all the type of pages simply adding some custom attributes on the **body** element of your page.

<video autoplay="" muted="" playsinline="true" loop="">
 <source src="/assets/video/page-type.webm">
</video>


## List Page

This page is used for the Blog Page in order to show all the posts of your Blog. Add the following attribute to the Body element of the page:

<Attribute name="page" value="list" />


## Post Page

This page is used to display a single post of your Blog. Add the following attribute to the Body:

<Attribute name="page" value="post" />

## Specific Post Page

This page will be used instead of the Single Post Page when surfing a specific post of your Blog. The name of this page must match with the slug of the post. To create a specific post page just add the attributes on the Body element of your page

<Attribute name="page" value="specific-post" />

## Tag Page

If this page is present in your Webflow template, every time you visit a tag of your blog, this page will be used instead of the Blog Page, to create a tag page just add the following attribute on the Body element of your page

<Attribute name="page" value="tag" />

## Author Page

This page is used to show the list of posts created by a given Author. This page must have the following attribute on the Body:

<Attribute name="page" value="author" />

## Static Pages

Static pages (like about, our story, etc..) do not need any attribute: but you need to create the pages in Ghost giving as slug the same slug of your page in Webflow.
 
## Default and Template Pages

You can create pages in Webflow that will be used in Ghost to create new pages.

#### Default Page

To define a page as Default page add the following attribute on the Body element:

<Attribute name="page" value="default" />

This page will be used by default when you create a new page in Ghost.

#### Template Page

To define a page as Template page add the following attribute on the Body element:

<Attribute name="page" value="template" />

This page can be selected when you create a new page in Ghost.