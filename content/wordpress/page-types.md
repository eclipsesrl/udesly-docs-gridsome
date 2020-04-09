---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/custom-attributes/'
next: '/wordpress/elements'
---

# Page Types

One usage of the custom attributes is to define what kind of page you are creating. 

WordPress uses a very specific page hierarchy to show your CMS data, and you can create all the type of pages simply adding some custom attributes on the **body** element of your page.

<video autoplay="" muted="" playsinline="true" loop="">
 <source src="/assets/video/page-type.webm">
</video>

## WordPress Pages Structure

WordPress uses a clearly defined hierarchy to decide which template should be used to display a page you are visiting.

So how you can define a page? 🤔

You have to keep in mind 3 main features:

1. [**Page Type**](#page-type)

2. [**Post Type**](#post-type)

3. [**Specificity**](#specificity)

> Remember that since Wordpress is born simply as a Blog CMS, actually if he can't find an appropriate page, the Archive Page will be used as fallback.


## Page Type

Page Type defines the use of the current page in WordPress, and can be defined on Webflow adding the following attribute on the **Body** element:

<div align="center"><code>page</code> <code class="dynamic-value">page type</code></div>

Page type can be one of the following:

<code class="value">archive</code>, <code class="value">single</code>, <code class="value">search</code>, <code class="value">template</code>, <code class="value">taxonomy</code>, <code class="value">temporary</code>, <code class="value">default</code>,<code class="value">remove</code>

Let's see one by one what they means:

* **Archive**: this page is used to show, an archive of your collection. For example the Blog Page is the main Archive Page for posts, the Shop page is the archive page for products;
* **Single**: this page is used to show the single entry of your collection. For example the page that shows your post;
* **Search**: this page is used to show the search results
* **Template**: this page can be created to give your client alternative options for each entry of your collection, for example you can create a Blog with different templates for the single post, your client will be able to choose directly from WordPress either to use the default template or this template;
* **Taxonomy**: this is a special archive page, taxonomies are a way to classify the entries of your collections. For example WordPress has already built-in 2 taxonomies: Category and Tag.
* **Temporary**: this page will be used by the Adapter if you enable the maintenance/coming soon mode
* **Default**: with the adapter you can allow your clients to create pages directly in WordPress, with default you define the default template that is used when you create new pages in WordPress.
* **Remove**: sometimes Webflow or themes you get from the Marketplace come with pages that you don't want to convert, so if you want to get rid of them, just use <code class="value">remove</code>

## Post Type

WordPress houses lots of different types of content and they are divided into something called **Post Types**. A single item is called a **post** however since like you read before WordPress was born as a Blog Engine, this is also the name of the most common built-in Post Type.

The other Post Type that is already built-in is **page**. But you are not limited only to these 2 kind of post types, they can be defined by third party plugins (E.g: WooCommerce defines a post type called *product*), and the Adapter will create for you any post type that you want to use in your theme.


Post type is scoped per page and can be defined on Webflow adding the following attribute on the **Body** element:

<div align="center"><code>post-type</code> <code class="dynamic-value">post type</code></div>

valid values are for example (but not limited to):

<code class="value">page</code>, <code class="value">post</code>, <code class="value">product</code>, etc..

## Specificity

A page can be generic or specific, if it's generic you don't need to add anything, instead if you want it to be specific on Webflow add the following attribute on the **Body** element:

<div align="center"><code>specific</code> <code class="dynamic-value">slug</code></div>

this feature can be usefull if you want for example to create a different style for a Category of your Blog that is called "My Events Category". 
For that need the attributes on the body would be

<div align="center"><code>page</code> <code class="value">taxonomy</code></div>
<div align="center"><code>post-type</code> <code class="value">category</code></div>
<div align="center"><code>specific</code> <code class="value">my-events-category</code></div>

***

*Note: attributes values should always been inserted as slug, hyphens instead of spaces and all in lowercase *

## Do's and don'ts

Probably you are now thinking, *I have to add an attribute on every page?!? Are you kidding me?* 🙃

Well fortunately, this is not the case 😀

The *Adapter* is smart enough to understand automatically some of your pages. 
The Utility pages needs no attribute, so no attribute for Not Found, Password, and Search Page.

<div align="center">
  <g-image src="~/assets/images/utility-pages.jpg" />
</div>

The Ecommerce Pages needs no attributes and they are automatically used for WooCommerce:

<div align="center">
  <g-image src="~/assets/images/ecommerce-pages.png" />
</div>

*Products Template* is used as Single Product

*Categories Template* is used as Archive Page for Products (Shop)

Also some CMS Pages are automatically recognized without attributes

<div align="center">
  <g-image src="~/assets/images/cms-pages.png" />
</div>

*Posts Template* is used as Single Post page (This happens only if you create your collection in Webflow using Posts as plural name and Post as singular name)

All static pages are automatically converted as specific template pages (Generic Pages that will be imported in WordPress)

<div align="center">
  <g-image src="~/assets/images/static-pages.png" />
</div>