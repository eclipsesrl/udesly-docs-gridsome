---
description: ''
sidebar: 'shopify'
prev: '/shopify/general/social/'
next: '/shopify/general/conditionals/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Sections

Sections are modular, customizable elements of a page, which can have specific functions. Sections can be statically included in a theme's templates (like the header and footer), or they can be **dynamically** added to the theme's homepage from the Theme Editor.

A section can be created on a limited number of element tags: (Article, Header, Footer, Aside, Div and Section), by just adding the attribute:

<DynamicAttribute name="section" value="section name" />

The *section name* must be unique per site, otherwise they will be simply converted once and then repeated (like Symbols).

Section Name can't be too complex, is way way better to use a one word value, like "Banner" or "Newsletter".

Only in *Home Page* sections can became dynamic adding the attribute:

<Attribute name="dynamic" value="true" />

Dynamic it means that they can be enabled or disabled by your customer following the path * Online Store > Themes > Customize *

> ⚠️⚠️⚠️: If you use dynamic sections **YOU MUST** set in Home page a div where these sections should appear, by using the attribute:
> 
> <Attribute name="item" value="content-for-index" />


Inside sections, you can add several *options* that will create the dynamic parts of your section. 

> ⚠️⚠️⚠️: Only inside sections you can add options, don't add option on the section itself!

## Text

To add a simple text option, on any text you can add the attribute:

<DynamicAttribute name="option:text" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)

## Textarea

Textarea are like texts, but they have a bigger area to write texts inside Shopify, on any text you can add the attribute:

<DynamicAttribute name="option:textarea" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)

## Richtext

This option will create a more complex text editor inside Shopify, use it with Rich Text elements of Webflow.

<DynamicAttribute name="option:richtext" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area).

## Image

This option will create an image picker, you can use it on Images or Div adding the attribute:

<DynamicAttribute name="option:image" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)

## URL

This image will create an url area, you can use it on links/buttons adding the attribute:

<DynamicAttribute name="option:url" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)

## Page

This is like URL option, but it will show only pages already inside your Shopify setup, you can use it on links/buttons adding the attribute:

<DynamicAttribute name="option:page" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)

## Checkbox

This option will create a checkbox, use it to Show/Hide an element of the section, you can use it on anything adding the attribute:

<DynamicAttribute name="option:checkbox" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)

## HTML

This option allows to inject Raw HTML, use it on div adding the attribute:

<DynamicAttribute name="option:html" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)

## Color

This option will create a color picker, use it to change the text color of any text element, adding the attribute:

<DynamicAttribute name="option:color" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)

## Background Color

This option will create a color picker, use it to change the background color of any element, adding the attribute:

<DynamicAttribute name="option:bgcolor" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)

## Border Color

This option will create a color picker, use it to change the border color of any element, adding the attribute:

<DynamicAttribute name="option:brcolor" value="Option Name" />

The Option name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)


> ⚠️⚠️⚠️: don't mix Color, Background and Border Color on the same element! Only one will be converted!

## Blocks

Blocks are a dynamic way to add multiple times a single element, and they can contain every option already listed before. So think about it as a way to add real dynamic features to some of your elements. For example, with blocks you can create a dynamic slider adding the block to 1 slide of the slider, in this way for each block that your customer create, a new slide will be generated. Note that like for sections, options can be added only **inside** blocks and not on the block itself. To create a block just add the attribute:

<DynamicAttribute name="block" value="Block Name" />

Block name can be everything you want, but be sure to give it a significant name to help your customers. (It will be showed in Shopify Customize Area)
