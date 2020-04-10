---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/'
next: '/wordpress/page-types/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';

# Custom Attributes

This is the **Adapter** key concept, so read really carefully 👂.

Probably in your Webflow theme you are using a lot of *dynamic content* that is binded to the Webflow CMS or Ecommerce. This dynamic content as you probably already know, can be used with *Collection Lists* and inside *Collection Templates*. (And if you don't know take a look at the [official documentation](https://university.webflow.com/article/intro-to-dynamic-content)).

Neither the CMS content and the bindings you made for Webflow CMS/Ecommerce are exported in HTML, so you need a way to tell the Adapter: "Hey, here I want to show 3 posts from my Blog". To do this, you will use *custom attributes*, and this is where the magic happens, you *label* the elements and the Adapter handles all the code for you! 💃💃💃


## What are Custom Attributes?

Custom attributes? 🤔

Well, think *Attributes* as small marks that can be used to append additional information to your elements — they basically define characteristics of an HTML element. And they can be easily added in Webflow from the Settings Panel ⚙️. 
[Official doc](https://university.webflow.com/article/how-to-add-custom-attributes-to-an-element-in-webflow)

An *Attribute* is defined by 2 parts:

* **Name**

* **Value**

Through the doc you will find these custom attributes listed in 2 different ways:

<Attribute name="name" value="value" />

---


<DynamicAttribute name="name" value="dynamic-value" />


There are basically only *2* rules to never forget for custom attributes:

1. When you see one of these 2 colors <code></code> <code class="value"></code>just copy and paste, do not invent your own attributes! 🙅‍♂️ (try to click on them!)
2. When you see this color instead <code class="dynamic-value"></code>, the value depends on the situation and will be explained at the right moment (sometimes you will invent it 🤷‍♂️)
3. (The one to forget about) You don't need to add attributes to everything 🤦‍♂

## Where to add Attributes?

Rule of thumb 👍: every element that has a CMS binding and every Collection Template needs his own attribute.

Sometimes for Collection Templates, the Adapter is smart enough to understand on his own your intentions.

Not only CMS binded elements can have attributes, you will learn later on that some elements (Forms, Menus, Sliders, Global Options, etc...) can became dynamic using Custom Attributes.


## Tips

Are you in a rush and can't read the doc right now? ⏱️ Try to start from our [Cloneable Resources](https://www.udesly.com/adapter-cloneable-resources/) or [Hire Us](https://www.udesly.com/custom-services/) to make the conversion on your place. 

If you instead already know how the Adapter works, take a look at our [Cheatsheets](https://cheatsheets.udesly.com/).

For any other issue or doubt you can [contact us](https://www.udesly.com/help-center/).


