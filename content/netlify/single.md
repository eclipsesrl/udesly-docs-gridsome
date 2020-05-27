---
sidebar: "netlify"
prev: "/netlify/collections/"
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Single Page Items

All the dynamic items inside CMS Template pages must have their own attribute. This will take the name of the corresponding CMS field:

<div align="center">
  <g-image src="~/assets/images/netlify-cms-field.png" />
</div>

All the available attributes you can insert are explained below, basically every element highlighted in purple inside Webflow needs his own attribute:

### Text

All dynamic text element must have the attribute:

<DynamicAttribute name="text" value="the name of the corresponding CMS field" />

<div align="center">
  <g-image src="~/assets/images/netlify-text.png" />
</div>

The only different attribute concerns the date. Here the attribute is the following one, all the time:

<DynamicAttribute name="format" value="date format" />

In this case you can choose the date format you prefer among [these](https://date-fns.org/docs/format).

### Image

All dynamic image element must have the attribute:

<DynamicAttribute name="image" value="the name of the corresponding CMS field" />

You can use it both on images than background images.

<div align="center">
  <g-image src="~/assets/images/netlify-images.png" />
</div>

### Multi Image

This is an experimental field, and still needs more testing and functionalities.

<DynamicAttribute name="multi-image" value="the name of the corresponding CMS field" />

You can use it both on images and background images. The element where you apply the attribute to will be repeated once for each image set inside that field.

### Color & Background Color

To change the text color and background color dinamically, you have to use these attribute:


<DynamicAttribute name="color" value="the name of the corresponding CMS field" />

<DynamicAttribute name="bg-color" value="the name of the corresponding CMS field" />


<div align="center">
  <g-image src="~/assets/images/netlify-color.png" />
</div>

### Link

The attribute for a Link element can be:

<Attribute name="link" value="url" />

to link to the single page or

<DynamicAttribute name="link" value="the name of the corresponding CMS field" />

for external links.

<div align="center">
  <g-image src="~/assets/images/netlify-link.png" />
</div>


### Show if & Hide if

These conditional attributes can be used on every element to show or hide it, based on specific conditions. They will take the Webflow **Conditions** element as value. 

<DynamicAttribute name="show-if" value="condition" />

It shows the item if the specific condition is met.

<DynamicAttribute name="hide-if" value="condition" />

It hides the item if the specific condition is met.

<div align="center">
  <g-image src="~/assets/images/netlify-conditions.png" />
</div>

### Reference & Multi-Reference

The reference field is a Collection field that you can add to any of your Collections but instead of using an option field and choosing from a list of predefined values, the reference field allows you to choose from any item from another Collection. A multi-reference field allows you to reference more than one item from another Collection and then present these items in a Collection List on a Collection Page. 

To make these fields dynamic, insert a Div element that will tell us what to reference with the attribute:

<DynamicAttribute name="reference" value="the name of the corresponding CMS field" />

For example when we want to show the categories in a Posts Collection.

This Div element must have the attribute:

<Attribute name="reference" value="categories" />

<div align="center">
  <g-image src="~/assets/images/netlify-reference.png" />
</div>

The same also applies to multireference fields. Obviously these will be replicated on the basis of the number of references. In fact, you can also use the limit attribute to decide how many references to show.

<DynamicAttribute name="multi-reference" value="the name of the corresponding CMS field" />

<DynamicAttribute name="limit" value="number of multi references" />