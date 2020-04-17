---
description: ''
sidebar: 'wordpress'
next: '/wordpress/search/search-page-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Search Pages

Whenever you add a search form in Webflow, it automatically creates for you a Search page under Utility pages section. That page needs no attribute and will automatically be used as default search page in your WordPress setup. Note that by default WordPress searches in every post type, so with only one search you have to display content that can be a Page, a Post, a Product, etc...

To avoid this, we have added few solution to allow you to further customize it.

First of all you can create specific search pages specialized on showing only one post type, this can be easily done adding the following page attributes on body:

<Attribute name="page" value="search" />

<DynamicAttribute name="post-type" value="post-type" />

So for example to create a page that shows only product search results you can use:

<Attribute name="page" value="search" />

<Attribute name="post-type" value="product" />

But this is not the only step you have to do!

To be able to use this page, you have to specialize also the Search Form, to do this on the Search element add the attribute:

<DynamicAttribute name="post-type" value="post types divided by comma" />

So for example you can use 

<Attribute name="post-type" value="post" />

on the Search Element to make that form search only on posts!