---
description: ''
sidebar: 'wordpress'
next: '/wordpress/custom-post-types/archive-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';

# Pages

Creating custom post types in WordPress is not so simple, but once again, the Udesly plugin covers you, you can now declare your custom post types, or create pages for custom post types that are defined by other plugins! Below you will find all the pages that can be used to serve your Custom Post Types.

A minimal Custom Post Type can be created with just 2 pages, an **Archive** page to show a list of all your Posts and a **Single** page to show a single entry of your Custom Post Type. Naturally, you are absolutely not limited to those 2 pages! 😎 You can create additional pages to further stylize it. You can create different layouts for specific taxonomies or additional templates to style specific posts in a different way. The only limit is your creativity! (...and probably your client budget 💸)


## Archive Page

To create an Archive page just add the following attribute on the *Body* element of your page:

<Attribute name="page" value="archive" />

<DynamicAttribute name="post-type" value="post-type" />

For example if you want to create an archive for a custom post type called "event" you have to add the attributes:

<Attribute name="page" value="archive" />

<Attribute name="post-type" value="event" />


## Single Post Page

To create a Single page just add the following attribute on the *Body* element of your page:

<Attribute name="page" value="single" />

<DynamicAttribute name="post-type" value="post-type" />

For example if you want to create a single page for a custom post type called "event" you have to add the attributes:

<Attribute name="page" value="single" />

<Attribute name="post-type" value="event" />

#### Specific Single Post Page

If you want to style a specific post in a different way you can add the following attributes on the *Body* element of your page:

<Attribute name="page" value="single" />

<DynamicAttribute name="post-type" value="post-type" />

<DynamicAttribute name="specific" value="slug of the post or ID" />

For example, if a post of your *Events* is named "Hello World", the attributes would be:

<Attribute name="page" value="single" />

<Attribute name="post-type" value="event" />

<Attribute name="specific" value="hello-world" />

#### Template for Single Post

Maybe creating directly a template for a specific post is not always the best solution, if you change the slug of the post for example, that template would not work anymore. You can create instead templates that can be used for Single Post. 

<Attribute name="page" value="template" />
<DynamicAttribute name="post-type" value="post-type" />

For example if you want to create a single page for a custom post type called "event" you have to add the attributes:

<Attribute name="page" value="template" />

<Attribute name="post-type" value="event" />


The templates will get the name from the name of the page you set in Webflow. For example, if you create a page called full-width, you will see in WordPress a selector like this:

<div align="center">
  <g-image src="~/assets/images/template-selector.png" />
</div>

## Taxonomy Pages

Taxonomy pages are optional. Your taxonomies pages will use the Archive page if you don't create them. If you created custom post types using the Udesly Plugin, following the path Udesly > Custom Post Types > *your custom post type* you can create also taxonomies to associate to your custom post type, remember that if you create the custom post type and the taxonomies with the udesly plugin, the taxonomies will be in the format *posttype_taxonomy*, for example, you created a custom post type called event and associated to it taxonomies named category and tag, the taxonomies name will be: *event_category* and *event_tag*.

#### Taxonomy Page
To create a page that will be used to show all posts of a taxonomy add the following attribute on the *Body* element of your page:

<Attribute name="page" value="taxonomy" />
<DynamicAttribute name="post-type" value="taxonomy-name" />

So for example if we are creating a page for an Event Category attributes will be:

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="event_category" />

#### Specific Taxonomy Page
Sometimes you need to different styles to specific taxonomies. To do this just add the following attributes on the *Body* element of your page:

<Attribute name="page" value="taxonomy" />
<DynamicAttribute name="post-type" value="taxonomy-name" />
<DynamicAttribute name="specific" value="slug of the taxonomy" />

For example, if a category of my Events is named "Web Design", the attributes would be:

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="event_category" />
<Attribute name="specific" value="web-design" />
