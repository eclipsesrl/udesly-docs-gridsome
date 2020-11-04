---
description: ''
sidebar: 'wordpress'
next: '/wordpress/woocommerce/archive-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';

# Pages

Creating a store in WooCommerce is really really simple, and designing it in Webflow it's a real easy experience. Below you will find all the pages that can be used to serve your store content.

A minimal Shop can be created with just 2 pages, an **Archive** page to show a list of all your Products and a **Single** page to show a single product of your Store. Naturally, you are absolutely not limited to those 2 pages! 😎 You can create additional pages to further stylize your Store. You can create different layouts for specific categories, tags, additional templates to style specific products in a different way. The only limit is your creativity! (...and probably your client budget 💸)


## Shop Page

To create a Shop Page that in WordPress terms is an Archive of Products just add the following attribute on the *Body* element of your page:

<Attribute name="page" value="archive" />

<Attribute name="post-type" value="product" />

Don't forget after conversion and upload you have to declare your page for shop in WordPress following the path WooCommerce > Settings > Products > Shop Page.

Also keep in mind that the page **Categories Template** that you can find under *Ecommerce Pages* in Webflow is automatically converted with the above attributes. If you don't want to use that page as Shop page, you can either add:

<Attribute name="page" value="remove" />

or add any other page attribute to change it's functionality.

## Single Product Page

To create a Single Product page just add the following attribute on the *Body* element of your page:

<Attribute name="page" value="single" />

<Attribute name="post-type" value="product" />

Keep in mind that the page **Products Template** that you can find under *Ecommerce Pages* in Webflow is automatically converted with the above attributes.

#### Specific Single Product Page

If you want to style a specific product in a different way you can add the following attributes on the *Body* element of your page:

<Attribute name="page" value="single" />
<Attribute name="post-type" value="product" />
<DynamicAttribute name="specific" value="slug of the product" />


#### Template for Single Product

Maybe creating directly a template for a specific product is not always the best solution, if you change the slug of the post for example, that template would not work anymore. You can create instead templates that can be used for Single Product. 

<Attribute name="page" value="template" />
<Attribute name="post-type" value="product" />

The templates will get the name from the name of the page you set in Webflow. For example, if you create a page called full-width, you will see in WordPress a selector like this:

<div align="center">
  <g-image src="~/assets/images/template-selector.png" />
</div>

> When you create this page, you might encounter a little flaw, Webflow doesn't allow you to add the "add to cart" button inside pages that are different from the product page. No issue! There's a trick 🧙. Use a Collection List wrapper linked to products without any attribute but only the add to cart inside it!

## Taxonomy Pages

Taxonomy pages are optional. Your categories, tags pages will use the Shop page if you don't create them. Anyway, WooCommerce creates 2 taxonomies *product_cat* and *product_tag*.

#### Product Category Page
To create a page that will be used to show all products of a category add the following attribute on the *Body* element of your page:

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="product_cat" />

#### Tag Page
To create a page that will be used to show all products of a tag add the following attributes on the *Body* element of your page:

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="product_cat" />

#### Specific Category Page
Sometimes you need to different styles to specific categories, for example if you have a shop that sells pretty different products you probably want to add a completely different layout for the categories. To do this just add the following attributes on the *Body* element of your page:

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="product_cat" />
<DynamicAttribute name="specific" value="slug of the category" />

For example, if a category of my blog is named "Shoes", the attributes would be:

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="product_cat" />
<Attribute name="specific" value="shoes" />

#### Specific Tag Page
Sometimes you need to different styles to specific tag, for example if you have a store that sells pretty different products you probably want to add a completely different layout for the tags. To do this just add the following attributes on the *Body* element of your page:

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="product_tag" />
<DynamicAttribute name="specific" value="slug of the tag" />

For example, if a tag of my shop is named "Red", the attributes would be

<Attribute name="page" value="taxonomy" />
<Attribute name="post-type" value="product_tag" />
<Attribute name="specific" value="red" />

## Search Page

By default WooCommerce uses Shop page to show up the products your user searched. But, also on that, the Adapter allows you to override this behaviour 😲

How? Simple! 

<Attribute name="page" value="search" />
<Attribute name="post-type" value="product" />

> ⚠️⚠️⚠️

> Do not use the search page generated by Webflow as WooCommerce search page, that page behaviour is not overridable