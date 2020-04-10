---
description: ''
sidebar: 'wordpress'
next: '/wordpress/blog/archive-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';

# Pages

Creating a blog in WordPress is really really simple, and designing it in Webflow it's a real easy experience. Below you will find all the pages that can be used to serve your Blog content.

A minimal Blog can be created with just 2 pages, an **Archive** page to show a list of all your Posts and a **Single** page to show a single entry of your Blog. Naturally, you are absolutely not limited to those 2 pages! 😎 You can create additional pages to further stylize your Blog. You can create different layouts for specific categories, tags, authors or additional templates to style specific posts in a different way. The only limit is your creativity! (...and probably your client budget 💸)


## Archive Page

To create an Archive page just add the following attribute on the *Body* element of your page:

<Attribute name="page" value="archive" />

Don't forget after conversion and upload you have to declare your page for posts in WordPress following the path Settings > Reading > Your homepage displays

## Single Post Page

To create a Single page just add the following attribute on the *Body* element of your page:

<Attribute name="page" value="single" />

#### Specific Single Post Page

If you want to style a specific post in a different way you can add the following attributes on the *Body* element of your page:

<Attribute name="page" value="single" />
<DynamicAttribute name="specific" value="slug of the post or ID" />

For example, if a post of my blog is named "Hello World", the attributes would be:

<Attribute name="page" value="single" />
<Attribute name="specific" value="hello-world" />

#### Template for Single Post

Maybe creating directly a template for a specific post is not always the best solution, if you change the slug of the post for example, that template would not work anymore. You can create instead templates that can be used for Single Post. 

<Attribute name="page" value="template" />
<Attribute name="post-type" value="post" />

The templates will get the name from the name of the page you set in Webflow. For example, if you create a page called full-width, you will see in WordPress a selector like this:

<div align="center">
  <g-image src="~/assets/images/template-selector.png" />
</div>

## Taxonomy Pages

Taxonomy pages are optional. Your categories, tags page will use the Archive page if you don't create them. Anyway, WordPress creates 2 taxonomies *category* and *tag*.

#### Category Page
To create a page that will be used to show all posts of a category add the following attribute on the *Body* element of your page:

<Attribute name="page" value="taxonomy" />

#### Tag Page
To create a page that will be used to show all posts of a tag add the following attributes on the *Body* element of your page:

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="tag" />

#### Specific Category Page
Sometimes you need to different styles to specific categories, for example if you have a blog that talks about various arguments you probably want to add a completely different layout for the categories. To do this just add the following attributes on the *Body* element of your page:

<Attribute name="page" value="taxonomy" />
<DynamicAttribute name="specific" value="slug of the category" />

For example, if a category of my blog is named "Web Design Events", the attributes would be:

<Attribute name="page" value="taxonomy" />
<Attribute name="specific" value="web-design-events" />

#### Specific Tag Page
Sometimes you need to different styles to specific tag, for example if you have a blog that talks about various arguments you probably want to add a completely different layout for the tags. To do this just add the following attributes on the *Body* element of your page:

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="tag" />
<DynamicAttribute name="specific" value="slug of the tag" />

For example, if a tag of my blog is named "UX", the attributes would be

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="tag" />
<Attribute name="specific" value="ux" />

## Authors Page

An Author Page shows all posts written by a defined Author and is optional, WordPress will use the Archive Page as fallback, to create a page for this special Archive just add the following attributes on the *Body* element of the page:

<Attribute name="page" value="archive" />
<Attribute name="post-type" value="author" />


#### Specific Author Page
Sometimes you want to add a personal touch to specific authors pages. To do this just add the following attributes on the *Body* element of your page: 

<Attribute name="page" value="archive" />
<Attribute name="post-type" value="author" />
<DynamicAttribute name="specific" value="author nicename or ID" />

For example, if an author is called Matt, you can use the following attributes:

<Attribute name="page" value="archive" />
<Attribute name="post-type" value="author" />
<Attribute name="specific" value="matt" />