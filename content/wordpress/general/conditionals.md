---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/general/terms-query/'
next: '/wordpress/general/social-links/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';


# Conditionals

The following attributes can be used on every element to show or hide it, based on specific conditions.

## Show If

By using the attribute:

<DynamicAttribute name="show-if" value="condition" />

The element will be rendered only if the *condition* is met.

## Hide if

By using the attribute:

<DynamicAttribute name="hide-if" value="condition" />

The element will not be rendered only if the *condition* is met.


## Conditions

Below you will find all valid conditions, divided by sector, for brevity you will find all the attributes only with show-if, but you can change it with hide-if without any issue:

#### User

Show/Hide element if the user is currently logged in:

<Attribute name="show-if" value="logged-in" />

#### Dynamic Box

Show/Hide element if the dynamic box is not empty:

<Attribute name="show-if" value="dynamic-box" />


#### Rules Conditions

Rules are functionalities that allow to create specific conditions, manageable from the [Udesly WP plugin](/wordpress/plugin/rules/).

Attribute is:

<DynamicAttribute name="show-if:rule" value="rule slug" />

#### ACF conditions

This is to hide/show an element if the ACF field is set.

Attribute is:

<DynamicAttribute name="show-if:acf" value="slug of the acf field" />

#### WooCommerce Conditions

##### Upsells

This is to hide/show an element if the current product has upsells:

<Attribute name="show-if:wc" value="upsells" />

##### Related

This is to hide/show an element if the current product has related:

<Attribute name="show-if:wc" value="related" />

##### Rating

This is to hide/show an element if the current product has rating:

<Attribute name="show-if:wc" value="rating" />

##### In Stock

This is to hide/show an element if the current product is in stock:

<Attribute name="show-if:wc" value="in-stock" />


##### Backorder allowed:

This is to hide/show an element if for the current product the backorder feature is enabled, regardless of the presence or absence of a product in stock:

<Attribute name="show-if:wc" value="backorder-allowed" />


##### On Backorder

This is to hide/show an element if the current product can be bought in backorder:

<Attribute name="show-if:wc" value="on-backorder" />



## Notes

The elements you hide/show with conditionals will not be sent at all from the Server to the Browser, so they will not be "hidden" by css or js, they will not be present at all inside the DOM!