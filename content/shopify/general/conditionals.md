---
description: ''
sidebar: 'shopify'
prev: '/shopify/general/sections/'
next: '/shopify/general/liquid/'
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

#### Customer

Show/Hide element if the user is currently logged in:

<Attribute name="show-if" value="logged-in" />

#### Gift card

##### Active
Show/Hide element if gift card is active:

<Attribute name="show-if" value="gift-card-active" />

##### Used
Show/Hide element if gift card has been used:

<Attribute name="show-if" value="gift-card-used" />

##### Enabled
Show/Hide element if gift card is enabled:

<Attribute name="show-if" value="gift-card-enabled" />

##### Expired
Show/Hide element if gift card is expired:

<Attribute name="show-if" value="gift-card-expired" />


#### Orders

Show/Hide element if currently logged in user has made any order:

<Attribute name="show-if" value="has-orders" />

#### Cart

##### Items in Cart

Show/Hide element if the cart has items inside:

<Attribute name="show-if" value="has-items-in-cart" />

##### Empty

Show/Hide element if the cart is empty:

<Attribute name="show-if" value="cart-empty" />


#### Product

Show/hide element if the current product (only works within single product page) has related products:

<Attribute name="show-if" value="has-related-products" />

#### Order

##### Cancelled 

Show/Hide element if the order has been cancelled:

<Attribute name="show-if" value="order-cancelled" />

##### Order item fulfilled

Show/Hide element if the current order item has been fulfilled:

<Attribute name="show-if" value="order-item-fulfilled" />

##### Order item has tracking url

Show/Hide element if the current order item has a tracking url:

<Attribute name="show-if" value="order-item-tracking-url" />

## Notes

The elements you hide/show with conditionals will not be sent at all from the Server to the Browser, so they will not be "hidden" by css or js, they will not be present at all inside the DOM!